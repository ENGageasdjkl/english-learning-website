"use client";

import { Button } from "@/components/ui/button";

const categories = ["all", "Technology", "Science", "Business", "Culture", "Health"];
const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

interface ArticleFiltersProps {
  selectedCategory: string;
  selectedDifficulty: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

export function ArticleFilters({
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange,
}: ArticleFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground py-2">Category:</span>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={selectedCategory !== category ? "bg-transparent" : ""}
          >
            {category === "all" ? "All" : category}
          </Button>
        ))}
      </div>

      {/* Difficulty filters */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground py-2">Level:</span>
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty}
            variant={selectedDifficulty === difficulty ? "default" : "outline"}
            size="sm"
            onClick={() => onDifficultyChange(difficulty)}
            className={selectedDifficulty !== difficulty ? "bg-transparent" : ""}
          >
            {difficulty === "all" ? "All Levels" : difficulty}
          </Button>
        ))}
      </div>
    </div>
  );
}
