"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, Heart } from "lucide-react";

interface WordCardProps {
  id: number;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
  synonyms: string[];
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function WordCard({
  word,
  phonetic,
  partOfSpeech,
  meaning,
  example,
  synonyms,
  isFavorite,
  onToggleFavorite,
}: WordCardProps) {
  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{word}</h3>
              <Badge variant="secondary" className="text-xs">
                {partOfSpeech}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{phonetic}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={playPronunciation}>
              <Volume2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onToggleFavorite}
              className={isFavorite ? "text-rose-500" : ""}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm">{meaning}</p>
        
        <div className="p-3 rounded-lg bg-secondary/30">
          <p className="text-sm text-muted-foreground italic">"{example}"</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {synonyms.map((synonym) => (
            <Badge key={synonym} variant="outline" className="text-xs bg-transparent">
              {synonym}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
