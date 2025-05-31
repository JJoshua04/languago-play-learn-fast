
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
