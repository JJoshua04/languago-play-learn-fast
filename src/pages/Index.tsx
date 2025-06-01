
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

  // Load progress from localStorage on initial load
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('languago-progress');
      if (savedProgress) {
        const progressData: ProgressData = JSON.parse(savedProgress);
        console.log('Loading saved progress:', progressData);
        setSelectedLanguage(progressData.language);
        setUserStats(progressData.userStats);
        setCompletedLessons(progressData.completedLessons);
      }
    } catch (error) {
      console.error('Error loading saved progress:', error);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (selectedLanguage) {
      const progressData: ProgressData = {
        language: selectedLanguage,
        completedLessons,
        userStats,
        timestamp: new Date().toISOString()
      };
      console.log('Saving progress to localStorage:', progressData);
      localStorage.setItem('languago-progress', JSON.stringify(progressData));
    }
  }, [selectedLanguage, completedLessons, userStats]);

  // Check for language parameter in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam && langParam !== selectedLanguage) {
      console.log('Setting language from URL param:', langParam);
      setSelectedLanguage(langParam);
    }
  }, [location, selectedLanguage]);

  const updateUserStats = (xpGained: number, heartsLost: number = 0) => {
    setUserStats(prev => {
      const newXP = prev.xp + xpGained;
      // Level calculation: Level 1 starts at 0-499 XP, Level 2 at 500-999, etc.
      const newLevel = Math.floor(newXP / 500) + 1;
      
      const newStats = {
        ...prev,
        xp: newXP,
        hearts: Math.max(0, prev.hearts - heartsLost),
        level: newLevel
      };
      
      console.log('Updated user stats:', newStats);
      return newStats;
    });
  };

  const handleLessonComplete = (lessonId: number, score: number) => {
    console.log('Lesson completed:', lessonId, 'Score:', score);
    
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => {
        const newCompleted = [...prev, lessonId];
        console.log('Updated completed lessons:', newCompleted);
        return newCompleted;
      });
    }
    
    // Update streak if it's a good score
    if (score >= 80) {
      setUserStats(prev => {
        const newStats = {
          ...prev,
          streak: prev.streak + 1
        };
        console.log('Updated streak:', newStats.streak);
        return newStats;
      });
    }
  };

  const handleProgressImport = (data: ProgressData) => {
    console.log('Importing progress data:', data);
    
    setSelectedLanguage(data.language);
    setUserStats(data.userStats);
    setCompletedLessons(data.completedLessons);
    setProgressPanelOpen(false);
    
    // Also save to localStorage immediately
    localStorage.setItem('languago-progress', JSON.stringify(data));
  };

  const handleLanguageSelect = (language: string) => {
    console.log('Language selected:', language);
    
    // Reset progress when switching languages unless we have saved progress for this language
    const savedProgress = localStorage.getItem('languago-progress');
    let shouldReset = true;
    
    if (savedProgress) {
      try {
        const progressData: ProgressData = JSON.parse(savedProgress);
        if (progressData.language === language) {
          // We have saved progress for this language, don't reset
          shouldReset = false;
          setUserStats(progressData.userStats);
          setCompletedLessons(progressData.completedLessons);
        }
      } catch (error) {
        console.error('Error parsing saved progress:', error);
      }
    }
    
    if (shouldReset) {
      // Reset progress for new language
      setUserStats({
        streak: 0,
        xp: 0,
        hearts: 5,
        level: 1
      });
      setCompletedLessons([]);
    }
    
    setSelectedLanguage(language);
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
            <LanguageSelector onLanguageSelect={handleLanguageSelect} />
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
