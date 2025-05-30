
import React, { useState } from 'react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { LessonInterface } from '@/components/LessonInterface';
import { UserProgress } from '@/components/UserProgress';
import { Header } from '@/components/Header';
import { ProgressPanel } from '@/components/ProgressPanel';

interface ProgressData {
  language: string;
  completedLessons: number;
  userStats: {
    streak: number;
    xp: number;
    hearts: number;
    level: number;
  };
  timestamp: string;
}

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [userStats, setUserStats] = useState({
    streak: 3,
    xp: 1250,
    hearts: 5,
    level: 8
  });
  const [progressPanelOpen, setProgressPanelOpen] = useState(false);

  const updateUserStats = (xpGained: number, heartsLost: number = 0) => {
    setUserStats(prev => ({
      ...prev,
      xp: prev.xp + xpGained,
      hearts: Math.max(0, prev.hearts - heartsLost)
    }));
  };

  const handleProgressImport = (data: ProgressData) => {
    setSelectedLanguage(data.language);
    setUserStats(data.userStats);
    setProgressPanelOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <ProgressPanel
        selectedLanguage={selectedLanguage}
        userStats={userStats}
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
        ) : (
          <div className="max-w-6xl mx-auto">
            <UserProgress stats={userStats} language={selectedLanguage} />
            <LessonInterface 
              language={selectedLanguage} 
              onStatsUpdate={updateUserStats}
              hearts={userStats.hearts}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
