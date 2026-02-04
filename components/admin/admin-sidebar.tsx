"use client";

import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, BookOpen, FileText } from "lucide-react";

type Tab = "dashboard" | "users" | "vocabulary" | "articles";

interface AdminSidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const menuItems = [
  { id: "dashboard" as Tab, label: "Dashboard", icon: LayoutDashboard },
  { id: "users" as Tab, label: "User Management", icon: Users },
  { id: "vocabulary" as Tab, label: "Vocabulary Management", icon: BookOpen },
  { id: "articles" as Tab, label: "Articles Management", icon: FileText },
];

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
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
