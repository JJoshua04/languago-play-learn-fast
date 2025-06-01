
import { Lesson } from '../types';

export const italianLessons: Lesson[] = [
  // Unit 1: Basics
  {
    id: 1,
    title: "Greetings",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Italian?',
        options: ['Ciao', 'Arrivederci', 'Grazie', 'Prego'],
        correct: 0,
        explanation: '"Ciao" is the most common way to say hello in Italian.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Italian?',
        options: ['Buonanotte', 'Buonasera', 'Buongiorno', 'Ciao'],
        correct: 2,
        explanation: '"Buongiorno" is used to greet someone in the morning.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "Come stai?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1,
        explanation: '"Come stai?" means "How are you?" in English.'
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
        question: 'What does "Grazie" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Grazie" means "Thank you" in English.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Please" in Italian?',
        options: ['Grazie', 'Prego', 'Per favore', 'Scusi'],
        correct: 2,
        explanation: '"Per favore" means "Please" in Italian.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "_____ chiamo Marco" (My name is Marco)',
        options: ['Mi', 'Ti', 'Si', 'Ci'],
        correct: 0,
        explanation: '"Mi chiamo" means "My name is" in Italian.'
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
        question: 'How do you say "Good evening" in Italian?',
        options: ['Buongiorno', 'Buonasera', 'Buonanotte', 'Ciao'],
        correct: 1,
        explanation: '"Buonasera" is used in the evening.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Prego" mean?',
        options: ['Thank you', 'You\'re welcome', 'Excuse me', 'I\'m sorry'],
        correct: 1,
        explanation: '"Prego" means "You\'re welcome" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you ask "What is your name?" in Italian?',
        options: ['Come stai?', 'Come ti chiami?', 'Di dove sei?', 'Quanti anni hai?'],
        correct: 1,
        explanation: '"Come ti chiami?" means "What is your name?"'
      }
    ]
  }
];
