
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Trophy, Flame, Heart, Star, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface UserStats {
  streak: number;
  xp: number;
  hearts: number;
  level: number;
}

interface ProgressData {
  language: string;
  completedLessons: number[];
  userStats: UserStats;
  timestamp: string;
}

const Profile = () => {
  const location = useLocation();
  const [userStats, setUserStats] = useState<UserStats>({
    streak: 0,
    xp: 0,
    hearts: 5,
    level: 1
  });
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<string>('');

  // Load progress from localStorage or URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const progressParam = params.get('progress');
    
    if (progressParam) {
      try {
        const progressData: ProgressData = JSON.parse(atob(progressParam));
        setUserStats(progressData.userStats);
        setCompletedLessons(progressData.completedLessons);
        setCurrentLanguage(progressData.language);
      } catch (error) {
        console.log('Could not parse progress data from URL');
      }
    } else {
      // Try to load from localStorage
      const savedProgress = localStorage.getItem('languago-progress');
      if (savedProgress) {
        try {
          const progressData: ProgressData = JSON.parse(savedProgress);
          setUserStats(progressData.userStats);
          setCompletedLessons(progressData.completedLessons);
          setCurrentLanguage(progressData.language);
        } catch (error) {
          console.log('Could not parse saved progress data');
        }
      }
    }
  }, [location]);

  const getLanguageProgress = (langCode: string) => {
    if (langCode === currentLanguage) {
      const totalLessons = langCode === 'es' || langCode === 'fr' ? 12 : 3;
      return Math.round((completedLessons.length / totalLessons) * 100);
    }
    return 0;
  };

  const studyTimeToday = Math.floor(completedLessons.length * 3.5); // Estimate ~3.5 min per lesson

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Lessons
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Your Profile
            </h1>
            <p className="text-gray-600">Track your learning progress and achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Info */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Language Learner</h3>
                  <p className="text-gray-600">Member since January 2024</p>
                </div>
              </div>
            </Card>

            {/* Stats Cards */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-lg font-semibold">Level</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">{userStats.level}</p>
              <p className="text-sm text-gray-600">{userStats.xp} XP earned</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <Flame className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-semibold">Streak</h3>
              </div>
              <p className="text-3xl font-bold text-orange-600">{userStats.streak}</p>
              <p className="text-sm text-gray-600">days in a row</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold">Hearts</h3>
              </div>
              <p className="text-3xl font-bold text-red-600">{userStats.hearts}</p>
              <p className="text-sm text-gray-600">out of 5</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <Star className="w-6 h-6 text-purple-500" />
                <h3 className="text-lg font-semibold">Achievements</h3>
              </div>
              <p className="text-3xl font-bold text-purple-600">{Math.floor(userStats.level * 1.5)}</p>
              <p className="text-sm text-gray-600">badges earned</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="w-6 h-6 text-green-500" />
                <h3 className="text-lg font-semibold">Study Time</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">{studyTimeToday}</p>
              <p className="text-sm text-gray-600">minutes today</p>
            </Card>
          </div>

          {/* Languages Section */}
          <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Languages You're Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { code: 'es', name: 'Spanish', flag: '🇪🇸' },
                { code: 'fr', name: 'French', flag: '🇫🇷' },
                { code: 'de', name: 'German', flag: '🇩🇪' },
                { code: 'it', name: 'Italian', flag: '🇮🇹' },
                { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
                { code: 'ja', name: 'Japanese', flag: '🇯🇵' }
              ].map((lang) => {
                const progress = getLanguageProgress(lang.code);
                return (
                  <div key={lang.code} className="text-center p-4 rounded-lg bg-gray-50">
                    <div className="text-3xl mb-2">{lang.flag}</div>
                    <h4 className="font-medium text-sm">{lang.name}</h4>
                    <p className="text-xs text-gray-600">{progress}% complete</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
