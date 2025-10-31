# 📚 How to Create New Lessons

This guide explains how to create new interactive lessons using the shared framework.

## 📁 File Structure

```
english/
├── lesson.css                    # Shared CSS framework (reusable)
├── lesson.js                     # Shared JavaScript framework (reusable)
├── weather_lesson_complete.html  # Unit 01 HTML
├── people_lesson.html            # Unit 02 HTML
├── audio_texts.json              # Unit 01 audio texts
├── audio_texts_unit02.json       # Unit 02 audio texts
├── generate_audio.py             # Unit 01 audio generator
├── generate_audio_unit02.py      # Unit 02 audio generator
├── audio/                        # Generated audio files
└── HOW_TO_CREATE_LESSONS.md      # This file
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

```bash
# Install dependencies
pip install openai python-dotenv

# Create .env file with your API key
echo "OPENAI_API_KEY=your_key_here" > .env

# Run the script
python3 generate_audio_unitXX.py
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

### For GitHub Pages:

1. Create a repository
2. Upload all files (HTML, CSS, JS, audio/)
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at `https://username.github.io/repo-name/`

### For Vercel/Netlify:

1. Connect your GitHub repository
2. These platforms auto-deploy on push
3. No configuration needed!

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

## 🎉 You're Ready!

You now have everything you need to create amazing interactive English lessons!

**Next steps:**
1. Choose a unit from the textbook
2. Create the markdown outline
3. Build the HTML with exercises
4. Generate audio
5. Test thoroughly
6. Share with students!

**Happy teaching! 📚✨**
