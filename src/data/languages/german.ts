
import { Lesson } from '../types';

export const germanLessons: Lesson[] = [
  // Unit 1: Basics
  {
    id: 1,
    title: "Greetings",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Hello" in German?',
        options: ['Hallo', 'Auf Wiedersehen', 'Danke', 'Bitte'],
        correct: 0,
        explanation: '"Hallo" is the most common way to say hello in German.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in German?',
        options: ['Gute Nacht', 'Guten Abend', 'Guten Morgen', 'Tschüss'],
        correct: 2,
        explanation: '"Guten Morgen" is used to greet someone in the morning.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "Wie geht es dir?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1,
        explanation: '"Wie geht es dir?" means "How are you?" in English.'
      }
    ]
  },
  {
    id: 2,
    title: "Basic Phrases",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'translation',
        question: 'What does "Danke" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Danke" means "Thank you" in English.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Please" in German?',
        options: ['Danke', 'Bitte schön', 'Bitte', 'Entschuldigung'],
        correct: 2,
        explanation: '"Bitte" means "Please" in German.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "_____ heiße Maria" (My name is Maria)',
        options: ['Ich', 'Du', 'Er', 'Wir'],
        correct: 0,
        explanation: '"Ich heiße" means "My name is" in German.'
      }
    ]
  },
  {
    id: 3,
    title: "Unit 1 Test",
    unit: 1,
    isUnitTest: true,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Good evening" in German?',
        options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Hallo'],
        correct: 2,
        explanation: '"Guten Abend" is used in the evening.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Bitte schön" mean?',
        options: ['Thank you', 'You\'re welcome', 'Excuse me', 'I\'m sorry'],
        correct: 1,
        explanation: '"Bitte schön" means "You\'re welcome" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you ask "What is your name?" in German?',
        options: ['Wie geht es dir?', 'Wie heißt du?', 'Woher kommst du?', 'Wie alt bist du?'],
        correct: 1,
        explanation: '"Wie heißt du?" means "What is your name?"'
      }
    ]
  }
];
