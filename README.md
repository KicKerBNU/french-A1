# Premiers pas

A Vue 3 study app for a CEFR A1 French course: one starter unit and eight thematic units.

## Run

```bash
yarn
yarn dev
```

This project uses Vue 3, Vite, and Tailwind CSS v4. Shared tokens and primitives live in `src/style.css` (`btn`, `card`, `chip`, `page`, `kicker`).

## What’s in the app

- Course map for units 0–8 (greetings → travel)
- Study activities for **Unit 0**: flashcards, quizzes, dialogues, matching, alphabet, listen-and-repeat
- Progress stored in the browser
- Interface in English or French

Unit 0 is original study material based on the A1 programme (greetings, politeness, days/months, alphabet, classroom language). Later units show the syllabus and will unlock when their pages are added.

Classroom and bookshop **recordings** live in `public/audio/unit-0/` for local study. They come from the course materials you added; do not publish the app with those files unless you have the rights.
