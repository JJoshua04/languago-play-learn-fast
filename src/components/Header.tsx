
import React from 'react';
import { BookOpen, Trophy, Flame } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Languago
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lessons</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Practice</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Profile</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
