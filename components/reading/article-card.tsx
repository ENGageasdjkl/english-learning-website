'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  difficulty: string;
  readTime: number;
  wordCount: number;
  date: string;
  onRead: () => void;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-500",
  Intermediate: "bg-cyan-500/10 text-cyan-500",
  Advanced: "bg-rose-500/10 text-rose-500",
};

export function ArticleCard({
  title,
  excerpt,
  category,
  difficulty,
  readTime,
  wordCount,
  date,
  onRead,
}: ArticleCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
              <Badge className={`text-xs ${difficultyColors[difficulty]}`}>
                {difficulty}
              </Badge>
            </div>
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              <span>{wordCount} words</span>
            </div>
          </div>
          <Button size="sm" onClick={onRead} className="gap-1">
            Read
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
