import { Lesson } from '../types';

export const frenchLessons: Lesson[] = [
  // Unit 1: Basics
  {
    id: 1,
    title: "Greetings",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Hello" in French?',
        options: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît'],
        correct: 0,
        explanation: '"Bonjour" is the standard greeting in French.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Good evening" in French?',
        options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'],
        correct: 1,
        explanation: '"Bonsoir" is used to greet someone in the evening.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "Comment allez-vous?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1,
        explanation: '"Comment allez-vous?" means "How are you?" (formal) in English.'
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
        question: 'What does "Merci" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Merci" means "Thank you" in English.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Excuse me" in French?',
        options: ['Bonjour', 'Excusez-moi', 'Bonsoir', 'Salut'],
        correct: 1,
        explanation: '"Excusez-moi" is the polite way to say excuse me in French.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "_____ m\'appelle Pierre" (My name is Pierre)',
        options: ['Je', 'Tu', 'Il', 'Nous'],
        correct: 0,
        explanation: '"Je m\'appelle" means "My name is" in French.'
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
        question: 'How do you say "Please" in French?',
        options: ['Merci', 'De rien', 'S\'il vous plaît', 'Pardon'],
        correct: 2,
        explanation: '"S\'il vous plaît" means "Please" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "De rien" mean?',
        options: ['Thank you', 'You\'re welcome', 'Excuse me', 'I\'m sorry'],
        correct: 1,
        explanation: '"De rien" means "You\'re welcome" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you ask "What is your name?" in French?',
        options: ['Comment allez-vous?', 'Comment vous appelez-vous?', 'D\'où venez-vous?', 'Quel âge avez-vous?'],
        correct: 1,
        explanation: '"Comment vous appelez-vous?" means "What is your name?"'
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
        question: 'How do you say "seven" in French?',
        options: ['six', 'sept', 'huit', 'neuf'],
        correct: 1,
        explanation: '"Sept" means "seven" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What number is "trois"?',
        options: ['2', '3', '4', '5'],
        correct: 1,
        explanation: '"Trois" means "three" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "ten" in French?',
        options: ['huit', 'neuf', 'dix', 'onze'],
        correct: 2,
        explanation: '"Dix" means "ten" in French.'
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
        question: 'How do you say "blue" in French?',
        options: ['rouge', 'bleu', 'vert', 'jaune'],
        correct: 1,
        explanation: '"Bleu" means "blue" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What color is "rouge"?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correct: 0,
        explanation: '"Rouge" means "red" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "white" in French?',
        options: ['noir', 'blanc', 'gris', 'violet'],
        correct: 1,
        explanation: '"Blanc" means "white" in French.'
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
        question: 'What is "cinq" in English?',
        options: ['4', '5', '6', '7'],
        correct: 1,
        explanation: '"Cinq" means "five" in English.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What color is "vert"?',
        options: ['Red', 'Blue', 'Green', 'Purple'],
        correct: 2,
        explanation: '"Vert" means "green" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Le soleil est _____" (The sun is yellow)',
        options: ['rouge', 'bleu', 'vert', 'jaune'],
        correct: 3,
        explanation: '"Jaune" (yellow) is the correct color for the sun.'
      }
    ]
  },
  // Unit 3: Family and Articles
  {
    id: 7,
    title: "Family Members",
    unit: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "father" in French?',
        options: ['mère', 'père', 'frère', 'sœur'],
        correct: 1,
        explanation: '"Père" means "father" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "grand-mère" mean?',
        options: ['Mother', 'Aunt', 'Grandmother', 'Sister'],
        correct: 2,
        explanation: '"Grand-mère" means "grandmother" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "children" in French?',
        options: ['parents', 'enfants', 'oncles', 'cousins'],
        correct: 1,
        explanation: '"Enfants" means "children" in French.'
      }
    ]
  },
  {
    id: 8,
    title: "Articles and Gender",
    unit: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the feminine article "the" in French?',
        options: ['le', 'la', 'les', 'un'],
        correct: 1,
        explanation: '"La" is the feminine definite article in French.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete: "_____ chat" (the cat - masculine)',
        options: ['le', 'la', 'les', 'un'],
        correct: 0,
        explanation: '"Le" is used with masculine nouns like "chat".'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Which article goes with "maison" (house)?',
        options: ['le maison', 'la maison', 'les maison', 'un maison'],
        correct: 1,
        explanation: '"Maison" is feminine, so it takes "la".'
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
        question: 'How do you say "my brother" in French?',
        options: ['ma sœur', 'mon frère', 'mon père', 'ma mère'],
        correct: 1,
        explanation: '"Mon frère" means "my brother" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "J\'ai une grande famille" mean?',
        options: ['I have a small family', 'I have a big family', 'I love my family', 'I see my family'],
        correct: 1,
        explanation: '"J\'ai une grande famille" means "I have a big family".'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "_____ voiture est rouge" (The car is red)',
        options: ['Le', 'La', 'Les', 'Un'],
        correct: 1,
        explanation: '"Voiture" is feminine, so it takes "La".'
      }
    ]
  },
  // Unit 4: Food and Dining
  {
    id: 10,
    title: "Food Items",
    unit: 4,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "cheese" in French?',
        options: ['pain', 'fromage', 'beurre', 'lait'],
        correct: 1,
        explanation: '"Fromage" means "cheese" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "pomme" mean?',
        options: ['Potato', 'Apple', 'Pear', 'Orange'],
        correct: 1,
        explanation: '"Pomme" means "apple" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "fish" in French?',
        options: ['viande', 'poisson', 'poulet', 'porc'],
        correct: 1,
        explanation: '"Poisson" means "fish" in French.'
      }
    ]
  },
  {
    id: 11,
    title: "At the Restaurant",
    unit: 4,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "the menu" in French?',
        options: ['la carte', 'l\'addition', 'le serveur', 'la table'],
        correct: 0,
        explanation: '"La carte" means "the menu" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Je voudrais" mean?',
        options: ['I have', 'I want', 'I would like', 'I need'],
        correct: 2,
        explanation: '"Je voudrais" means "I would like" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "L\'addition, _____ vous plaît" (The check, please)',
        options: ['si', 's\'il', 'se', 'sa'],
        correct: 1,
        explanation: '"S\'il vous plaît" means "please" in French.'
      }
    ]
  },
  {
    id: 12,
    title: "Unit 4 Test",
    unit: 4,
    isUnitTest: true,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "I am thirsty" in French?',
        options: ['J\'ai faim', 'J\'ai soif', 'J\'ai froid', 'J\'ai chaud'],
        correct: 1,
        explanation: '"J\'ai soif" means "I am thirsty" in French.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "Qu\'est-ce que vous prenez?" mean?',
        options: ['What do you take?', 'What are you having?', 'What do you want?', 'What do you like?'],
        correct: 1,
        explanation: '"Qu\'est-ce que vous prenez?" means "What are you having?" (at a restaurant).'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "the food is excellent" in French?',
        options: ['La nourriture est mauvaise', 'La nourriture est excellente', 'La nourriture est chère', 'La nourriture est froide'],
        correct: 1,
        explanation: '"La nourriture est excellente" means "the food is excellent".'
      }
    ]
  }
];
