
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { languageLessons, Lesson } from '@/data/lessonData';

interface LessonSelectorProps {
  language: string;
  completedLessons: number[];
  onLessonSelect: (lesson: Lesson) => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  language,
  completedLessons,
  onLessonSelect
}) => {
  const lessons = languageLessons[language] || [];
  const units = [...new Set(lessons.map(lesson => lesson.unit))];

  const getUnitProgress = (unitNumber: number) => {
    const unitLessons = lessons.filter(lesson => lesson.unit === unitNumber);
    const completedInUnit = unitLessons.filter(lesson => 
      completedLessons.includes(lesson.id)
    ).length;
    return (completedInUnit / unitLessons.length) * 100;
  };

  const isLessonAccessible = (lesson: Lesson) => {
    const lessonIndex = lessons.findIndex(l => l.id === lesson.id);
    if (lessonIndex === 0) return true;
    
    const previousLesson = lessons[lessonIndex - 1];
    return completedLessons.includes(previousLesson.id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Choose Your Lesson
        </h2>
        <p className="text-gray-600">Continue your language learning journey</p>
      </div>

      {units.map(unitNumber => {
        const unitLessons = lessons.filter(lesson => lesson.unit === unitNumber);
        const unitProgress = getUnitProgress(unitNumber);
        
        return (
          <Card key={unitNumber} className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Unit {unitNumber}
                </h3>
                <span className="text-sm text-gray-600">{Math.round(unitProgress)}% Complete</span>
              </div>
              <Progress value={unitProgress} className="h-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unitLessons.map(lesson => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isAccessible = isLessonAccessible(lesson);
                const isUnitTest = lesson.isUnitTest;

                return (
                  <Card
                    key={lesson.id}
                    className={`p-4 transition-all duration-200 cursor-pointer ${
                      !isAccessible
                        ? 'opacity-50 cursor-not-allowed bg-gray-100'
                        : isCompleted
                        ? 'bg-green-50 border-green-200 hover:bg-green-100'
                        : isUnitTest
                        ? 'bg-purple-50 border-purple-200 hover:bg-purple-100'
                        : 'bg-white hover:bg-blue-50 border-blue-200'
                    }`}
                    onClick={() => isAccessible && onLessonSelect(lesson)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {isUnitTest ? (
                          <Trophy className="w-5 h-5 text-purple-500" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-blue-500" />
                        )}
                        <span className={`text-sm font-medium ${
                          isUnitTest ? 'text-purple-600' : 'text-blue-600'
                        }`}>
                          {isUnitTest ? 'Unit Test' : 'Lesson'}
                        </span>
                      </div>
                      
                      {!isAccessible ? (
                        <Lock className="w-4 h-4 text-gray-400" />
                      ) : isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : null}
                    </div>

                    <h4 className="font-semibold text-gray-800 mb-2">
                      {lesson.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {lesson.questions.length} questions
                    </p>

                    <Button
                      size="sm"
                      disabled={!isAccessible}
                      variant={isCompleted ? "outline" : "default"}
                      className={`w-full ${
                        isUnitTest 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                          : isCompleted
                          ? ''
                          : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                      }`}
                    >
                      {!isAccessible ? 'Locked' : isCompleted ? 'Review' : 'Start'}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
