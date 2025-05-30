
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Volume2 } from 'lucide-react';

interface Question {
  id: number;
  type: 'multiple-choice' | 'translation' | 'listening';
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface LessonInterfaceProps {
  language: string;
  onStatsUpdate: (xp: number, heartsLost?: number) => void;
  hearts: number;
}

export const LessonInterface: React.FC<LessonInterfaceProps> = ({ 
  language, 
  onStatsUpdate, 
  hearts 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);

  // Sample questions - in a real app, these would come from an API
  const questions: Question[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: 'How do you say "Hello" in Spanish?',
      options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
      correct: 0,
      explanation: '"Hola" is the most common way to say hello in Spanish.'
    },
    {
      id: 2,
      type: 'translation',
      question: 'What does "Gracias" mean?',
      options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
      correct: 2,
      explanation: '"Gracias" means "Thank you" in English.'
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: 'How do you say "Good morning"?',
      options: ['Buenas noches', 'Buenas tardes', 'Buenos días', 'Hasta luego'],
      correct: 2,
      explanation: '"Buenos días" is used to greet someone in the morning.'
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const correct = selectedAnswer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      onStatsUpdate(10); // +10 XP for correct answer
    } else {
      onStatsUpdate(0, 1); // -1 heart for incorrect answer
    }
  };

  const handleContinue = () => {
    if (currentQuestion + 1 >= questions.length) {
      setLessonComplete(true);
      onStatsUpdate(50); // Bonus XP for completing lesson
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const restartLesson = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setLessonComplete(false);
  };

  if (lessonComplete) {
    return (
      <Card className="max-w-2xl mx-auto p-8 text-center bg-white/80 backdrop-blur-sm">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Lesson Complete!</h2>
          <p className="text-gray-600">Great job! You've earned 80 XP total.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">3/3</div>
            <div className="text-sm text-gray-600">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">+80</div>
            <div className="text-sm text-gray-600">XP Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">1</div>
            <div className="text-sm text-gray-600">Streak</div>
          </div>
        </div>
        
        <Button 
          onClick={restartLesson}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Practice Again
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      <Card className="p-8 bg-white/80 backdrop-blur-sm">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {questions[currentQuestion].question}
            </h2>
            {questions[currentQuestion].type === 'listening' && (
              <Button variant="outline" size="icon">
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                selectedAnswer === index
                  ? showResult
                    ? isCorrect && selectedAnswer === index
                      ? 'border-green-500 bg-green-50'
                      : !isCorrect && selectedAnswer === index
                      ? 'border-red-500 bg-red-50'
                      : 'border-blue-500 bg-blue-50'
                    : 'border-blue-500 bg-blue-50'
                  : showResult && index === questions[currentQuestion].correct
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="font-medium">{option}</span>
                {showResult && index === questions[currentQuestion].correct && (
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                )}
                {showResult && !isCorrect && selectedAnswer === index && (
                  <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            {questions[currentQuestion].explanation && (
              <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
            )}
          </div>
        )}

        <div className="flex justify-end">
          {!showResult ? (
            <Button 
              onClick={handleSubmit}
              disabled={selectedAnswer === null || hearts === 0}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Check
            </Button>
          ) : (
            <Button 
              onClick={handleContinue}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Continue
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
