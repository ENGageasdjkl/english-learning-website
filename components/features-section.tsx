import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  BookOpen,
  Calendar,
  Brain,
  Heart,
  MessageSquare,
  ListChecks,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Vocabulary Search",
    description: "Search and learn new words instantly with detailed definitions, examples, and pronunciation.",
  },
  {
    icon: BookOpen,
    title: "Reading Articles",
    description: "Improve comprehension with curated English articles across various topics and difficulty levels.",
  },
  {
    icon: Calendar,
    title: "Daily Check-in",
    description: "Build consistent learning habits with daily check-ins and streak tracking to stay motivated.",
  },
  {
    icon: Brain,
    title: "Smart Memory",
    description: "AI-powered spaced repetition system helps you memorize vocabulary more efficiently.",
  },
  {
    icon: Heart,
    title: "Favorites Collection",
    description: "Save and organize your favorite words for quick review and personalized study sessions.",
  },
  {
    icon: MessageSquare,
    title: "Feedback & Reports",
    description: "Submit feedback and view detailed learning progress reports to track your improvement.",
  },
  {
    icon: ListChecks,
    title: "Vocabulary Lists",
    description: "Choose from multiple vocabulary outlines including CET-4, CET-6, TOEFL, IELTS, and more.",
  },
  {
    icon: GraduationCap,
    title: "Learning Progress",
    description: "Track your learning journey with comprehensive statistics and achievement badges.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Complete Learning <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master English vocabulary and reading comprehension in one intelligent platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
