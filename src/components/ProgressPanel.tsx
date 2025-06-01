
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Save, Upload, Copy, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

interface ProgressPanelProps {
  selectedLanguage: string | null;
  userStats: {
    streak: number;
    xp: number;
    hearts: number;
    level: number;
  };
  completedLessons: number[];
  onProgressImport: (data: ProgressData) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ProgressPanel: React.FC<ProgressPanelProps> = ({
  selectedLanguage,
  userStats,
  completedLessons,
  onProgressImport,
  isOpen,
  onToggle
}) => {
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateProgressString = () => {
    if (!selectedLanguage) {
      toast({
        title: "No Language Selected",
        description: "Please select a language first before exporting progress.",
        variant: "destructive",
      });
      return '';
    }
    
    const progressData: ProgressData = {
      language: selectedLanguage,
      completedLessons: [...completedLessons], // Create a copy
      userStats: { ...userStats }, // Create a copy
      timestamp: new Date().toISOString()
    };
    
    console.log('Generating progress data:', progressData);
    
    try {
      const jsonString = JSON.stringify(progressData);
      const base64String = btoa(jsonString);
      console.log('Generated base64 string:', base64String);
      return base64String;
    } catch (error) {
      console.error('Error generating progress string:', error);
      toast({
        title: "Export Error",
        description: "Failed to generate progress string.",
        variant: "destructive",
      });
      return '';
    }
  };

  const handleExport = async () => {
    const progressString = generateProgressString();
    if (!progressString) return;
    
    try {
      await navigator.clipboard.writeText(progressString);
      setCopied(true);
      toast({
        title: "Progress Exported!",
        description: "Your progress has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard error:', err);
      // Fallback for browsers that don't support clipboard API
      try {
        const textArea = document.createElement('textarea');
        textArea.value = progressString;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          toast({
            title: "Progress Exported!",
            description: "Your progress has been copied to clipboard.",
          });
          setTimeout(() => setCopied(false), 2000);
        } else {
          throw new Error('Copy command failed');
        }
      } catch (fallbackError) {
        console.error('Fallback copy error:', fallbackError);
        toast({
          title: "Export Failed",
          description: "Could not copy to clipboard. Please copy the string manually.",
          variant: "destructive",
        });
      }
    }
  };

  const handleImport = () => {
    const trimmedText = importText.trim();
    
    if (!trimmedText) {
      toast({
        title: "Error",
        description: "Please enter a progress string to import.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('Attempting to import:', trimmedText);
      
      // Decode base64
      const decodedString = atob(trimmedText);
      console.log('Decoded string:', decodedString);
      
      // Parse JSON
      const decodedData = JSON.parse(decodedString);
      console.log('Parsed data:', decodedData);
      
      // Validate structure
      if (!decodedData || typeof decodedData !== 'object') {
        throw new Error('Invalid data structure');
      }
      
      if (!decodedData.language || typeof decodedData.language !== 'string') {
        throw new Error('Missing or invalid language');
      }
      
      if (!decodedData.userStats || typeof decodedData.userStats !== 'object') {
        throw new Error('Missing or invalid user stats');
      }
      
      if (!Array.isArray(decodedData.completedLessons)) {
        throw new Error('Missing or invalid completed lessons');
      }
      
      // Validate userStats structure
      const requiredStats = ['streak', 'xp', 'hearts', 'level'];
      for (const stat of requiredStats) {
        if (typeof decodedData.userStats[stat] !== 'number') {
          throw new Error(`Invalid or missing stat: ${stat}`);
        }
      }
      
      // All validation passed, import the data
      onProgressImport(decodedData);
      setImportText('');
      
      toast({
        title: "Progress Imported!",
        description: `Successfully restored progress for ${decodedData.language}.`,
      });
      
    } catch (err) {
      console.error('Import error:', err);
      
      let errorMessage = "Invalid progress string. Please check and try again.";
      
      if (err instanceof Error) {
        if (err.message.includes('Invalid character')) {
          errorMessage = "Invalid base64 string format.";
        } else if (err.message.includes('JSON')) {
          errorMessage = "Invalid JSON data in progress string.";
        } else if (err.message.includes('Invalid data structure') || 
                   err.message.includes('Missing') || 
                   err.message.includes('Invalid')) {
          errorMessage = `Data validation failed: ${err.message}`;
        }
      }
      
      toast({
        title: "Import Failed",
        description: errorMessage,
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
              <p className="text-xs text-gray-500">
                Completed: {completedLessons.length} lessons
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
