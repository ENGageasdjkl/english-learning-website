"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StickyNote, Search, PlusCircle, Sparkles } from "lucide-react";

const sampleMnemonics = [
  {
    id: 1,
    word: "meticulous",
    mnemonic: "Imagine a METEOR with tiny rulers measuring everything.",
    category: "Visual",
    status: "published",
  },
  {
    id: 2,
    word: "resilient",
    mnemonic: "A rubber band RESISTS and springs back with energy.",
    category: "Story",
    status: "draft",
  },
  {
    id: 3,
    word: "ubiquitous",
    mnemonic: "You-BE-QUIT-ous because it is everywhere, you can’t quit it.",
    category: "Sound",
    status: "published",
  },
];

const statusColors: Record<string, string> = {
  published: "bg-emerald-500/10 text-emerald-500",
  draft: "bg-amber-500/10 text-amber-500",
};

export function MnemonicManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mnemonics] = useState(sampleMnemonics);

  const filteredMnemonics = mnemonics.filter(
    (item) =>
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mnemonic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mnemonic Management</h1>
          <p className="text-muted-foreground">Curate memorable stories and associations for learners</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Mnemonic
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search mnemonics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/30"
        />
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StickyNote className="h-5 w-5 text-primary" />
            Mnemonic Library ({filteredMnemonics.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredMnemonics.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-border/50 p-4 transition hover:border-primary/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{item.word}</h3>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.mnemonic}</p>
                </div>
                <Badge className={statusColors[item.status]}>{item.status}</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Sparkles className="h-4 w-4" />
                  Enhance
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
