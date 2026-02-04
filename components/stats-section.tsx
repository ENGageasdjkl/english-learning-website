import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const vocabularyLists = [
  { name: "CET-4 Core", count: 800, color: "bg-emerald-500" },
  { name: "CET-6 Core", count: 600, color: "bg-cyan-500" },
  { name: "TOEFL Essential", count: 1000, color: "bg-blue-500" },
  { name: "IELTS Academic", count: 800, color: "bg-teal-500" },
  { name: "GRE Advanced", count: 500, color: "bg-emerald-400" },
  { name: "Business English", count: 400, color: "bg-cyan-400" },
  { name: "Daily Conversation", count: 500, color: "bg-blue-400" },
  { name: "Academic Writing", count: 300, color: "bg-teal-400" },
  { name: "Idioms & Phrases", count: 200, color: "bg-emerald-300" },
];

const totalWords = vocabularyLists.reduce((sum, list) => sum + list.count, 0);

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side - Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Comprehensive <span className="text-primary">Vocabulary Library</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Our platform covers vocabulary from basic to advanced levels, 
              carefully curated for different learning goals and exam preparations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary">{totalWords.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground mt-1">Total Words</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary">{vocabularyLists.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Word Lists</div>
              </div>
            </div>
          </div>

          {/* Right side - Vocabulary lists */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Available Vocabulary Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vocabularyLists.map((list) => (
                  <div key={list.name} className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${list.color} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{list.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {list.count} words
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className={`h-full ${list.color} transition-all duration-500`}
                          style={{ width: `${(list.count / 1000) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
