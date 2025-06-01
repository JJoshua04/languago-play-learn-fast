
import { Lesson } from '../types';

export const japaneseLessons: Lesson[] = [
  // Unit 1: Basics
  {
    id: 1,
    title: "Greetings",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Japanese?',
        options: ['Konnichiwa', 'Sayonara', 'Arigatou', 'Onegaishimasu'],
        correct: 0,
        explanation: '"Konnichiwa" is the most common way to say hello in Japanese.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Japanese?',
        options: ['Konbanwa', 'Konnichiwa', 'Ohayou gozaimasu', 'Mata ashita'],
        correct: 2,
        explanation: '"Ohayou gozaimasu" is used to greet someone in the morning.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "Genki desu ka?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1,
        explanation: '"Genki desu ka?" means "How are you?" in English.'
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
        question: 'What does "Arigatou gozaimasu" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Arigatou gozaimasu" means "Thank you" in English.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Please" in Japanese?',
        options: ['Arigatou', 'Dou itashimashite', 'Onegaishimasu', 'Sumimasen'],
        correct: 2,
        explanation: '"Onegaishimasu" means "Please" in Japanese.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Watashi no namae wa _____ desu" (My name is Tanaka)',
        options: ['Tanaka', 'Sato', 'Yamada', 'Suzuki'],
        correct: 0,
        explanation: '"Watashi no namae wa Tanaka desu" means "My name is Tanaka".'
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
        question: 'How do you say "Good evening" in Japanese?',
        options: ['Ohayou gozaimasu', 'Konnichiwa', 'Konbanwa', 'Sayonara'],
        correct: 2,
        explanation: '"Konbanwa" is used in the evening.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Dou itashimashite" mean?',
        options: ['Thank you', 'You\'re welcome', 'Excuse me', 'I\'m sorry'],
        correct: 1,
        explanation: '"Dou itashimashite" means "You\'re welcome" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you ask "What is your name?" in Japanese?',
        options: ['Genki desu ka?', 'Onamae wa nan desu ka?', 'Dochira kara kimashita ka?', 'Nansai desu ka?'],
        correct: 1,
        explanation: '"Onamae wa nan desu ka?" means "What is your name?"'
      }
    ]
  }
];
