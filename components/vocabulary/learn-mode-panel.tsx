"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Eye, 
  EyeOff, 
  X, 
  Check, 
  RotateCcw,
  Brain 
} from "lucide-react";

interface Word {
  id: number;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
  synonyms: string[];
}

interface LearnModePanelProps {
  words: Word[];
  onExit: () => void;
}

export function LearnModePanel({ words, onExit }: LearnModePanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);
  const [unknownWords, setUnknownWords] = useState<number[]>([]);

  const currentWord = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;

  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  const handleKnown = () => {
    setKnownWords([...knownWords, currentWord.id]);
    goNext();
  };

  const handleUnknown = () => {
    setUnknownWords([...unknownWords, currentWord.id]);
    goNext();
  };

  const goNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowMeaning(false);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowMeaning(false);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setShowMeaning(false);
    setKnownWords([]);
    setUnknownWords([]);
  };

  const isComplete = currentIndex === words.length - 1 && (knownWords.includes(currentWord.id) || unknownWords.includes(currentWord.id));

  if (isComplete) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="h-5 w-5 text-primary" />
            Session Complete
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-8">
            <div className="text-6xl font-bold text-primary mb-2">
              {Math.round((knownWords.length / words.length) * 100)}%
            </div>
            <p className="text-muted-foreground">Mastery Rate</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-500/10 text-center">
              <div className="text-2xl font-bold text-emerald-500">{knownWords.length}</div>
              <p className="text-sm text-muted-foreground">Words Known</p>
            </div>
            <div className="p-4 rounded-lg bg-rose-500/10 text-center">
              <div className="text-2xl font-bold text-rose-500">{unknownWords.length}</div>
              <p className="text-sm text-muted-foreground">Need Review</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={resetSession} variant="outline" className="flex-1 gap-2 bg-transparent">
              <RotateCcw className="h-4 w-4" />
              Practice Again
            </Button>
            <Button onClick={onExit} className="flex-1">
              Finish
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onExit} className="gap-2">
          <X className="h-4 w-4" />
          Exit
        </Button>
        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} / {words.length}
        </div>
      </div>

      {/* Progress */}
      <Progress value={progress} className="h-2" />

      {/* Word Card */}
      <Card className="bg-card border-border">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Word */}
            <div>
              <h2 className="text-4xl font-bold mb-2">{currentWord.word}</h2>
              <p className="text-muted-foreground">{currentWord.phonetic}</p>
            </div>

            {/* Pronunciation button */}
            <Button variant="outline" onClick={playPronunciation} className="gap-2 bg-transparent">
              <Volume2 className="h-4 w-4" />
              Listen
            </Button>

            {/* Meaning (toggleable) */}
            <div className="min-h-[120px] flex items-center justify-center">
              {showMeaning ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="text-lg">{currentWord.meaning}</p>
                  <p className="text-sm text-muted-foreground italic">"{currentWord.example}"</p>
                </div>
              ) : (
                <Button 
                  variant="secondary" 
                  onClick={() => setShowMeaning(true)}
                  className="gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Show Meaning
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          onClick={goPrevious} 
          disabled={currentIndex === 0}
          className="bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleUnknown} 
          className="flex-1 gap-2 border-rose-500/50 text-rose-500 hover:bg-rose-500/10 bg-transparent"
        >
          <X className="h-4 w-4" />
          Don't Know
        </Button>
        
        <Button 
          onClick={handleKnown} 
          className="flex-1 gap-2 bg-emerald-500 hover:bg-emerald-600"
        >
          <Check className="h-4 w-4" />
          Know It
        </Button>
        
        <Button 
          variant="outline" 
          onClick={goNext} 
          disabled={currentIndex === words.length - 1}
          className="bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
