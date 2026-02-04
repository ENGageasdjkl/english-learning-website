"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { VocabularySearch } from "@/components/vocabulary/vocabulary-search";
import { WordListSelector } from "@/components/vocabulary/word-list-selector";
import { WordCard } from "@/components/vocabulary/word-card";
import { LearnModePanel } from "@/components/vocabulary/learn-mode-panel";

const sampleWords = [
  {
    id: 1,
    word: "ephemeral",
    phonetic: "/ɪˈfem.ər.əl/",
    partOfSpeech: "adjective",
    meaning: "lasting for a very short time",
    example: "The ephemeral beauty of cherry blossoms draws millions of visitors each spring.",
    synonyms: ["transient", "fleeting", "momentary"],
    isFavorite: false,
  },
  {
    id: 2,
    word: "ubiquitous",
    phonetic: "/juːˈbɪk.wɪ.təs/",
    partOfSpeech: "adjective",
    meaning: "present, appearing, or found everywhere",
    example: "Smartphones have become ubiquitous in modern society.",
    synonyms: ["omnipresent", "pervasive", "universal"],
    isFavorite: true,
  },
  {
    id: 3,
    word: "pragmatic",
    phonetic: "/præɡˈmæt.ɪk/",
    partOfSpeech: "adjective",
    meaning: "dealing with things sensibly and realistically",
    example: "We need to take a pragmatic approach to solve this problem.",
    synonyms: ["practical", "realistic", "sensible"],
    isFavorite: false,
  },
  {
    id: 4,
    word: "eloquent",
    phonetic: "/ˈel.ə.kwənt/",
    partOfSpeech: "adjective",
    meaning: "fluent or persuasive in speaking or writing",
    example: "She gave an eloquent speech that moved everyone in the audience.",
    synonyms: ["articulate", "expressive", "fluent"],
    isFavorite: true,
  },
  {
    id: 5,
    word: "meticulous",
    phonetic: "/məˈtɪk.jə.ləs/",
    partOfSpeech: "adjective",
    meaning: "showing great attention to detail; very careful and precise",
    example: "Her meticulous research uncovered previously unknown historical facts.",
    synonyms: ["thorough", "careful", "precise"],
    isFavorite: false,
  },
  {
    id: 6,
    word: "resilient",
    phonetic: "/rɪˈzɪl.i.ənt/",
    partOfSpeech: "adjective",
    meaning: "able to recover quickly from difficulties",
    example: "Children are often more resilient than adults give them credit for.",
    synonyms: ["tough", "adaptable", "flexible"],
    isFavorite: false,
  },
];

export default function VocabularyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedList, setSelectedList] = useState("all");
  const [isLearnMode, setIsLearnMode] = useState(false);
  const [words, setWords] = useState(sampleWords);

  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    setWords(words.map((w) => 
      w.id === id ? { ...w, isFavorite: !w.isFavorite } : w
    ));
  };

  if (isLearnMode) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
          <LearnModePanel 
            words={filteredWords} 
            onExit={() => setIsLearnMode(false)} 
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Vocabulary</h1>
          <p className="text-muted-foreground mt-1">Search, learn, and master new words</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <div className="space-y-6">
            <VocabularySearch 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
            <WordListSelector 
              selectedList={selectedList}
              onSelectList={setSelectedList}
              onStartLearn={() => setIsLearnMode(true)}
            />
          </div>

          {/* Word Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredWords.length} words
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {filteredWords.map((word) => (
                <WordCard 
                  key={word.id} 
                  {...word} 
                  onToggleFavorite={() => toggleFavorite(word.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
