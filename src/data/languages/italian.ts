
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
  },
  // Unit 2: Numbers and Colors
  {
    id: 4,
    title: "Numbers 1-10",
    unit: 2,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "five" in Italian?',
        options: ['quattro', 'cinque', 'sei', 'sette'],
        correct: 1,
        explanation: '"Cinque" means "five" in Italian.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "otto" mean?',
        options: ['six', 'seven', 'eight', 'nine'],
        correct: 2,
        explanation: '"Otto" means "eight" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "uno, due, _____, quattro" (one, two, three, four)',
        options: ['tre', 'cinque', 'sei', 'sette'],
        correct: 0,
        explanation: '"Tre" means "three" in Italian.'
      }
    ]
  },
  {
    id: 5,
    title: "Colors",
    unit: 2,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "red" in Italian?',
        options: ['blu', 'verde', 'rosso', 'giallo'],
        correct: 2,
        explanation: '"Rosso" means "red" in Italian.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "nero" mean?',
        options: ['white', 'black', 'gray', 'brown'],
        correct: 1,
        explanation: '"Nero" means "black" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "blue" in Italian?',
        options: ['verde', 'blu', 'viola', 'arancione'],
        correct: 1,
        explanation: '"Blu" means "blue" in Italian.'
      }
    ]
  },
  {
    id: 6,
    title: "Unit 2 Test",
    unit: 2,
    isUnitTest: true,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What comes after "nove" (nine)?',
        options: ['otto', 'dieci', 'undici', 'dodici'],
        correct: 1,
        explanation: '"Dieci" means "ten" and comes after "nove" (nine).'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "bianco" mean?',
        options: ['black', 'white', 'gray', 'brown'],
        correct: 1,
        explanation: '"Bianco" means "white" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Il sole è _____" (The sun is yellow)',
        options: ['rosso', 'blu', 'giallo', 'verde'],
        correct: 2,
        explanation: '"Giallo" means "yellow" in Italian.'
      }
    ]
  },
  // Unit 3: Family and Food
  {
    id: 7,
    title: "Family Members",
    unit: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "mother" in Italian?',
        options: ['padre', 'madre', 'fratello', 'sorella'],
        correct: 1,
        explanation: '"Madre" means "mother" in Italian.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "figlio" mean?',
        options: ['daughter', 'son', 'cousin', 'nephew'],
        correct: 1,
        explanation: '"Figlio" means "son" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "grandmother" in Italian?',
        options: ['zia', 'nonna', 'cugina', 'nipote'],
        correct: 1,
        explanation: '"Nonna" means "grandmother" in Italian.'
      }
    ]
  },
  {
    id: 8,
    title: "Food and Drinks",
    unit: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "bread" in Italian?',
        options: ['latte', 'pane', 'formaggio', 'carne'],
        correct: 1,
        explanation: '"Pane" means "bread" in Italian.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "acqua" mean?',
        options: ['milk', 'juice', 'water', 'coffee'],
        correct: 2,
        explanation: '"Acqua" means "water" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Io bevo _____" (I drink coffee)',
        options: ['tè', 'caffè', 'succo', 'vino'],
        correct: 1,
        explanation: '"Caffè" means "coffee" in Italian.'
      }
    ]
  },
  {
    id: 9,
    title: "Unit 3 Test",
    unit: 3,
    isUnitTest: true,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "sister" in Italian?',
        options: ['madre', 'figlia', 'sorella', 'zia'],
        correct: 2,
        explanation: '"Sorella" means "sister" in Italian.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "mela" mean?',
        options: ['orange', 'banana', 'apple', 'grape'],
        correct: 2,
        explanation: '"Mela" means "apple" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in Italian?',
        options: ['Sono stanco', 'Ho fame', 'Sono felice', 'Ho sete'],
        correct: 1,
        explanation: '"Ho fame" means "I am hungry" in Italian.'
      }
    ]
  }
];
