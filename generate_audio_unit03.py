#!/usr/bin/env python3
"""
Generate audio files for Unit 03 (The Media) using OpenAI TTS API
"""

import os
import json
from pathlib import Path
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Create audio directory
AUDIO_DIR = Path('audio')
AUDIO_DIR.mkdir(exist_ok=True)

def generate_audio(text, filename, voice='nova'):
    """
    Generate audio file from text using OpenAI TTS API

    Args:
        text: The text to convert to speech
        filename: Output filename (without .mp3 extension)
        voice: Voice to use (alloy, echo, fable, onyx, nova, shimmer)
    """
    output_path = AUDIO_DIR / f"{filename}.mp3"

    # Skip if file already exists
    if output_path.exists():
        print(f"✓ Skipping {filename}.mp3 (already exists)")
        return

    try:
        print(f"🔊 Generating {filename}.mp3: \"{text[:60]}...\"")

        response = client.audio.speech.create(
            model="tts-1",
            voice=voice,
            input=text
        )

        # Save the audio file
        response.stream_to_file(output_path)
        print(f"✅ Created {filename}.mp3")

    except Exception as e:
        print(f"❌ Error generating {filename}.mp3: {e}")

def main():
    """Generate all audio files from audio_texts_unit03.json"""

    # Load texts from JSON
    with open('audio_texts_unit03.json', 'r', encoding='utf-8') as f:
        texts = json.load(f)

    print("=" * 60)
    print("🎙️  GENERATING AUDIO FILES FOR UNIT 03: THE MEDIA")
    print("=" * 60)
    print()

    # Use female voice (nova) for general content
    voice = 'nova'

    # Generate audio for each category
    categories = [
        ('media_vocabulary', 'Media Vocabulary'),
        ('tv_programme_types', 'TV Programme Types'),
        ('general_media', 'General Media Words'),
        ('media_people', 'Media People'),
        ('additional_vocab', 'Additional Vocabulary'),
        ('reading_texts', 'Reading Texts')
    ]

    total_files = 0
    for category_key, category_name in categories:
        print(f"\n📂 {category_name}")
        print("-" * 60)

        category_data = texts.get(category_key, {})
        for key, text in category_data.items():
            # Use the key directly as filename since it already contains the word
            filename = key
            generate_audio(text, filename, voice=voice)
            total_files += 1

    print()
    print("=" * 60)
    print(f"✅ COMPLETE! Generated {total_files} audio files for Unit 03")
    print(f"📁 Audio files saved in: {AUDIO_DIR.absolute()}")
    print("=" * 60)

if __name__ == '__main__':
    main()
