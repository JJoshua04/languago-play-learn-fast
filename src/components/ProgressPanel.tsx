
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Save, Upload, Copy, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

interface ProgressPanelProps {
  selectedLanguage: string | null;
  userStats: {
    streak: number;
    xp: number;
    hearts: number;
    level: number;
  };
  onProgressImport: (data: ProgressData) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ProgressPanel: React.FC<ProgressPanelProps> = ({
  selectedLanguage,
  userStats,
  onProgressImport,
  isOpen,
  onToggle
}) => {
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateProgressString = () => {
    if (!selectedLanguage) return '';
    
    const progressData: ProgressData = {
      language: selectedLanguage,
      completedLessons: Math.floor(userStats.xp / 80), // Assuming 80 XP per lesson
      userStats,
      timestamp: new Date().toISOString()
    };
    
    return btoa(JSON.stringify(progressData));
  };

  const handleExport = async () => {
    const progressString = generateProgressString();
    try {
      await navigator.clipboard.writeText(progressString);
      setCopied(true);
      toast({
        title: "Progress Exported!",
        description: "Your progress has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = progressString;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      toast({
        title: "Progress Exported!",
        description: "Your progress has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleImport = () => {
    if (!importText.trim()) {
      toast({
        title: "Error",
        description: "Please enter a progress string to import.",
        variant: "destructive",
      });
      return;
    }

    try {
      const decodedData = JSON.parse(atob(importText.trim()));
      
      if (!decodedData.language || !decodedData.userStats) {
        throw new Error('Invalid progress data format');
      }
      
      onProgressImport(decodedData);
      setImportText('');
      toast({
        title: "Progress Imported!",
        description: `Successfully restored progress for ${decodedData.language}.`,
      });
    } catch (err) {
      toast({
        title: "Import Failed",
        description: "Invalid progress string. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={onToggle}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm shadow-lg"
        >
          <Save className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50 w-80">
      <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Progress Manager</h3>
          <Button
            onClick={onToggle}
            variant="ghost"
            size="icon"
            className="h-6 w-6"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium mb-2 block">Export Progress</Label>
            <p className="text-xs text-gray-600 mb-2">
              Save your current progress as a text string
            </p>
            <Button
              onClick={handleExport}
              disabled={!selectedLanguage}
              className="w-full"
              variant="outline"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Progress String
                </>
              )}
            </Button>
          </div>
          
          <div>
            <Label htmlFor="import-text" className="text-sm font-medium mb-2 block">
              Import Progress
            </Label>
            <p className="text-xs text-gray-600 mb-2">
              Paste your progress string to restore your learning data
            </p>
            <Textarea
              id="import-text"
              placeholder="Paste your progress string here..."
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              className="mb-2 min-h-[80px]"
            />
            <Button
              onClick={handleImport}
              className="w-full"
              disabled={!importText.trim()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Import Progress
            </Button>
          </div>
          
          {selectedLanguage && (
            <div className="pt-2 border-t">
              <p className="text-xs text-gray-500">
                Current: {selectedLanguage.toUpperCase()} • Level {userStats.level} • {userStats.xp} XP
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
