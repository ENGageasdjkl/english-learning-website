"use client";

import { Button } from "@/components/ui/button";
import { StickyNote, BookOpenCheck, FilePenLine } from "lucide-react";

type Tab = "mnemonics" | "outlines" | "vocabulary";

interface AssistantSidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const menuItems = [
  { id: "mnemonics" as Tab, label: "Mnemonic Management", icon: StickyNote },
  { id: "outlines" as Tab, label: "Vocabulary Outlines", icon: BookOpenCheck },
  { id: "vocabulary" as Tab, label: "Word Editing", icon: FilePenLine },
];

export function AssistantSidebar({ activeTab, onTabChange }: AssistantSidebarProps) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-border/50 bg-card/50 p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "secondary" : "ghost"}
            className={`w-full justify-start gap-3 ${
              activeTab === item.id ? "bg-primary/10 text-primary" : ""
            }`}
            onClick={() => onTabChange(item.id)}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
