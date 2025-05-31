
export interface Question {
  id: number;
  type: 'multiple-choice' | 'translation' | 'listening' | 'fill-blank';
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Lesson {
  id: number;
  title: string;
  unit: number;
  questions: Question[];
  isUnitTest?: boolean;
}

export const languageLessons: { [key: string]: Lesson[] } = {
  'es': [
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
  ],
  'fr': [
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
  ],
  'de': [
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
          explanation: '"Hallo" is a common informal greeting in German.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'How do you say "Good morning" in German?',
          options: ['Guten Abend', 'Guten Tag', 'Guten Morgen', 'Gute Nacht'],
          correct: 2,
          explanation: '"Guten Morgen" is used to greet someone in the morning.'
        },
        {
          id: 3,
          type: 'translation',
          question: 'What does "Wie geht es Ihnen?" mean?',
          options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
          correct: 1,
          explanation: '"Wie geht es Ihnen?" means "How are you?" (formal) in English.'
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
          question: 'Complete: "_____ heiße Anna" (My name is Anna)',
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
          options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'],
          correct: 2,
          explanation: '"Guten Abend" is used to greet someone in the evening.'
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
          options: ['Wie geht es Ihnen?', 'Wie heißen Sie?', 'Woher kommen Sie?', 'Wie alt sind Sie?'],
          correct: 1,
          explanation: '"Wie heißen Sie?" means "What is your name?"'
        }
      ]
    },
    // Unit 2: Numbers and der/die/das
    {
      id: 4,
      title: "Numbers 1-10",
      unit: 2,
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'How do you say "four" in German?',
          options: ['drei', 'vier', 'fünf', 'sechs'],
          correct: 1,
          explanation: '"Vier" means "four" in German.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What number is "acht"?',
          options: ['7', '8', '9', '10'],
          correct: 1,
          explanation: '"Acht" means "eight" in English.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'How do you say "one" in German?',
          options: ['null', 'eins', 'zwei', 'drei'],
          correct: 1,
          explanation: '"Eins" means "one" in German.'
        }
      ]
    },
    {
      id: 5,
      title: "Der, Die, Das",
      unit: 2,
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'What article goes with "Haus" (house)?',
          options: ['der', 'die', 'das', 'den'],
          correct: 2,
          explanation: '"Das Haus" - house is neuter in German.'
        },
        {
          id: 2,
          type: 'fill-blank',
          question: 'Complete: "_____ Mann" (the man)',
          options: ['der', 'die', 'das', 'den'],
          correct: 0,
          explanation: '"Der Mann" - man is masculine in German.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'What article goes with "Frau" (woman)?',
          options: ['der Frau', 'die Frau', 'das Frau', 'den Frau'],
          correct: 1,
          explanation: '"Die Frau" - woman is feminine in German.'
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
          question: 'What is "sieben" in English?',
          options: ['6', '7', '8', '9'],
          correct: 1,
          explanation: '"Sieben" means "seven" in English.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What does "das Kind" mean?',
          options: ['The man', 'The woman', 'The child', 'The dog'],
          correct: 2,
          explanation: '"Das Kind" means "the child" in English.'
        },
        {
          id: 3,
          type: 'fill-blank',
          question: 'Complete: "_____ Katze ist schwarz" (The cat is black)',
          options: ['Der', 'Die', 'Das', 'Den'],
          correct: 1,
          explanation: '"Die Katze" - cat is feminine in German.'
        }
      ]
    },
    // Unit 3: Family and Possessives
    {
      id: 7,
      title: "Family Members",
      unit: 3,
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'How do you say "sister" in German?',
          options: ['Bruder', 'Schwester', 'Mutter', 'Tochter'],
          correct: 1,
          explanation: '"Schwester" means "sister" in German.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What does "Großvater" mean?',
          options: ['Father', 'Uncle', 'Grandfather', 'Brother'],
          correct: 2,
          explanation: '"Großvater" means "grandfather" in English.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'How do you say "parents" in German?',
          options: ['Kinder', 'Eltern', 'Geschwister', 'Großeltern'],
          correct: 1,
          explanation: '"Eltern" means "parents" in German.'
        }
      ]
    },
    {
      id: 8,
      title: "Possessive Pronouns",
      unit: 3,
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'How do you say "my" (with masculine nouns) in German?',
          options: ['mein', 'meine', 'meinen', 'meiner'],
          correct: 0,
          explanation: '"Mein" is used with masculine nouns in nominative case.'
        },
        {
          id: 2,
          type: 'fill-blank',
          question: 'Complete: "Das ist _____ Schwester" (That is my sister)',
          options: ['mein', 'meine', 'meinen', 'meiner'],
          correct: 1,
          explanation: '"Meine" is used with feminine nouns like "Schwester".'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'How do you say "your" (informal, with neuter nouns)?',
          options: ['dein', 'deine', 'deinen', 'deiner'],
          correct: 0,
          explanation: '"Dein" is used with neuter nouns in nominative case.'
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
          question: 'How do you say "my father" in German?',
          options: ['meine Mutter', 'mein Vater', 'mein Bruder', 'meine Schwester'],
          correct: 1,
          explanation: '"Mein Vater" means "my father" in German.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What does "Ich habe zwei Geschwister" mean?',
          options: ['I have two parents', 'I have two siblings', 'I have two children', 'I have two friends'],
          correct: 1,
          explanation: '"Ich habe zwei Geschwister" means "I have two siblings".'
        },
        {
          id: 3,
          type: 'fill-blank',
          question: 'Complete: "_____ Familie ist groß" (Our family is big)',
          options: ['Mein', 'Dein', 'Unser', 'Ihr'],
          correct: 2,
          explanation: '"Unser" means "our" in German.'
        }
      ]
    },
    // Unit 4: Food and Verbs
    {
      id: 10,
      title: "Food and Drinks",
      unit: 4,
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
          question: 'What does "Apfel" mean?',
          options: ['Orange', 'Apple', 'Banana', 'Pear'],
          correct: 1,
          explanation: '"Apfel" means "apple" in English.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'How do you say "water" in German?',
          options: ['Milch', 'Saft', 'Wasser', 'Kaffee'],
          correct: 2,
          explanation: '"Wasser" means "water" in German.'
        }
      ]
    },
    {
      id: 11,
      title: "Basic Verbs",
      unit: 4,
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'How do you say "I eat" in German?',
          options: ['Ich trinke', 'Ich esse', 'Ich sehe', 'Ich höre'],
          correct: 1,
          explanation: '"Ich esse" means "I eat" in German.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What does "trinken" mean?',
          options: ['To eat', 'To drink', 'To see', 'To hear'],
          correct: 1,
          explanation: '"Trinken" means "to drink" in English.'
        },
        {
          id: 3,
          type: 'fill-blank',
          question: 'Complete: "Ich _____ gerne Kaffee" (I like to drink coffee)',
          options: ['esse', 'trinke', 'sehe', 'höre'],
          correct: 1,
          explanation: '"Trinke" means "drink" and is used with liquids like coffee.'
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
          question: 'How do you say "I am hungry" in German?',
          options: ['Ich habe Durst', 'Ich habe Hunger', 'Ich bin müde', 'Ich bin kalt'],
          correct: 1,
          explanation: '"Ich habe Hunger" means "I am hungry" in German.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What does "Was möchten Sie essen?" mean?',
          options: ['What would you like to drink?', 'What would you like to eat?', 'Where would you like to go?', 'When would you like to eat?'],
          correct: 1,
          explanation: '"Was möchten Sie essen?" means "What would you like to eat?"'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'How do you say "the food tastes good" in German?',
          options: ['Das Essen ist kalt', 'Das Essen ist teuer', 'Das Essen schmeckt gut', 'Das Essen ist fertig'],
          correct: 2,
          explanation: '"Das Essen schmeckt gut" means "the food tastes good".'
        }
      ]
    }
  ],
  'it': [
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
          explanation: '"Ciao" is a casual way to say hello in Italian.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'How do you say "Good evening" in Italian?',
          options: ['Buongiorno', 'Buonasera', 'Buonanotte', 'Ciao'],
          correct: 1,
          explanation: '"Buonasera" is used to greet someone in the evening.'
        },
        {
          id: 3,
          type: 'translation',
          question: 'What does "Come sta?" mean?',
          options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
          correct: 1,
          explanation: '"Come sta?" means "How are you?" (formal) in English.'
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
          question: 'How do you say "Excuse me" in Italian?',
          options: ['Buongiorno', 'Scusi', 'Buonasera', 'Ciao'],
          correct: 1,
          explanation: '"Scusi" is the polite way to say excuse me in Italian.'
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
          question: 'How do you say "Please" in Italian?',
          options: ['Grazie', 'Prego', 'Per favore', 'Scusi'],
          correct: 2,
          explanation: '"Per favore" means "Please" in Italian.'
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
          options: ['Come sta?', 'Come si chiama?', 'Di dove è?', 'Quanti anni ha?'],
          correct: 1,
          explanation: '"Come si chiama?" means "What is your name?"'
        }
      ]
    }
  ],
  'pt': [
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
          explanation: '"Olá" is the standard greeting in Portuguese.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'How do you say "Good afternoon" in Portuguese?',
          options: ['Bom dia', 'Boa tarde', 'Boa noite', 'Até logo'],
          correct: 1,
          explanation: '"Boa tarde" is used to greet someone in the afternoon.'
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
          explanation: '"Obrigado" means "Thank you" (said by men) in English.'
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
          question: 'Complete: "_____ chamo Sofia" (My name is Sofia)',
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
          question: 'How do you say "Good night" in Portuguese?',
          options: ['Bom dia', 'Boa tarde', 'Boa noite', 'Até amanhã'],
          correct: 2,
          explanation: '"Boa noite" is used to say good night in Portuguese.'
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
          options: ['Como está?', 'Qual é o seu nome?', 'De onde você é?', 'Quantos anos você tem?'],
          correct: 1,
          explanation: '"Qual é o seu nome?" means "What is your name?"'
        }
      ]
    }
  ],
  'ja': [
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
          options: ['こんにちは (Konnichiwa)', 'さようなら (Sayounara)', 'ありがとう (Arigatou)', 'すみません (Sumimasen)'],
          correct: 0,
          explanation: '"こんにちは (Konnichiwa)" is the standard greeting in Japanese.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'How do you say "Good morning" in Japanese?',
          options: ['こんばんは (Konbanwa)', 'こんにちは (Konnichiwa)', 'おはよう (Ohayou)', 'おやすみ (Oyasumi)'],
          correct: 2,
          explanation: '"おはよう (Ohayou)" is used to greet someone in the morning.'
        },
        {
          id: 3,
          type: 'translation',
          question: 'What does "元気ですか？(Genki desu ka?)" mean?',
          options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
          correct: 1,
          explanation: '"元気ですか？(Genki desu ka?)" means "How are you?" in English.'
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
          question: 'What does "ありがとう (Arigatou)" mean?',
          options: ['Hello', 'Goodbye', 'Thank you', 'Excuse me'],
          correct: 2,
          explanation: '"ありがとう (Arigatou)" means "Thank you" in English.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'How do you say "Excuse me" in Japanese?',
          options: ['こんにちは (Konnichiwa)', 'すみません (Sumimasen)', 'こんばんは (Konbanwa)', 'はじめまして (Hajimemashite)'],
          correct: 1,
          explanation: '"すみません (Sumimasen)" is used to say excuse me in Japanese.'
        },
        {
          id: 3,
          type: 'fill-blank',
          question: 'Complete: "私の名前は___です (Watashi no namae wa ___ desu)" - My name is...',
          options: ['田中 (Tanaka)', 'です (desu)', 'は (wa)', 'を (wo)'],
          correct: 0,
          explanation: '"田中 (Tanaka)" is a common Japanese surname used in this context.'
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
          options: ['おはよう (Ohayou)', 'こんにちは (Konnichiwa)', 'こんばんは (Konbanwa)', 'おやすみ (Oyasumi)'],
          correct: 2,
          explanation: '"こんばんは (Konbanwa)" is used to greet someone in the evening.'
        },
        {
          id: 2,
          type: 'translation',
          question: 'What does "どういたしまして (Douitashimashite)" mean?',
          options: ['Thank you', 'You\'re welcome', 'Excuse me', 'I\'m sorry'],
          correct: 1,
          explanation: '"どういたしまして (Douitashimashite)" means "You\'re welcome" in English.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'How do you ask "What is your name?" in Japanese?',
          options: ['元気ですか？(Genki desu ka?)', 'お名前は何ですか？(Onamae wa nan desu ka?)', 'どこから来ましたか？(Doko kara kimashita ka?)', '何歳ですか？(Nansai desu ka?)'],
          correct: 1,
          explanation: '"お名前は何ですか？(Onamae wa nan desu ka?)" means "What is your name?"'
        }
      ]
    }
  ]
};
