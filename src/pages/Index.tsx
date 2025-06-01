import React, { useState, useEffect } from 'react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { LessonInterface } from '@/components/LessonInterface';
import { LessonSelector } from '@/components/LessonSelector';
import { UserProgress } from '@/components/UserProgress';
import { Header } from '@/components/Header';
import { ProgressPanel } from '@/components/ProgressPanel';
import { Lesson } from '@/data/lessonData';
import { useLocation } from 'react-router-dom';

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

const Index = () => {
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [userStats, setUserStats] = useState({
    streak: 0,
    xp: 0,
    hearts: 5,
    level: 1
  });
  const [progressPanelOpen, setProgressPanelOpen] = useState(false);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (selectedLanguage) {
      const progressData: ProgressData = {
        language: selectedLanguage,
        completedLessons,
        userStats,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('languago-progress', JSON.stringify(progressData));
    }
  }, [selectedLanguage, completedLessons, userStats]);

  // Check for language parameter in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam) {
      setSelectedLanguage(langParam);
    }
  }, [location]);

  const updateUserStats = (xpGained: number, heartsLost: number = 0) => {
    setUserStats(prev => {
      const newXP = prev.xp + xpGained;
      // Level calculation: Level 1 starts at 0-499 XP, Level 2 at 500-999, etc.
      const newLevel = Math.floor(newXP / 500) + 1;
      
      return {
        ...prev,
        xp: newXP,
        hearts: Math.max(0, prev.hearts - heartsLost),
        level: newLevel
      };
    });
  };

  const handleLessonComplete = (lessonId: number, score: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    }
    
    // Update streak if it's a good score
    if (score >= 80) {
      setUserStats(prev => ({
        ...prev,
        streak: prev.streak + 1
      }));
    }
  };

  const handleProgressImport = (data: ProgressData) => {
    setSelectedLanguage(data.language);
    setUserStats(data.userStats);
    setCompletedLessons(data.completedLessons);
    setProgressPanelOpen(false);
  };

  const generateProgressData = (): ProgressData => {
    return {
      language: selectedLanguage || '',
      completedLessons,
      userStats,
      timestamp: new Date().toISOString()
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <ProgressPanel
        selectedLanguage={selectedLanguage}
        userStats={userStats}
        completedLessons={completedLessons}
        onProgressImport={handleProgressImport}
        isOpen={progressPanelOpen}
        onToggle={() => setProgressPanelOpen(!progressPanelOpen)}
      />
      
      <main className="container mx-auto px-4 py-8">
        {!selectedLanguage ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Welcome to Languago
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start your language learning journey with bite-sized, gamified lessons. 
                Choose your language and begin mastering it today!
              </p>
            </div>
            <LanguageSelector onLanguageSelect={setSelectedLanguage} />
          </div>
        ) : currentLesson ? (
          <div className="max-w-6xl mx-auto">
            <UserProgress stats={userStats} language={selectedLanguage} />
            <LessonInterface 
              lesson={currentLesson}
              onLessonComplete={handleLessonComplete}
              onBackToLessons={() => setCurrentLesson(null)}
              hearts={userStats.hearts}
              onStatsUpdate={updateUserStats}
            />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <UserProgress stats={userStats} language={selectedLanguage} />
            <LessonSelector
              language={selectedLanguage}
              completedLessons={completedLessons}
              onLessonSelect={setCurrentLesson}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
