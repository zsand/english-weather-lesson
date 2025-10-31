# 📚 Interactive English Lessons

> **Beautiful, interactive English lessons with audio support**

Two complete pre-intermediate English lessons converted from PDF textbook to interactive web format.

🔗 **[View Live Demo →](https://your-username.github.io/english-weather-lesson/)**

---

## 🚀 Quick Start

### View Lessons

**Main Page** 🏠
```bash
open index.html
```

**Unit 01: Weather** 🌤️
```bash
open weather_lesson_complete.html
```

**Unit 02: People** 👥
```bash
open people_lesson.html
```

### Online Access

If deployed to GitHub Pages:
- **Main Page:** `https://your-username.github.io/english-weather-lesson/`
- **Unit 01:** `https://your-username.github.io/english-weather-lesson/weather_lesson_complete.html`
- **Unit 02:** `https://your-username.github.io/english-weather-lesson/people_lesson.html`

---

## 📖 Available Lessons

### Unit 01: Weather 🌤️

**Grammar:**
- Present Simple vs Present Continuous
- Question formation

**Vocabulary:**
- Weather types (blizzard, drought, hurricane, storm)
- Modifiers (very, quite, extremely)
- Adventure activities

**Features:**
- 8 interactive sections
- 25+ exercises with instant feedback
- 50+ questions
- 80+ audio files with pronunciation
- Reading: "The Big Chill" (Siberia)
- Scenario: Planning adventure holidays

**File:** `weather_lesson_complete.html`

---

### Unit 02: People 👥

**Grammar:**
- Past Simple (regular & irregular verbs)
- Past Continuous
- Time expressions (in, on, at)

**Vocabulary:**
- 10 personality adjectives (dedicated, determined, friendly...)
- Opposite adjectives (polite-rude, friendly-unfriendly...)
- Describing appearance and character

**Features:**
- 6 interactive sections
- 30+ exercises with instant feedback
- 60+ questions
- 49 audio files with pronunciation
- Reading: Kenyan marathon runner story
- Biography: Frida Kahlo (1907-1954)
- Learning styles questionnaire (24 questions!)
- Writing: Keeping a learning diary

**File:** `people_lesson.html`

---

## ✨ Features

### For Students 🎓
- ✅ **Interactive exercises** - Multiple choice, fill-in-blanks, true/false
- ✅ **Instant feedback** - See results immediately with color coding
- ✅ **Audio pronunciation** - 🔊 buttons for all vocabulary and texts
- ✅ **Progress tracking** - Visual progress bar shows completion
- ✅ **Mobile responsive** - Works perfectly on phones and tablets
- ✅ **Keyboard navigation** - Use arrow keys ← → to navigate
- ✅ **Offline ready** - No internet needed after loading

### For Teachers 👨‍🏫
- ✅ **Easy deployment** - Single HTML file, works anywhere
- ✅ **100% coverage** - All exercises from original textbook
- ✅ **Reusable framework** - Shared CSS/JS for creating new lessons
- ✅ **Professional audio** - OpenAI TTS with natural voice
- ✅ **Open source** - Customize and extend as needed

---

## 📊 Statistics

| Metric | Unit 01 | Unit 02 | Total |
|--------|---------|---------|-------|
| Sections | 8 | 6 | 14 |
| Exercises | 25+ | 30+ | 55+ |
| Questions | 50+ | 60+ | 110+ |
| Audio Files | 74 | 49 | 123 |
| Vocabulary Items | 30+ | 20+ | 50+ |

**Total Project:**
- 🎯 2 complete units
- 📝 110+ interactive questions
- 🔊 123 audio files
- 📱 100% mobile responsive
- 🚀 Zero dependencies

---

## 🎨 Shared Framework

Both lessons use the same reusable components:

### `lesson.css` (11KB)
- Beautiful gradient header
- Interactive quiz components
- Vocabulary cards
- Info boxes (tips, warnings, success)
- Responsive design
- Print-friendly styles

### `lesson.js` (10KB)
- Navigation system
- Exercise checking functions
- Audio playback
- Score calculation
- Keyboard controls

**Create new lessons easily** by reusing these files!

---

## 🔊 Audio Files

### Generation

All audio generated using OpenAI TTS API with "Nova" voice (female, natural).

**To regenerate or add new audio:**

```bash
# Install dependencies
pip3 install openai python-dotenv

# Create .env file
echo "OPENAI_API_KEY=your_key_here" > .env

# Generate Unit 01 audio
python3 generate_audio_unit01.py

# Generate Unit 02 audio
python3 generate_audio_unit02.py
```

### Audio Content

**Unit 01:** Weather words, definitions, examples, reading texts, grammar examples, discussion questions

**Unit 02:** Personality adjectives, Frida Kahlo biography, Chimokel story, time expressions, opposites

---

## 📱 Browser Compatibility

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | ✅ |

---

## 🚀 Deployment

### GitHub Pages (Recommended)

Already set up! Just push changes:

```bash
git add .
git commit -m "Add Unit 02"
git push
```

Your site updates automatically at: `https://your-username.github.io/english-weather-lesson/`

### Local Server

```bash
# Python 3
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### Other Options
- **Vercel:** Connect GitHub repo, auto-deploy
- **Netlify:** Drag & drop folder
- **Any web server:** Upload files, done!

---

## 🛠️ Creating New Lessons

Full guide available in: **[HOW_TO_CREATE_LESSONS.md](HOW_TO_CREATE_LESSONS.md)**

### Quick Steps:

1. **Copy template**
   ```bash
   cp people_lesson.html unit03_lesson.html
   ```

2. **Link shared resources**
   ```html
   <link rel="stylesheet" href="lesson.css">
   <script src="lesson.js"></script>
   ```

3. **Add your content**
   - Update sections
   - Add exercises
   - Create audio JSON

4. **Generate audio**
   ```bash
   python3 generate_audio_unit03.py
   ```

5. **Test and deploy!**

---

## 📂 File Structure

```
english-weather-lesson/
├── 🏠 MAIN PAGE
│   └── index.html              # Lesson selection page
│
├── 🎨 SHARED FRAMEWORK
│   ├── lesson.css              # Shared styles
│   └── lesson.js               # Shared functions
│
├── 📖 UNIT 01: WEATHER
│   ├── weather_lesson_complete.html
│   ├── audio_texts_unit01.json
│   └── generate_audio_unit01.py
│
├── 👥 UNIT 02: PEOPLE
│   ├── people_lesson.html
│   ├── audio_texts_unit02.json
│   └── generate_audio_unit02.py
│
├── 🔊 AUDIO
│   └── audio/                  # 123 MP3 files
│
├── 📚 DOCUMENTATION
│   ├── README.md               # This file
│   ├── HOW_TO_CREATE_LESSONS.md  # Complete guide
│   ├── PROJECT_README.md       # Project overview
│   └── Unit_02_People.md       # Source content
│
└── 📄 SOURCE
    └── Unit_02_People.md       # Markdown source
```

---

## 💻 Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modern styling (Grid, Flexbox, Animations)
- **Vanilla JavaScript** - No frameworks, no dependencies!
- **OpenAI TTS** - Natural voice audio generation
- **Python 3** - Audio generation scripts

**Why no frameworks?**
- ✅ Fast loading
- ✅ Works anywhere
- ✅ Easy to understand
- ✅ Future-proof
- ✅ No build step

---

## 🎯 Learning Objectives

### CEFR Level
**A2-B1** (Pre-Intermediate)

### Skills Covered
- ✅ Reading comprehension
- ✅ Grammar practice
- ✅ Vocabulary building
- ✅ Listening (with audio)
- ✅ Writing tasks
- ✅ Speaking prompts

### Pedagogical Features
- **Immediate feedback** - Students see results instantly
- **Gamification** - Progress bars, scores, encouraging messages
- **Multimedia** - Audio + text + interactive elements
- **Self-paced** - Students control their own learning
- **Accessible** - Works on any device, anywhere, anytime

---

## 📝 Exercise Types

1. **Multiple Choice** - Grammar and vocabulary questions
2. **Fill in the Blanks** - Complete texts and dialogues
3. **True/False/Not Say** - Reading comprehension
4. **Matching** - Connect related items
5. **Dropdown Selection** - Choose from options
6. **Ordering** - Put events in sequence
7. **Writing Tasks** - Free text responses
8. **Questionnaires** - Learning styles assessment

---

## 🔮 Future Plans

- [ ] Unit 03: The Media
- [ ] Unit 04: Free Time
- [ ] Dark mode toggle
- [ ] LocalStorage for progress saving
- [ ] Student dashboard
- [ ] Achievement system
- [ ] More interactive exercises
- [ ] Video integration

---

## 📚 Resources

### Documentation
- [HOW_TO_CREATE_LESSONS.md](HOW_TO_CREATE_LESSONS.md) - Step-by-step guide
- [PROJECT_README.md](PROJECT_README.md) - Complete project overview

### External Links
- [OpenAI TTS Documentation](https://platform.openai.com/docs/guides/text-to-speech)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

---

## 📄 License & Attribution

### Content
Based on "Language Leader Pre-Intermediate" by Pearson Education.
For educational purposes only.

### Code
The interactive framework (HTML/CSS/JavaScript) is open source.
Feel free to use and adapt for your own lessons!

### Audio
Generated using OpenAI Text-to-Speech API.

---

## 🙏 Acknowledgments

- **Pearson Education** - Original textbook content
- **OpenAI** - Text-to-speech technology
- **Students and teachers** - Feedback and testing

---

## 📧 Support

Questions? Issues? Suggestions?

- Read the [complete guide](HOW_TO_CREATE_LESSONS.md)
- Check existing lessons for examples
- Open an issue on GitHub

---

## 🎉 Success Metrics

- ✅ **2 complete units** created
- ✅ **110+ questions** with instant feedback
- ✅ **123 audio files** for pronunciation
- ✅ **100% mobile responsive**
- ✅ **Zero dependencies** - pure vanilla JS
- ✅ **Easy to extend** - reusable framework

---

**Made with ❤️ for English language learners**

**Happy Learning! 🎓✨**

---

## Quick Links

- 🏠 [Main Page](index.html)
- 🌤️ [Unit 01: Weather](weather_lesson_complete.html)
- 👥 [Unit 02: People](people_lesson.html)
- 📖 [How to Create Lessons](HOW_TO_CREATE_LESSONS.md)
- 📚 [Project Overview](PROJECT_README.md)
