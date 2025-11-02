# 📚 How to Create New Lessons

This guide explains how to create new interactive lessons using the shared framework.

## 📁 File Structure

```
english-weather-lesson/
├── index.html                    # Main page - lesson selection
├── lesson.css                    # Shared CSS framework (reusable)
├── lesson.js                     # Shared JavaScript framework (reusable)
├── weather_lesson_complete.html  # Unit 01 HTML
├── people_lesson.html            # Unit 02 HTML
├── audio_texts_unit01.json       # Unit 01 audio texts
├── audio_texts_unit02.json       # Unit 02 audio texts
├── generate_audio_unit01.py      # Unit 01 audio generator
├── generate_audio_unit02.py      # Unit 02 audio generator
├── audio/                        # Generated audio files (123 MP3s)
├── HOW_TO_CREATE_LESSONS.md      # This file
├── PROJECT_README.md             # Project overview
├── README.md                     # Repository README
└── Unit_02_People.md             # Source markdown for Unit 02
```

---

## 🚀 Quick Start: Creating a New Lesson

### Step 1: Create the HTML File

1. **Copy the template structure** from `people_lesson.html`
2. **Update the header** (title, quote, emoji)
3. **Define navigation sections** in the nav-pills
4. **Create content sections** for each part of the lesson

### Step 2: Link Shared Resources

In your HTML file's `<head>`:

```html
<link rel="stylesheet" href="lesson.css">
```

Before the closing `</body>` tag:

```html
<script src="lesson.js"></script>
```

### Step 3: Initialize the Lesson

At the end of your HTML, add:

```javascript
<script>
    // Define your sections
    const sections = ['intro', 'section1', 'section2', 'quiz'];

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        LessonFramework.init(sections);
    });
</script>
```

### Step 4: Create Audio Texts JSON

Create `audio_texts_unit0X.json`:

```json
{
  "category_name": {
    "key1": "Text to convert to speech",
    "key2": "Another text"
  }
}
```

### Step 5: Create Audio Generator Script

Copy `generate_audio_unit02.py` and modify:
- Update the JSON filename
- Update category names
- Update the title in print statements

### Step 6: Add to Main Page (index.html)

Add your new lesson to the main page so users can find it:

```html
<!-- Add this card to the lessons-grid in index.html -->
<div class="lesson-card" onclick="window.location.href='unit03_lesson.html'">
    <div class="lesson-icon">🎭</div>
    <div class="unit-number">Unit 03</div>
    <h2>Your Topic</h2>
    <p>Brief description of what students will learn...</p>

    <div class="stats">
        <div class="stat-item">
            <div class="stat-number">X</div>
            <div class="stat-label">Sections</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">X+</div>
            <div class="stat-label">Questions</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">X</div>
            <div class="stat-label">Audio Files</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">X+</div>
            <div class="stat-label">Exercises</div>
        </div>
    </div>

    <div class="tags">
        <span class="tag">Grammar Topic 1</span>
        <span class="tag">Grammar Topic 2</span>
        <span class="tag">Key Vocabulary</span>
    </div>

    <a href="unit03_lesson.html" class="start-btn">Start Learning →</a>
</div>
```

Don't forget to update the footer statistics in `index.html`:

```html
<!-- Update these numbers in the footer -->
<div class="footer-stat-number">3</div>  <!-- Total units -->
<div class="footer-stat-label">Complete Units</div>

<div class="footer-stat-number">XXX+</div>  <!-- Total questions -->
<div class="footer-stat-label">Interactive Questions</div>

<div class="footer-stat-number">XXX</div>  <!-- Total audio -->
<div class="footer-stat-label">Audio Pronunciations</div>
```

---

## 🎨 Available Components

### 1. Cards

```html
<div class="card">
    <h2><span class="emoji">📖</span> Section Title</h2>
    <h3>Subsection</h3>
    <p>Content...</p>
</div>
```

### 2. Multiple Choice Questions

```html
<div class="quiz-container">
    <div class="quiz-question">
        <h4>Question text?</h4>
        <div class="quiz-options">
            <label class="quiz-option">
                <input type="radio" name="q1" value="a"> Option A
            </label>
            <label class="quiz-option">
                <input type="radio" name="q1" value="b"> Option B
            </label>
        </div>
    </div>
    <button class="check-btn" onclick="checkMyQuiz()">Check Answers</button>
    <div class="score-display" id="quizScore"></div>
</div>
```

JavaScript:

```javascript
function checkMyQuiz() {
    const answers = { q1: 'a', q2: 'b' };
    LessonFramework.checkMultipleChoice(answers, 'quizScore');
}
```

### 3. Fill in the Blanks

```html
<input type="text" class="fill-blank" id="blank1" placeholder="...">
```

JavaScript:

```javascript
function checkBlanks() {
    const answers = {
        blank1: 'answer',
        blank2: ['answer1', 'answer2']  // Multiple accepted answers
    };
    LessonFramework.checkFillInBlanks(answers, 'blankScore');
}
```

### 4. Dropdown Selection

```html
<select class="fill-blank" id="drop1">
    <option value="">Choose...</option>
    <option value="a">Option A</option>
    <option value="b">Option B</option>
</select>
```

JavaScript:

```javascript
function checkDropdowns() {
    const answers = { drop1: 'a', drop2: 'b' };
    LessonFramework.checkDropdowns(answers, 'dropScore');
}
```

### 5. True/False

Same as multiple choice, just use:

```javascript
function checkTrueFalse() {
    const answers = { tf1: 'true', tf2: 'false', tf3: 'ns' };  // ns = not say
    LessonFramework.checkMultipleChoice(answers, 'tfScore');
}
```

### 6. Vocabulary Cards

```html
<div class="vocab-grid">
    <div class="vocab-card">
        <h4>Word <button class="speaker-btn" onclick="playAudio('word')">🔊</button></h4>
        <div class="type">noun</div>
        <div class="meaning">Definition here</div>
    </div>
</div>
```

### 7. Reading Text

```html
<div class="reading-text">
    <p>Paragraph 1...</p>
    <p>Paragraph 2...</p>
</div>
```

### 8. Info Boxes

```html
<!-- Tip (blue) -->
<div class="info-box tip">
    <p>Helpful tip...</p>
</div>

<!-- Warning (yellow) -->
<div class="info-box warning">
    <p>Important note...</p>
</div>

<!-- Success (green) -->
<div class="info-box success">
    <p>Great job!</p>
</div>
```

### 9. Tables

```html
<table>
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

### 10. Text Areas (Writing Tasks)

```html
<textarea id="mytext" placeholder="Write here..." style="min-height: 150px;"></textarea>
<button class="submit-btn" onclick="saveMyText()">Save</button>
<div class="score-display" id="textMessage"></div>
```

JavaScript:

```javascript
function saveMyText() {
    LessonFramework.saveTextarea('mytext', 'textMessage', 100, 'Your text has been saved!');
}
```

### 11. Audio Buttons

```html
<button class="speaker-btn" onclick="playAudio('filename')">🔊</button>
```

The audio file should be in `/audio/filename.mp3`.

---

## 📝 JavaScript Functions Reference

### Built-in Checking Functions

```javascript
// Multiple choice / True-False
LessonFramework.checkMultipleChoice(answers, scoreElementId)

// Fill in the blanks
LessonFramework.checkFillInBlanks(answers, scoreElementId)

// Dropdown selections
LessonFramework.checkDropdowns(answers, scoreElementId)

// Text area saving
LessonFramework.saveTextarea(textareaId, messageElementId, minLength, successMessage)

// Display score manually
LessonFramework.displayScore(elementId, score, total)

// Play audio
LessonFramework.playAudio(filename)
```

### Navigation Functions

```javascript
// Go to next section
LessonFramework.nextSection()

// Go to previous section
LessonFramework.previousSection()

// Show specific section
LessonFramework.showSection(sectionId)
```

---

## 🎯 Exercise Types Checklist

When creating a lesson, make sure to include variety:

- [ ] **Multiple choice questions** (grammar, vocabulary)
- [ ] **Fill in the blanks** (texts, dialogues)
- [ ] **Reading comprehension** (articles, stories)
- [ ] **True/False/Not Say** (reading comprehension)
- [ ] **Matching exercises** (opposite words, definitions)
- [ ] **Vocabulary cards** (key words with audio)
- [ ] **Writing tasks** (essays, diary entries)
- [ ] **Speaking prompts** (discussion questions)
- [ ] **Grammar explanations** (info boxes with examples)
- [ ] **Final quiz** (comprehensive test)

---

## 🔊 Audio Generation

### Step 1: Create JSON File

Create `audio_texts_unitXX.json`:

```json
{
  "category1": {
    "item1": "Text to speak",
    "item2": "Another text"
  },
  "category2": {
    "word1": "word",
    "word2": "another word"
  }
}
```

### Step 2: Create Python Script

Copy `generate_audio_unit02.py` to `generate_audio_unitXX.py` and modify:

1. Change JSON filename:
```python
with open('audio_texts_unitXX.json', 'r', encoding='utf-8') as f:
```

2. Update categories list:
```python
categories = [
    ('category1', 'Display Name 1'),
    ('category2', 'Display Name 2'),
]
```

3. Update title:
```python
print("🎙️  GENERATING AUDIO FILES FOR UNIT XX: TITLE")
```

### Step 3: Generate Audio

**Important:** If you get an error about "externally-managed-environment", use a virtual environment:

```bash
# Check if virtual environment already exists
ls -la .venv

# If not, create one
python3 -m venv .venv

# Activate it
source .venv/bin/activate

# Install dependencies
pip install openai python-dotenv

# Create .env file with your API key (if not exists)
echo "OPENAI_API_KEY=your_key_here" > .env

# Run the script
python3 generate_audio_unitXX.py

# When done, you can deactivate
deactivate
```

**Or if .venv already exists:**

```bash
# Activate virtual environment
source .venv/bin/activate

# Run the script
python3 generate_audio_unitXX.py
```

**Expected output:**

```
============================================================
🎙️  GENERATING AUDIO FILES FOR UNIT XX: TITLE
============================================================

📂 Category Name
------------------------------------------------------------
🔊 Generating filename.mp3: "Text..."
✅ Created filename.mp3
...

============================================================
✅ COMPLETE! Generated XX audio files for Unit XX
📁 Audio files saved in: /path/to/audio
============================================================
```

---

## 🎨 Styling Tips

### Using CSS Variables

The framework provides these variables:

```css
var(--primary-color)    /* Blue - #4A90E2 */
var(--secondary-color)  /* Green - #50C878 */
var(--accent-color)     /* Red - #FF6B6B */
var(--light-bg)         /* Light gray - #f8f9fa */
var(--text-dark)        /* Dark text - #2c3e50 */
```

### Custom Colors for Sections

```html
<div class="vocab-card" style="border-top-color: #FF6B6B;">
    <!-- Red top border -->
</div>
```

### Responsive Design

The framework is mobile-responsive by default. Test on different screen sizes!

---

## ✅ Quality Checklist

Before publishing your lesson:

- [ ] All exercises have check buttons
- [ ] All check buttons have working JavaScript functions
- [ ] All score displays have unique IDs
- [ ] Audio buttons point to correct filenames
- [ ] All sections are in the `sections` array
- [ ] Navigation pills match section IDs
- [ ] Mobile responsive (test on small screen)
- [ ] All grammar explanations are clear
- [ ] Vocabulary has definitions
- [ ] Final quiz covers all topics
- [ ] Congratulations message appears on 100%

---

## 🐛 Troubleshooting

### Problem: Buttons don't work

**Solution:** Check that:
1. Function is defined in `<script>` tag
2. Button has correct `onclick="functionName()"`
3. No typos in function names

### Problem: Audio doesn't play

**Solution:** Check that:
1. Audio file exists in `/audio/` folder
2. Filename matches (case-sensitive!)
3. File is `.mp3` format

### Problem: Scores don't display

**Solution:** Check that:
1. Score element ID matches in function call
2. Element has `class="score-display"`
3. Element has correct `id="..."`

### Problem: Navigation doesn't work

**Solution:** Check that:
1. All sections are in `sections` array
2. Nav pills have correct `data-section` attributes
3. Section divs have matching `id` attributes
4. `LessonFramework.init(sections)` is called

---

## 📊 Example Lesson Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unit X: Title</title>
    <link rel="stylesheet" href="lesson.css">
</head>
<body>
    <header>
        <h1>🎯 Unit X: Title</h1>
        <p>"Quote here" — Author</p>
        <div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>
    </header>

    <div class="container">
        <div class="nav-pills">
            <div class="nav-pill active" data-section="intro">📋 Overview</div>
            <div class="nav-pill" data-section="grammar">📖 Grammar</div>
            <div class="nav-pill" data-section="vocab">📝 Vocabulary</div>
            <div class="nav-pill" data-section="quiz">✅ Quiz</div>
        </div>

        <div class="section active" id="intro">
            <!-- Overview content -->
        </div>

        <div class="section" id="grammar">
            <!-- Grammar content -->
        </div>

        <div class="section" id="vocab">
            <!-- Vocabulary content -->
        </div>

        <div class="section" id="quiz">
            <!-- Quiz content -->
        </div>

        <div class="nav-buttons">
            <button class="prev-btn" onclick="previousSection()">← Previous</button>
            <button class="next-btn" onclick="nextSection()">Next →</button>
        </div>
    </div>

    <script src="lesson.js"></script>
    <script>
        const sections = ['intro', 'grammar', 'vocab', 'quiz'];
        document.addEventListener('DOMContentLoaded', function() {
            LessonFramework.init(sections);
        });

        // Your exercise functions here
        function checkGrammar() {
            // ...
        }
    </script>
</body>
</html>
```

---

## 🎓 Best Practices

### 1. **Exercise Variety**
- Mix different exercise types
- Balance difficulty (easy → medium → hard)
- Include both receptive (reading/listening) and productive (writing/speaking) tasks

### 2. **Clear Instructions**
- Use info boxes for instructions
- Provide examples before exercises
- Use consistent language ("Choose the best answer", "Fill in the blanks", etc.)

### 3. **Immediate Feedback**
- Every exercise should have a check button
- Show score with encouraging messages
- Use colors: green = correct, red = incorrect

### 4. **Progressive Structure**
- Start with introduction/overview
- Teach new content (grammar, vocabulary)
- Practice exercises
- End with comprehensive quiz

### 5. **Audio Integration**
- Add audio for vocabulary words
- Include audio for example sentences
- Provide audio for reading texts
- Use consistent voice throughout

### 6. **Accessibility**
- Use semantic HTML
- Provide alt text for images (if used)
- Ensure keyboard navigation works
- Test with screen readers if possible

---

## 📱 Deployment

### Step-by-Step: Adding Your New Lesson to Git

```bash
# 1. Check what changed
git status

# 2. Add all new files
git add .

# 3. Commit with descriptive message
git commit -m "Add Unit 03: Your Topic

- Added Unit 03 lesson with XX+ questions
- Created XX audio files
- Updated main page (index.html)
- Updated README statistics
- Total: X units, XXX audio files, XXX+ questions"

# 4. Push to GitHub
git push

# 5. Check your site (if GitHub Pages is enabled)
# https://your-username.github.io/english-weather-lesson/
```

### For GitHub Pages:

1. Go to your repository on GitHub
2. Settings → Pages
3. Select **main** branch
4. Click Save
5. Your site will be at `https://username.github.io/repo-name/`
6. Updates automatically on every push!

### For Vercel/Netlify:

1. Connect your GitHub repository
2. These platforms auto-deploy on push
3. No configuration needed!
4. Get custom domain for free

### Testing Before Deploy

```bash
# Test locally with Python server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000

# Test on mobile devices (same network)
# Use your computer's IP address: http://192.168.x.x:8000
```

---

## 🔄 Updating Shared Framework

If you need to add new features to `lesson.css` or `lesson.js`:

1. Test changes on one lesson first
2. Update the shared file
3. Test on all existing lessons
4. Update version number in comments
5. Document changes in this file

---

## 💡 Tips & Tricks

### Reusing Content

Create a `snippets.md` file with reusable HTML:

```markdown
## Grammar Tip Box
<div class="info-box tip">
    <h4>Grammar Reminder</h4>
    <p>Tip here...</p>
</div>

## Success Message
<div class="info-box success">
    <h3>🎉 Congratulations!</h3>
    <p>You've completed...</p>
</div>
```

### Fast Prototyping

1. Start with text content only
2. Add basic structure (cards, sections)
3. Add interactivity (quizzes)
4. Add audio last (it takes time to generate)
5. Polish styling

### Testing Checklist

Test every lesson on:
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)
- [ ] Tablet

---

## 📚 Resources

- **OpenAI TTS Documentation**: https://platform.openai.com/docs/guides/text-to-speech
- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **JavaScript Events**: https://developer.mozilla.org/en-US/docs/Web/Events

---

## 📋 Complete Workflow Checklist

Use this checklist when creating a new lesson from start to finish:

### Phase 1: Planning (30 min)
- [ ] Choose unit from textbook
- [ ] Read through all content
- [ ] List all exercises to include
- [ ] Plan section structure
- [ ] Choose emoji for main page

### Phase 2: Content Creation (2-3 hours)
- [ ] Copy `people_lesson.html` to `unitXX_lesson.html`
- [ ] Update header (title, quote, emoji)
- [ ] Create navigation sections
- [ ] Add all reading texts
- [ ] Add all exercises (multiple choice, fill-in, etc.)
- [ ] Add grammar explanations
- [ ] Add vocabulary cards
- [ ] Create final quiz
- [ ] Test all exercises work

### Phase 3: Audio Generation (30 min)
- [ ] Create `audio_texts_unitXX.json`
- [ ] List all vocabulary words
- [ ] List all example sentences
- [ ] List all reading texts
- [ ] Copy `generate_audio_unit02.py` to `generate_audio_unitXX.py`
- [ ] Update JSON filename in script
- [ ] Update categories list
- [ ] Update title in print statements
- [ ] Activate virtual environment
- [ ] Run audio generation script
- [ ] Verify all MP3 files created

### Phase 4: Main Page Integration (15 min)
- [ ] Open `index.html`
- [ ] Copy lesson card template
- [ ] Update icon emoji
- [ ] Update unit number
- [ ] Update title and description
- [ ] Update statistics (sections, questions, audio, exercises)
- [ ] Update tags (grammar topics)
- [ ] Update footer statistics (total units, questions, audio)
- [ ] Test card links work

### Phase 5: Testing (30 min)
- [ ] Open lesson in browser
- [ ] Test all navigation (pills, arrows, keyboard)
- [ ] Test all exercises check correctly
- [ ] Test all audio buttons play
- [ ] Test on mobile device
- [ ] Test final quiz
- [ ] Check all sections accessible
- [ ] Verify no console errors

### Phase 6: Documentation (15 min)
- [ ] Update README.md statistics
- [ ] Document any new features used
- [ ] Take screenshots (optional)
- [ ] Write commit message

### Phase 7: Deployment (10 min)
- [ ] `git status` - check changes
- [ ] `git add .` - stage all files
- [ ] `git commit -m "..."` - commit with message
- [ ] `git push` - deploy to GitHub
- [ ] Check GitHub Pages updated
- [ ] Test on live site
- [ ] Share link with students!

---

## 🎉 You're Ready!

You now have everything you need to create amazing interactive English lessons!

**Estimated time per lesson:**
- First lesson: 4-5 hours
- Second lesson: 3-4 hours (familiar with process)
- Third+ lessons: 2-3 hours (faster with experience)

**Tips for efficiency:**
- Reuse exercise patterns from existing lessons
- Generate audio in batches
- Test as you build (don't wait until the end)
- Use browser DevTools to debug issues quickly

**Happy teaching! 📚✨**
