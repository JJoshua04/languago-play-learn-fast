
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Flame, Heart, Trophy, Zap } from 'lucide-react';

interface UserProgressProps {
  stats: {
    streak: number;
    xp: number;
    hearts: number;
    level: number;
  };
  language: string;
}

export const UserProgress: React.FC<UserProgressProps> = ({ stats, language }) => {
  const xpToNextLevel = 1500;
  const progressPercentage = (stats.xp % 500) / 5;

  const getLanguageFlag = (code: string) => {
    const flags: { [key: string]: string } = {
      'es': '🇪🇸', 'fr': '🇫🇷', 'de': '🇩🇪', 
      'it': '🇮🇹', 'pt': '🇵🇹', 'ja': '🇯🇵'
    };
    return flags[code] || '🌍';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="p-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{getLanguageFlag(language)}</div>
          <div>
            <p className="text-sm text-gray-600">Learning</p>
            <p className="font-semibold capitalize">{language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : language === 'de' ? 'German' : language === 'it' ? 'Italian' : language === 'pt' ? 'Portuguese' : 'Japanese'}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Streak</p>
            <p className="font-semibold">{stats.streak} days</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Hearts</p>
            <p className="font-semibold">{stats.hearts}/5</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Level {stats.level}</p>
            <div className="flex items-center space-x-2">
              <Progress value={progressPercentage} className="w-16 h-2" />
              <span className="text-xs text-gray-500">{stats.xp} XP</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
