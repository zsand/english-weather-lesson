/**
 * Shared JavaScript Framework for English Lessons
 * Version: 1.0
 * Use this file for all lesson HTML pages
 */

// ===== GLOBAL LESSON STATE =====
const LessonFramework = {
    currentSection: 0,
    sections: [],
    currentAudio: null,
    currentButton: null,

    // ===== INITIALIZATION =====
    init: function(sections) {
        this.sections = sections;
        this.updateProgress();
        this.setupNavigation();
        this.setupKeyboardNav();
        this.preloadCommonAudio();
    },

    // ===== NAVIGATION =====
    setupNavigation: function() {
        const navPills = document.querySelectorAll('.nav-pill');
        navPills.forEach((pill, index) => {
            pill.addEventListener('click', () => {
                const section = pill.getAttribute('data-section');
                this.showSection(section);
                this.currentSection = this.sections.indexOf(section);
                this.updateProgress();
            });
        });
    },

    showSection: function(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        document.querySelectorAll('.nav-pill').forEach(pill => {
            pill.classList.remove('active');
            if (pill.getAttribute('data-section') === sectionId) {
                pill.classList.add('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    nextSection: function() {
        if (this.currentSection < this.sections.length - 1) {
            this.currentSection++;
            this.showSection(this.sections[this.currentSection]);
            this.updateProgress();
        }
    },

    previousSection: function() {
        if (this.currentSection > 0) {
            this.currentSection--;
            this.showSection(this.sections[this.currentSection]);
            this.updateProgress();
        }
    },

    // ===== PROGRESS BAR =====
    updateProgress: function() {
        const progress = ((this.currentSection + 1) / this.sections.length) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    },

    // ===== KEYBOARD NAVIGATION =====
    setupKeyboardNav: function() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') this.nextSection();
            else if (e.key === 'ArrowLeft') this.previousSection();
        });
    },

    // ===== QUIZ CHECKING FUNCTIONS =====
    checkMultipleChoice: function(answers, scoreElementId) {
        let score = 0;
        Object.keys(answers).forEach(q => {
            const selected = document.querySelector(`input[name="${q}"]:checked`);
            const options = document.querySelectorAll(`input[name="${q}"]`);
            options.forEach(opt => {
                const label = opt.parentElement;
                label.classList.remove('correct', 'incorrect');
                if (opt.value === answers[q]) label.classList.add('correct');
                if (selected && opt === selected && opt.value !== answers[q]) label.classList.add('incorrect');
            });
            if (selected && selected.value === answers[q]) score++;
        });
        this.displayScore(scoreElementId, score, Object.keys(answers).length);
        return score;
    },

    checkFillInBlanks: function(answers, scoreElementId) {
        let score = 0;
        Object.keys(answers).forEach(id => {
            const input = document.getElementById(id);
            if (!input) return;

            const userAnswer = input.value.trim().toLowerCase().replace(/'/g, '').replace(/\s+/g, ' ');
            const correctAnswers = Array.isArray(answers[id]) ? answers[id] : [answers[id]];

            input.classList.remove('correct', 'incorrect');

            const isCorrect = correctAnswers.some(answer => {
                const normalizedAnswer = answer.toLowerCase().replace(/'/g, '').replace(/\s+/g, ' ');
                return userAnswer === normalizedAnswer || userAnswer.includes(normalizedAnswer);
            });

            if (isCorrect) {
                input.classList.add('correct');
                score++;
            } else {
                input.classList.add('incorrect');
            }
        });
        this.displayScore(scoreElementId, score, Object.keys(answers).length);
        return score;
    },

    checkDropdowns: function(answers, scoreElementId) {
        let score = 0;
        Object.keys(answers).forEach(id => {
            const select = document.getElementById(id);
            if (!select) return;

            if (select.value === answers[id]) {
                select.style.borderColor = 'var(--secondary-color)';
                select.style.background = '#d4edda';
                score++;
            } else if (select.value) {
                select.style.borderColor = 'var(--accent-color)';
                select.style.background = '#f8d7da';
            }
        });
        this.displayScore(scoreElementId, score, Object.keys(answers).length);
        return score;
    },

    // ===== SCORE DISPLAY =====
    displayScore: function(elementId, score, total) {
        const percentage = (score / total) * 100;
        const scoreElement = document.getElementById(elementId);
        if (!scoreElement) return;

        let message = '';
        let emoji = '';
        if (percentage === 100) {
            message = 'Perfect!';
            emoji = '🎉';
        } else if (percentage >= 80) {
            message = 'Great job!';
            emoji = '👏';
        } else if (percentage >= 60) {
            message = 'Good effort!';
            emoji = '👍';
        } else {
            message = 'Keep practicing!';
            emoji = '💪';
        }
        scoreElement.innerHTML = `<h3>${emoji} ${message}</h3><p style="font-size: 1.5rem; margin-top: 1rem;">Your score: ${score} / ${total} (${percentage.toFixed(0)}%)</p>`;
        scoreElement.classList.add('show');
    },

    // ===== AUDIO PLAYBACK =====
    playAudio: function(filename) {
        const audioPath = `audio/${filename}.mp3`;

        // If same audio is playing, stop it
        if (this.currentAudio && !this.currentAudio.paused && this.currentAudio.src.includes(filename)) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            if (this.currentButton) {
                this.currentButton.classList.remove('playing');
            }
            this.currentAudio = null;
            this.currentButton = null;
            return;
        }

        // Stop any currently playing audio
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            if (this.currentButton) {
                this.currentButton.classList.remove('playing');
            }
        }

        // Create and play new audio
        this.currentAudio = new Audio(audioPath);
        this.currentButton = event.target;
        this.currentButton.classList.add('playing');

        this.currentAudio.play().catch(error => {
            console.error('Error playing audio:', error);
            this.currentButton.classList.remove('playing');
        });

        // Remove playing class when audio ends
        this.currentAudio.addEventListener('ended', () => {
            if (this.currentButton) {
                this.currentButton.classList.remove('playing');
            }
            this.currentAudio = null;
            this.currentButton = null;
        });
    },

    preloadCommonAudio: function() {
        // Override this in your lesson file to preload specific audio
    },

    // ===== TEXT SAVING FUNCTIONS =====
    saveTextarea: function(textareaId, messageElementId, minLength, successMessage) {
        const textarea = document.getElementById(textareaId);
        const messageElement = document.getElementById(messageElementId);

        if (!textarea || !messageElement) return;

        if (textarea.value.trim().length >= minLength) {
            messageElement.innerHTML = `<h3>✅ Excellent!</h3><p>${successMessage}</p>`;
            messageElement.classList.add('show');
        } else {
            alert(`Please write at least ${minLength} characters.`);
        }
    },

    // ===== ORDERING EXERCISE =====
    checkOrdering: function(userOrder, correctOrder, scoreElementId) {
        let score = 0;
        userOrder.forEach((value, index) => {
            if (value === correctOrder[index]) score++;
        });
        this.displayScore(scoreElementId, score, correctOrder.length);
        return score;
    },

    // ===== MATCHING EXERCISE =====
    checkMatching: function(userMatches, correctMatches, scoreElementId) {
        let score = 0;
        Object.keys(correctMatches).forEach(key => {
            if (userMatches[key] === correctMatches[key]) score++;
        });
        this.displayScore(scoreElementId, score, Object.keys(correctMatches).length);
        return score;
    },

    // ===== TRUE/FALSE EXERCISE =====
    checkTrueFalse: function(answers, scoreElementId) {
        return this.checkMultipleChoice(answers, scoreElementId);
    },

    // ===== UTILITIES =====
    normalizeAnswer: function(answer) {
        return answer.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    },

    shuffleArray: function(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
};

// ===== CONVENIENCE FUNCTIONS (for backward compatibility) =====
function nextSection() {
    LessonFramework.nextSection();
}

function previousSection() {
    LessonFramework.previousSection();
}

function playAudio(filename) {
    LessonFramework.playAudio(filename);
}

function displayScore(elementId, score, total) {
    LessonFramework.displayScore(elementId, score, total);
}
