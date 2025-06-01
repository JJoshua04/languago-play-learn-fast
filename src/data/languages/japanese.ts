
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
        question: 'How do you say "five" in Japanese?',
        options: ['yon', 'go', 'roku', 'nana'],
        correct: 1,
        explanation: '"Go" means "five" in Japanese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "hachi" mean?',
        options: ['six', 'seven', 'eight', 'nine'],
        correct: 2,
        explanation: '"Hachi" means "eight" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "ichi, ni, _____, yon" (one, two, three, four)',
        options: ['san', 'go', 'roku', 'nana'],
        correct: 0,
        explanation: '"San" means "three" in Japanese.'
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
        question: 'How do you say "red" in Japanese?',
        options: ['ao', 'midori', 'aka', 'kiiro'],
        correct: 2,
        explanation: '"Aka" means "red" in Japanese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "kuro" mean?',
        options: ['white', 'black', 'gray', 'brown'],
        correct: 1,
        explanation: '"Kuro" means "black" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "blue" in Japanese?',
        options: ['midori', 'ao', 'murasaki', 'orenji'],
        correct: 1,
        explanation: '"Ao" means "blue" in Japanese.'
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
        question: 'What comes after "kyuu" (nine)?',
        options: ['hachi', 'juu', 'juuichi', 'juuni'],
        correct: 1,
        explanation: '"Juu" means "ten" and comes after "kyuu" (nine).'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "shiro" mean?',
        options: ['black', 'white', 'gray', 'brown'],
        correct: 1,
        explanation: '"Shiro" means "white" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Taiyou wa _____ desu" (The sun is yellow)',
        options: ['aka', 'ao', 'kiiro', 'midori'],
        correct: 2,
        explanation: '"Kiiro" means "yellow" in Japanese.'
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
        question: 'How do you say "mother" in Japanese?',
        options: ['chichi', 'haha', 'ani', 'ane'],
        correct: 1,
        explanation: '"Haha" means "mother" in Japanese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "musuko" mean?',
        options: ['daughter', 'son', 'cousin', 'nephew'],
        correct: 1,
        explanation: '"Musuko" means "son" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "grandmother" in Japanese?',
        options: ['oba', 'sobo', 'itoko', 'mei'],
        correct: 1,
        explanation: '"Sobo" means "grandmother" in Japanese.'
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
        question: 'How do you say "bread" in Japanese?',
        options: ['gyuunyuu', 'pan', 'chiizu', 'niku'],
        correct: 1,
        explanation: '"Pan" means "bread" in Japanese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "mizu" mean?',
        options: ['milk', 'juice', 'water', 'coffee'],
        correct: 2,
        explanation: '"Mizu" means "water" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Watashi wa _____ o nomimasu" (I drink coffee)',
        options: ['ocha', 'koohii', 'juusu', 'biiru'],
        correct: 1,
        explanation: '"Koohii" means "coffee" in Japanese.'
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
        question: 'How do you say "sister" in Japanese?',
        options: ['haha', 'musume', 'ane', 'oba'],
        correct: 2,
        explanation: '"Ane" means "sister" in Japanese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "ringo" mean?',
        options: ['orange', 'banana', 'apple', 'grape'],
        correct: 2,
        explanation: '"Ringo" means "apple" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in Japanese?',
        options: ['Tsukarete imasu', 'Onaka ga suite imasu', 'Ureshii desu', 'Nodo ga kawaite imasu'],
        correct: 1,
        explanation: '"Onaka ga suite imasu" means "I am hungry" in Japanese.'
      }
    ]
  }
];
