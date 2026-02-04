"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListChecks, Play } from "lucide-react";

const wordLists = [
  { id: "all", name: "All Words", count: 5100 },
  { id: "cet4", name: "CET-4 Core", count: 800 },
  { id: "cet6", name: "CET-6 Core", count: 600 },
  { id: "toefl", name: "TOEFL Essential", count: 1000 },
  { id: "ielts", name: "IELTS Academic", count: 800 },
  { id: "gre", name: "GRE Advanced", count: 500 },
  { id: "business", name: "Business English", count: 400 },
  { id: "daily", name: "Daily Conversation", count: 500 },
  { id: "academic", name: "Academic Writing", count: 300 },
  { id: "idioms", name: "Idioms & Phrases", count: 200 },
];

interface WordListSelectorProps {
  selectedList: string;
  onSelectList: (list: string) => void;
  onStartLearn: () => void;
}

export function WordListSelector({ selectedList, onSelectList, onStartLearn }: WordListSelectorProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ListChecks className="h-5 w-5 text-primary" />
          Word Lists
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {wordLists.map((list) => (
          <button
            key={list.id}
            onClick={() => onSelectList(list.id)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedList === list.id
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
          >
            <span>{list.name}</span>
            <span className={selectedList === list.id ? "text-primary-foreground/70" : "text-muted-foreground"}>
              {list.count}
            </span>
          </button>
        ))}
        
        <Button onClick={onStartLearn} className="w-full mt-4 gap-2">
          <Play className="h-4 w-4" />
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );
}
