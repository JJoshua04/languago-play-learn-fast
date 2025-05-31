
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

export type LanguageLessons = { [key: string]: Lesson[] };
