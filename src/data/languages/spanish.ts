
import { Lesson } from '../types';

export const spanishLessons: Lesson[] = [
  // Unit 1: Basics
  {
    id: 1,
    title: "Greetings",
    unit: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Spanish?',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correct: 0,
        explanation: '"Hola" is the most common way to say hello in Spanish.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Spanish?',
        options: ['Buenas noches', 'Buenas tardes', 'Buenos días', 'Hasta luego'],
        correct: 2,
        explanation: '"Buenos días" is used to greet someone in the morning.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "¿Cómo estás?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1,
        explanation: '"¿Cómo estás?" means "How are you?" in English.'
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
        question: 'What does "Gracias" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Gracias" means "Thank you" in English.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How do you say "Please" in Spanish?',
        options: ['Gracias', 'De nada', 'Por favor', 'Perdón'],
        correct: 2,
        explanation: '"Por favor" means "Please" in Spanish.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "_____ me llamo María" (My name is María)',
        options: ['Yo', 'Tú', 'Él', 'Nosotros'],
        correct: 0,
        explanation: '"Yo me llamo" means "My name is" in Spanish.'
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
        question: 'How do you say "Good afternoon" in Spanish?',
        options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'],
        correct: 1,
        explanation: '"Buenas tardes" is used in the afternoon.'
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
        question: 'How do you ask "What is your name?" in Spanish?',
        options: ['¿Cómo estás?', '¿Cómo te llamas?', '¿De dónde eres?', '¿Cuántos años tienes?'],
        correct: 1,
        explanation: '"¿Cómo te llamas?" means "What is your name?"'
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
        question: 'How do you say "five" in Spanish?',
        options: ['cuatro', 'cinco', 'seis', 'siete'],
        correct: 1,
        explanation: '"Cinco" means "five" in Spanish.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What number is "diez"?',
        options: ['8', '9', '10', '11'],
        correct: 2,
        explanation: '"Diez" means "ten" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "three" in Spanish?',
        options: ['dos', 'tres', 'cuatro', 'uno'],
        correct: 1,
        explanation: '"Tres" means "three" in Spanish.'
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
        question: 'How do you say "red" in Spanish?',
        options: ['azul', 'verde', 'rojo', 'amarillo'],
        correct: 2,
        explanation: '"Rojo" means "red" in Spanish.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What color is "azul"?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correct: 1,
        explanation: '"Azul" means "blue" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "black" in Spanish?',
        options: ['blanco', 'negro', 'gris', 'morado'],
        correct: 1,
        explanation: '"Negro" means "black" in Spanish.'
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
        question: 'What is "ocho" in English?',
        options: ['6', '7', '8', '9'],
        correct: 2,
        explanation: '"Ocho" means "eight" in English.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What color is "verde"?',
        options: ['Red', 'Blue', 'Green', 'Purple'],
        correct: 2,
        explanation: '"Verde" means "green" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "El cielo es _____" (The sky is blue)',
        options: ['rojo', 'azul', 'verde', 'amarillo'],
        correct: 1,
        explanation: '"Azul" (blue) is the correct color for the sky.'
      }
    ]
  },
  // Unit 3: Family and Pronouns
  {
    id: 7,
    title: "Family Members",
    unit: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "mother" in Spanish?',
        options: ['padre', 'madre', 'hermana', 'abuela'],
        correct: 1,
        explanation: '"Madre" means "mother" in Spanish.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "hermano" mean?',
        options: ['Sister', 'Brother', 'Father', 'Uncle'],
        correct: 1,
        explanation: '"Hermano" means "brother" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "grandparents" in Spanish?',
        options: ['padres', 'hijos', 'abuelos', 'tíos'],
        correct: 2,
        explanation: '"Abuelos" means "grandparents" in Spanish.'
      }
    ]
  },
  {
    id: 8,
    title: "Personal Pronouns",
    unit: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the Spanish pronoun for "we"?',
        options: ['yo', 'tú', 'nosotros', 'ellos'],
        correct: 2,
        explanation: '"Nosotros" means "we" in Spanish.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete: "_____ eres mi amigo" (You are my friend)',
        options: ['Yo', 'Tú', 'Él', 'Ella'],
        correct: 1,
        explanation: '"Tú" means "you" (informal) in Spanish.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "ellas" mean?',
        options: ['They (masculine)', 'They (feminine)', 'We', 'You (plural)'],
        correct: 1,
        explanation: '"Ellas" means "they" when referring to a group of females.'
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
        question: 'How do you say "my sister" in Spanish?',
        options: ['mi hermano', 'mi hermana', 'mi madre', 'mi prima'],
        correct: 1,
        explanation: '"Mi hermana" means "my sister" in Spanish.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete: "_____ son estudiantes" (They are students)',
        options: ['Yo', 'Tú', 'Nosotros', 'Ellos'],
        correct: 3,
        explanation: '"Ellos son" means "they are" in Spanish.'
      },
      {
        id: 3,
        type: 'translation',
        question: 'What does "Mi familia es grande" mean?',
        options: ['My family is small', 'My family is big', 'My family is happy', 'My family is nice'],
        correct: 1,
        explanation: '"Mi familia es grande" means "My family is big" in English.'
      }
    ]
  },
  // Unit 4: Food and Drinks
  {
    id: 10,
    title: "Basic Foods",
    unit: 4,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "bread" in Spanish?',
        options: ['leche', 'pan', 'agua', 'carne'],
        correct: 1,
        explanation: '"Pan" means "bread" in Spanish.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "manzana" mean?',
        options: ['Orange', 'Apple', 'Banana', 'Grape'],
        correct: 1,
        explanation: '"Manzana" means "apple" in English.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "chicken" in Spanish?',
        options: ['pescado', 'carne', 'pollo', 'cerdo'],
        correct: 2,
        explanation: '"Pollo" means "chicken" in Spanish.'
      }
    ]
  },
  {
    id: 11,
    title: "Drinks and Meals",
    unit: 4,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How do you say "water" in Spanish?',
        options: ['leche', 'jugo', 'agua', 'café'],
        correct: 2,
        explanation: '"Agua" means "water" in Spanish.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "desayuno" mean?',
        options: ['Lunch', 'Dinner', 'Breakfast', 'Snack'],
        correct: 2,
        explanation: '"Desayuno" means "breakfast" in English.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete: "Me gusta el _____" (I like coffee)',
        options: ['té', 'café', 'agua', 'jugo'],
        correct: 1,
        explanation: '"Café" means "coffee" in Spanish.'
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
        question: 'How do you say "I am hungry" in Spanish?',
        options: ['Tengo sed', 'Tengo hambre', 'Tengo sueño', 'Tengo frío'],
        correct: 1,
        explanation: '"Tengo hambre" means "I am hungry" in Spanish.'
      },
      {
        id: 2,
        type: 'translation',
        question: 'What does "¿Qué quieres comer?" mean?',
        options: ['What do you want to drink?', 'What do you want to eat?', 'Where do you want to go?', 'When do you want to eat?'],
        correct: 1,
        explanation: '"¿Qué quieres comer?" means "What do you want to eat?"'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'How do you say "the meal is delicious" in Spanish?',
        options: ['La comida está fría', 'La comida está cara', 'La comida está deliciosa', 'La comida está lista'],
        correct: 2,
        explanation: '"La comida está deliciosa" means "the meal is delicious".'
      }
    ]
  }
];
