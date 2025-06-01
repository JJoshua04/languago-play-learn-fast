
import React from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Clock, Zap, BookOpen, Trophy, Play } from 'lucide-react';

const Practice = () => {
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
              Practice Hub
            </h1>
            <p className="text-gray-600">Strengthen your skills with focused practice sessions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Quick Practice */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Quick Practice</h3>
                  <p className="text-gray-600">5-minute review session</p>
                </div>
              </div>
              <Button className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Start Quick Practice
              </Button>
            </Card>

            {/* Timed Challenge */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Timed Challenge</h3>
                  <p className="text-gray-600">Beat the clock!</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <Target className="w-4 h-4 mr-2" />
                Start Challenge
              </Button>
            </Card>
          </div>

          {/* Practice Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-purple-500" />
                <h3 className="text-lg font-semibold">Vocabulary Review</h3>
              </div>
              <p className="text-gray-600 mb-4">Practice words you've learned</p>
              <Button variant="outline" className="w-full">Practice Vocabulary</Button>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-green-500" />
                <h3 className="text-lg font-semibold">Grammar Focus</h3>
              </div>
              <p className="text-gray-600 mb-4">Strengthen grammar skills</p>
              <Button variant="outline" className="w-full">Practice Grammar</Button>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <h3 className="text-lg font-semibold">Past Mistakes</h3>
              </div>
              <p className="text-gray-600 mb-4">Review questions you got wrong</p>
              <Button variant="outline" className="w-full">Review Mistakes</Button>
            </Card>
          </div>

          {/* Daily Goals */}
          <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Today's Practice Goals</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Complete a lesson</span>
                <span className="text-green-500 font-medium">✓ Complete</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Practice vocabulary for 10 minutes</span>
                <span className="text-yellow-500 font-medium">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Maintain your streak</span>
                <span className="text-green-500 font-medium">✓ Complete</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Practice;
