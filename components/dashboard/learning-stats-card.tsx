import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BookOpen, Brain, Target } from "lucide-react";

export function LearningStatsCard() {
  const stats = [
    { label: "Words Learned", value: 256, icon: BookOpen, trend: "+12 this week" },
    { label: "Articles Read", value: 18, icon: Brain, trend: "+3 this week" },
    { label: "Mastery Rate", value: "78%", icon: Target, trend: "+5%" },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-primary" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.trend}</div>
              </div>
            </div>
            <div className="text-xl font-bold">{stat.value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
