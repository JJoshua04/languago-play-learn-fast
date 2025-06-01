
import { Lesson } from '../types';

export const portugueseLessons: Lesson[] = [
  // Unit 1: Basics
  {
    id: 1,
    title: "Greetings",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Portuguese?',
        options: ['Olá', 'Tchau', 'Obrigado', 'Por favor'],
        correct: 0,
        explanation: '"Olá" is the most common way to say hello in Portuguese.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Portuguese?',
        options: ['Boa noite', 'Boa tarde', 'Bom dia', 'Até logo'],
        correct: 2,
        explanation: '"Bom dia" is used to greet someone in the morning.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "Como está?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1,
        explanation: '"Como está?" means "How are you?" in English.'
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
        question: 'What does "Obrigado" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Obrigado" means "Thank you" in English.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Please" in Portuguese?',
        options: ['Obrigado', 'De nada', 'Por favor', 'Desculpe'],
        correct: 2,
        explanation: '"Por favor" means "Please" in Portuguese.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "_____ chamo Ana" (My name is Ana)',
        options: ['Me', 'Te', 'Se', 'Nos'],
        correct: 0,
        explanation: '"Me chamo" means "My name is" in Portuguese.'
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
        question: 'How do you say "Good afternoon" in Portuguese?',
        options: ['Bom dia', 'Boa tarde', 'Boa noite', 'Olá'],
        correct: 1,
        explanation: '"Boa tarde" is used in the afternoon.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "De nada" mean?',
        options: ['Thank you', 'You\'re welcome', 'Excuse me', 'I\'m sorry'],
        correct: 1,
        explanation: '"De nada" means "You\'re welcome" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you ask "What is your name?" in Portuguese?',
        options: ['Como está?', 'Como se chama?', 'De onde é?', 'Quantos anos tem?'],
        correct: 1,
        explanation: '"Como se chama?" means "What is your name?"'
      }
    ]
  }
];
