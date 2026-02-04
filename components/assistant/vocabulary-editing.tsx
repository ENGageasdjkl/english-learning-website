"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FilePenLine, Search, PlusCircle, CheckCircle2 } from "lucide-react";

const sampleVocabulary = [
  {
    id: 1,
    word: "ephemeral",
    definition: "lasting for a very short time",
    level: "Advanced",
    status: "reviewed",
  },
  {
    id: 2,
    word: "pragmatic",
    definition: "dealing with things sensibly and realistically",
    level: "Intermediate",
    status: "pending",
  },
  {
    id: 3,
    word: "eloquent",
    definition: "fluent or persuasive in speaking or writing",
    level: "Intermediate",
    status: "reviewed",
  },
];

const statusColors: Record<string, string> = {
  reviewed: "bg-emerald-500/10 text-emerald-500",
  pending: "bg-amber-500/10 text-amber-500",
};

export function VocabularyEditing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [entries] = useState(sampleVocabulary);

  const filteredEntries = entries.filter(
    (entry) =>
      entry.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Vocabulary Editing</h1>
          <p className="text-muted-foreground">Review, enrich, and publish new vocabulary entries</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Word
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search vocabulary..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/30"
        />
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FilePenLine className="h-5 w-5 text-primary" />
            Vocabulary Queue ({filteredEntries.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredEntries.map((entry) => (
            <div key={entry.id} className="rounded-lg border border-border/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{entry.word}</h3>
                    <Badge variant="outline">{entry.level}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.definition}</p>
                </div>
                <Badge className={statusColors[entry.status]}>{entry.status}</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <CheckCircle2 className="h-4 w-4" />
                  Approve
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
