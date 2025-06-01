
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
        question: 'How do you say "five" in German?',
        options: ['vier', 'fünf', 'sechs', 'sieben'],
        correct: 1,
        explanation: '"Fünf" means "five" in German.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "acht" mean?',
        options: ['six', 'seven', 'eight', 'nine'],
        correct: 2,
        explanation: '"Acht" means "eight" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "eins, zwei, _____, vier" (one, two, three, four)',
        options: ['drei', 'fünf', 'sechs', 'sieben'],
        correct: 0,
        explanation: '"Drei" means "three" in German.'
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
        question: 'How do you say "red" in German?',
        options: ['blau', 'grün', 'rot', 'gelb'],
        correct: 2,
        explanation: '"Rot" means "red" in German.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "schwarz" mean?',
        options: ['white', 'black', 'gray', 'brown'],
        correct: 1,
        explanation: '"Schwarz" means "black" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "blue" in German?',
        options: ['grün', 'blau', 'violett', 'orange'],
        correct: 1,
        explanation: '"Blau" means "blue" in German.'
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
        question: 'What comes after "neun" (nine)?',
        options: ['acht', 'zehn', 'elf', 'zwölf'],
        correct: 1,
        explanation: '"Zehn" means "ten" and comes after "neun" (nine).'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "weiß" mean?',
        options: ['black', 'white', 'gray', 'brown'],
        correct: 1,
        explanation: '"Weiß" means "white" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Die Sonne ist _____" (The sun is yellow)',
        options: ['rot', 'blau', 'gelb', 'grün'],
        correct: 2,
        explanation: '"Gelb" means "yellow" in German.'
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
        question: 'How do you say "mother" in German?',
        options: ['Vater', 'Mutter', 'Bruder', 'Schwester'],
        correct: 1,
        explanation: '"Mutter" means "mother" in German.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Geschwister" mean?',
        options: ['parents', 'siblings', 'cousins', 'grandparents'],
        correct: 1,
        explanation: '"Geschwister" means "siblings" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "grandfather" in German?',
        options: ['Onkel', 'Großvater', 'Cousin', 'Neffe'],
        correct: 1,
        explanation: '"Großvater" means "grandfather" in German.'
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
        question: 'How do you say "bread" in German?',
        options: ['Milch', 'Brot', 'Käse', 'Fleisch'],
        correct: 1,
        explanation: '"Brot" means "bread" in German.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Wasser" mean?',
        options: ['milk', 'juice', 'water', 'coffee'],
        correct: 2,
        explanation: '"Wasser" means "water" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Ich trinke _____" (I drink coffee)',
        options: ['Tee', 'Kaffee', 'Saft', 'Bier'],
        correct: 1,
        explanation: '"Kaffee" means "coffee" in German.'
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
        question: 'How do you say "sister" in German?',
        options: ['Mutter', 'Tochter', 'Schwester', 'Tante'],
        correct: 2,
        explanation: '"Schwester" means "sister" in German.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Apfel" mean?',
        options: ['orange', 'banana', 'apple', 'grape'],
        correct: 2,
        explanation: '"Apfel" means "apple" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in German?',
        options: ['Ich bin müde', 'Ich habe Hunger', 'Ich bin glücklich', 'Ich habe Durst'],
        correct: 1,
        explanation: '"Ich habe Hunger" means "I am hungry" in German.'
      }
    ]
  }
];
