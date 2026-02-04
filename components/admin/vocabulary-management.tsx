"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Search, 
  Plus, 
  Edit, 
  Trash2,
  ListChecks 
} from "lucide-react";

const wordLists = [
  { id: 1, name: "CET-4 Core", count: 800, category: "Exam Prep" },
  { id: 2, name: "CET-6 Core", count: 600, category: "Exam Prep" },
  { id: 3, name: "TOEFL Essential", count: 1000, category: "Exam Prep" },
  { id: 4, name: "IELTS Academic", count: 800, category: "Exam Prep" },
  { id: 5, name: "Business English", count: 400, category: "Professional" },
  { id: 6, name: "Daily Conversation", count: 500, category: "General" },
];

const recentWords = [
  { id: 1, word: "ephemeral", list: "GRE Advanced", addedBy: "Admin", date: "2026-01-15" },
  { id: 2, word: "ubiquitous", list: "TOEFL Essential", addedBy: "Jane Smith", date: "2026-01-14" },
  { id: 3, word: "pragmatic", list: "Business English", addedBy: "Admin", date: "2026-01-14" },
  { id: 4, word: "eloquent", list: "IELTS Academic", addedBy: "Tom Brown", date: "2026-01-13" },
];

export function VocabularyManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Vocabulary Management</h1>
          <p className="text-muted-foreground">Manage word lists and vocabulary content</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 bg-transparent">
            <ListChecks className="h-4 w-4" />
            New Word List
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Word
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search words or lists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/30"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Word Lists */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              Word Lists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {wordLists.map((list) => (
                <div
                  key={list.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{list.name}</span>
                      <Badge variant="outline" className="text-xs bg-transparent">
                        {list.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{list.count} words</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recently Added Words */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Recently Added Words
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentWords.map((word) => (
                <div
                  key={word.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{word.word}</span>
                      <Badge variant="secondary" className="text-xs">
                        {word.list}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Added by {word.addedBy} on {word.date}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">5,100</div>
            <p className="text-sm text-muted-foreground">Total Words</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">9</div>
            <p className="text-sm text-muted-foreground">Word Lists</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">156</div>
            <p className="text-sm text-muted-foreground">Added This Month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
