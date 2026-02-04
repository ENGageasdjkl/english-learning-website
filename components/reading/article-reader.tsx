"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Clock, 
  FileText, 
  Volume2, 
  BookmarkPlus,
  Share2,
  Check
} from "lucide-react";

interface ArticleReaderProps {
  article: {
    title: string;
    content: string;
    category: string;
    difficulty: string;
    readTime: number;
    wordCount: number;
    date: string;
  };
  onBack: () => void;
}

export function ArticleReader({ article, onBack }: ArticleReaderProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const paragraphs = article.content.split("\n\n");

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(article.content);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Button>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={speakText}
            className="bg-transparent"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsSaved(!isSaved)}
            className={isSaved ? "text-primary bg-transparent" : "bg-transparent"}
          >
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-transparent">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Article Card */}
      <Card className="bg-card border-border">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{article.category}</Badge>
            <Badge variant="outline" className="bg-transparent">{article.difficulty}</Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>{article.wordCount} words</span>
            </div>
            <span>{article.date}</span>
          </div>
        </CardHeader>

        <CardContent className="prose prose-invert max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-foreground/90 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>

      {/* Completion Section */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Finished reading?</h3>
              <p className="text-sm text-muted-foreground">
                Mark this article as complete to track your progress
              </p>
            </div>
            <Button 
              onClick={() => setIsCompleted(true)}
              disabled={isCompleted}
              className="gap-2"
            >
              {isCompleted ? (
                <>
                  <Check className="h-4 w-4" />
                  Completed
                </>
              ) : (
                "Mark as Complete"
              )}
            </Button>
          </div>

          {isCompleted && (
            <div className="mt-4 p-4 rounded-lg bg-primary/10">
              <p className="text-sm text-primary">
                Great job! You've completed this article. Keep up the good work!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
