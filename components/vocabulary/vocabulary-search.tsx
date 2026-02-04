"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface VocabularySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function VocabularySearch({ value, onChange }: VocabularySearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search words..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-secondary/30"
      />
    </div>
  );
}
