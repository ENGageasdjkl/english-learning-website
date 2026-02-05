import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, BookOpen, Search, Heart, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

const actions = [
  { label: "Learn Words", href: "/vocabulary", icon: BookOpen, color: "bg-emerald-500/10 text-emerald-500" },
  { label: "Search", href: "/vocabulary?search=true", icon: Search, color: "bg-cyan-500/10 text-cyan-500" },
  { label: "Favorites", href: "/favorites", icon: Heart, color: "bg-rose-500/10 text-rose-500" },
  { label: "Reading", href: "/reading", icon: FileText, color: "bg-blue-500/10 text-blue-500" },
  { label: "Feedback", href: "/feedback", icon: MessageSquare, color: "bg-purple-500/10 text-purple-500" },
];

export function QuickActionsCard() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Zap className="h-5 w-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              asChild
              variant="outline"
              className="h-auto py-4 flex-col gap-2 bg-transparent hover:bg-secondary"
            >
              <Link href={action.href}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-sm">{action.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
