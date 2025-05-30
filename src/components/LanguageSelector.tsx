
import React from 'react';
import { Card } from '@/components/ui/card';

interface Language {
  code: string;
  name: string;
  flag: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learners: string;
}

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageSelect }) => {
  const languages: Language[] = [
    { code: 'es', name: 'Spanish', flag: '🇪🇸', difficulty: 'Beginner', learners: '2.1M' },
    { code: 'fr', name: 'French', flag: '🇫🇷', difficulty: 'Beginner', learners: '1.8M' },
    { code: 'de', name: 'German', flag: '🇩🇪', difficulty: 'Intermediate', learners: '1.2M' },
    { code: 'it', name: 'Italian', flag: '🇮🇹', difficulty: 'Beginner', learners: '950K' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹', difficulty: 'Beginner', learners: '800K' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', difficulty: 'Advanced', learners: '1.5M' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {languages.map((language) => (
        <Card 
          key={language.code}
          className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200 bg-white/70 backdrop-blur-sm"
          onClick={() => onLanguageSelect(language.code)}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">{language.flag}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{language.name}</h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                language.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                language.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {language.difficulty}
              </span>
              <span>{language.learners} learners</span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Start Learning
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};
