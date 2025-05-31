
import { LanguageLessons } from './types';
import { spanishLessons } from './languages/spanish';
import { frenchLessons } from './languages/french';

export const languageLessons: LanguageLessons = {
  'es': spanishLessons,
  'fr': frenchLessons,
  // Additional languages can be added here
  'de': [], // German lessons would be imported here
  'it': [], // Italian lessons would be imported here
  'pt': [], // Portuguese lessons would be imported here
  'ja': [], // Japanese lessons would be imported here
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
