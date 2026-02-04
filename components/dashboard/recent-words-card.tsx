import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Volume2 } from "lucide-react";
import Link from "next/link";

const recentWords = [
  { word: "ephemeral", meaning: "lasting for a very short time", phonetic: "/ɪˈfem.ər.əl/" },
  { word: "ubiquitous", meaning: "present, appearing, or found everywhere", phonetic: "/juːˈbɪk.wɪ.təs/" },
  { word: "pragmatic", meaning: "dealing with things sensibly and realistically", phonetic: "/præɡˈmæt.ɪk/" },
  { word: "eloquent", meaning: "fluent or persuasive in speaking or writing", phonetic: "/ˈel.ə.kwənt/" },
];

export function RecentWordsCard() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock className="h-5 w-5 text-primary" />
          Recent Words
        </CardTitle>
        <Button asChild variant="ghost" size="sm" className="gap-1">
          <Link href="/vocabulary">
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentWords.map((item) => (
            <div
              key={item.word}
              className="flex items-start justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{item.word}</span>
                  <span className="text-xs text-muted-foreground">{item.phonetic}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 truncate">
                  {item.meaning}
                </p>
              </div>
              <Button variant="ghost" size="icon" className="flex-shrink-0 ml-2">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
