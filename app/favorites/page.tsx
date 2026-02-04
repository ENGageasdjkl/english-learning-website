"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Volume2, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const favoriteWords = [
  {
    id: 1,
    word: "ubiquitous",
    phonetic: "/juːˈbɪk.wɪ.təs/",
    partOfSpeech: "adjective",
    meaning: "present, appearing, or found everywhere",
    addedDate: "2026-01-15",
  },
  {
    id: 2,
    word: "eloquent",
    phonetic: "/ˈel.ə.kwənt/",
    partOfSpeech: "adjective",
    meaning: "fluent or persuasive in speaking or writing",
    addedDate: "2026-01-14",
  },
  {
    id: 3,
    word: "serendipity",
    phonetic: "/ˌser.ənˈdɪp.ə.ti/",
    partOfSpeech: "noun",
    meaning: "the occurrence of events by chance in a happy way",
    addedDate: "2026-01-12",
  },
  {
    id: 4,
    word: "resilient",
    phonetic: "/rɪˈzɪl.i.ənt/",
    partOfSpeech: "adjective",
    meaning: "able to recover quickly from difficulties",
    addedDate: "2026-01-10",
  },
];

export default function FavoritesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [words, setWords] = useState(favoriteWords);

  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const removeFromFavorites = (id: number) => {
    setWords(words.filter((w) => w.id !== id));
  };

  const playPronunciation = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Heart className="h-7 w-7 text-rose-500" />
            Favorites
          </h1>
          <p className="text-muted-foreground mt-1">Your saved words for quick review</p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search favorites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary/30"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{words.length}</div>
              <p className="text-sm text-muted-foreground">Total Favorites</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {words.filter((w) => w.partOfSpeech === "adjective").length}
              </div>
              <p className="text-sm text-muted-foreground">Adjectives</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {words.filter((w) => w.partOfSpeech === "noun").length}
              </div>
              <p className="text-sm text-muted-foreground">Nouns</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {words.filter((w) => w.partOfSpeech === "verb").length}
              </div>
              <p className="text-sm text-muted-foreground">Verbs</p>
            </CardContent>
          </Card>
        </div>

        {/* Favorites List */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Saved Words ({filteredWords.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredWords.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No favorites yet. Start adding words you want to remember!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredWords.map((word) => (
                  <div
                    key={word.id}
                    className="flex items-start justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-semibold">{word.word}</span>
                        <Badge variant="secondary" className="text-xs">
                          {word.partOfSpeech}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{word.phonetic}</p>
                      <p className="text-sm">{word.meaning}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Added on {word.addedDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => playPronunciation(word.word)}
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromFavorites(word.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
