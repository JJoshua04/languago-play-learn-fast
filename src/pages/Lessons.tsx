
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Play, Lock, CheckCircle } from 'lucide-react';

interface ProgressData {
  language: string;
  completedLessons: number[];
  userStats: {
    streak: number;
    xp: number;
    hearts: number;
    level: number;
  };
  timestamp: string;
}

const Lessons = () => {
  const location = useLocation();
  const [progressData, setProgressData] = useState<ProgressData | null>(null);

  // Load progress from localStorage or URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const progressParam = params.get('progress');
    
    if (progressParam) {
      try {
        const data: ProgressData = JSON.parse(atob(progressParam));
        setProgressData(data);
      } catch (error) {
        console.log('Could not parse progress data from URL');
      }
    } else {
      // Try to load from localStorage
      const savedProgress = localStorage.getItem('languago-progress');
      if (savedProgress) {
        try {
          const data: ProgressData = JSON.parse(savedProgress);
          setProgressData(data);
        } catch (error) {
          console.log('Could not parse saved progress data');
        }
      }
    }
  }, [location]);

  const getCompletedLessonsForLanguage = (languageCode: string): number => {
    if (!progressData) return 0;
    
    // If this is the current language being learned, return actual progress
    if (progressData.language === languageCode) {
      return progressData.completedLessons.length;
    }
    
    // For other languages, return 0 (no progress)
    return 0;
  };

  const languages = [
    { code: 'es', name: 'Spanish', flag: '🇪🇸', lessons: 12 },
    { code: 'fr', name: 'French', flag: '🇫🇷', lessons: 12 },
    { code: 'de', name: 'German', flag: '🇩🇪', lessons: 9 },
    { code: 'it', name: 'Italian', flag: '🇮🇹', lessons: 9 },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹', lessons: 9 },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', lessons: 9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              All Lessons
            </h1>
            <p className="text-gray-600">Choose a language to continue your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language) => {
              const completed = getCompletedLessonsForLanguage(language.code);
              return (
                <Card key={language.code} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-4xl">{language.flag}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{language.name}</h3>
                      <p className="text-gray-600">{completed}/{language.lessons} lessons completed</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(completed / language.lessons) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link to={`/?lang=${language.code}`} className="flex-1">
                      <Button className="w-full">
                        {completed > 0 ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Continue
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Start Learning
                          </>
                        )}
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {completed} lessons completed
                    </div>
                    {language.lessons - completed > 0 && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Lock className="w-4 h-4 mr-2 text-gray-400" />
                        {language.lessons - completed} lessons remaining
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lessons;
