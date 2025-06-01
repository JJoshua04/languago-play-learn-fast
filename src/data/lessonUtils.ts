
import { LanguageLessons } from './types';
import { spanishLessons } from './languages/spanish';
import { frenchLessons } from './languages/french';
import { germanLessons } from './languages/german';
import { italianLessons } from './languages/italian';
import { portugueseLessons } from './languages/portuguese';
import { japaneseLessons } from './languages/japanese';

export const languageLessons: LanguageLessons = {
  'es': spanishLessons,
  'fr': frenchLessons,
  'de': germanLessons,
  'it': italianLessons,
  'pt': portugueseLessons,
  'ja': japaneseLessons,
};

export const getLanguageLessons = (languageCode: string) => {
  return languageLessons[languageCode] || [];
};

export const getLessonsByUnit = (languageCode: string, unit: number) => {
  const lessons = getLanguageLessons(languageCode);
  return lessons.filter(lesson => lesson.unit === unit);
};

export const getUnitTest = (languageCode: string, unit: number) => {
  const lessons = getLanguageLessons(languageCode);
  return lessons.find(lesson => lesson.unit === unit && lesson.isUnitTest);
};
