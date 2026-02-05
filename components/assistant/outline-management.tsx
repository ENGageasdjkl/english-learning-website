"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpenCheck, Search, PlusCircle, Layers } from "lucide-react";

const sampleOutlines = [
  { id: 1, name: "CET-4 Core", level: "Intermediate", words: 800, status: "active" },
  { id: 2, name: "CET-6 Core", level: "Upper-Intermediate", words: 600, status: "active" },
  { id: 3, name: "IELTS Academic", level: "Advanced", words: 800, status: "draft" },
  { id: 4, name: "Daily Conversation", level: "Beginner", words: 500, status: "active" },
];

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-500",
  draft: "bg-amber-500/10 text-amber-500",
};

export function OutlineManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [outlines] = useState(sampleOutlines);

  const filteredOutlines = outlines.filter((outline) =>
    outline.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Vocabulary Outline Management</h1>
          <p className="text-muted-foreground">Design and publish learning outlines by level</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Create Outline
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search outlines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/30"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredOutlines.map((outline) => (
          <Card key={outline.id} className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <BookOpenCheck className="h-5 w-5 text-primary" />
                  {outline.name}
                </span>
                <Badge className={statusColors[outline.status]}>{outline.status}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Layers className="h-4 w-4" />
                <span>{outline.level} · {outline.words} words</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  View Outline
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive">
                  Archive
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
