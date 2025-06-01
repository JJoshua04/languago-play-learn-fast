
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
        question: 'How do you say "five" in Portuguese?',
        options: ['quatro', 'cinco', 'seis', 'sete'],
        correct: 1,
        explanation: '"Cinco" means "five" in Portuguese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "oito" mean?',
        options: ['six', 'seven', 'eight', 'nine'],
        correct: 2,
        explanation: '"Oito" means "eight" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "um, dois, _____, quatro" (one, two, three, four)',
        options: ['três', 'cinco', 'seis', 'sete'],
        correct: 0,
        explanation: '"Três" means "three" in Portuguese.'
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
        question: 'How do you say "red" in Portuguese?',
        options: ['azul', 'verde', 'vermelho', 'amarelo'],
        correct: 2,
        explanation: '"Vermelho" means "red" in Portuguese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "preto" mean?',
        options: ['white', 'black', 'gray', 'brown'],
        correct: 1,
        explanation: '"Preto" means "black" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "blue" in Portuguese?',
        options: ['verde', 'azul', 'roxo', 'laranja'],
        correct: 1,
        explanation: '"Azul" means "blue" in Portuguese.'
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
        options: ['oito', 'dez', 'onze', 'doze'],
        correct: 1,
        explanation: '"Dez" means "ten" and comes after "nove" (nine).'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "branco" mean?',
        options: ['black', 'white', 'gray', 'brown'],
        correct: 1,
        explanation: '"Branco" means "white" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "O sol é _____" (The sun is yellow)',
        options: ['vermelho', 'azul', 'amarelo', 'verde'],
        correct: 2,
        explanation: '"Amarelo" means "yellow" in Portuguese.'
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
        question: 'How do you say "mother" in Portuguese?',
        options: ['pai', 'mãe', 'irmão', 'irmã'],
        correct: 1,
        explanation: '"Mãe" means "mother" in Portuguese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "filho" mean?',
        options: ['daughter', 'son', 'cousin', 'nephew'],
        correct: 1,
        explanation: '"Filho" means "son" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "grandmother" in Portuguese?',
        options: ['tia', 'avó', 'prima', 'sobrinha'],
        correct: 1,
        explanation: '"Avó" means "grandmother" in Portuguese.'
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
        question: 'How do you say "bread" in Portuguese?',
        options: ['leite', 'pão', 'queijo', 'carne'],
        correct: 1,
        explanation: '"Pão" means "bread" in Portuguese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "água" mean?',
        options: ['milk', 'juice', 'water', 'coffee'],
        correct: 2,
        explanation: '"Água" means "water" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Eu bebo _____" (I drink coffee)',
        options: ['chá', 'café', 'suco', 'cerveja'],
        correct: 1,
        explanation: '"Café" means "coffee" in Portuguese.'
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
        question: 'How do you say "sister" in Portuguese?',
        options: ['mãe', 'filha', 'irmã', 'tia'],
        correct: 2,
        explanation: '"Irmã" means "sister" in Portuguese.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "maçã" mean?',
        options: ['orange', 'banana', 'apple', 'grape'],
        correct: 2,
        explanation: '"Maçã" means "apple" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in Portuguese?',
        options: ['Estou cansado', 'Tenho fome', 'Estou feliz', 'Tenho sede'],
        correct: 1,
        explanation: '"Tenho fome" means "I am hungry" in Portuguese.'
      }
    ]
  }
];
