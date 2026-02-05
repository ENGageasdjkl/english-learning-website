"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileText, Star, Send, CheckCircle2 } from "lucide-react";

const reportHighlights = [
  { label: "Weekly check-ins", value: "5/7 days", status: "on-track" },
  { label: "New words learned", value: "72", status: "strong" },
  { label: "Reading time", value: "3h 40m", status: "steady" },
];

const statusColors: Record<string, string> = {
  "on-track": "bg-emerald-500/10 text-emerald-500",
  strong: "bg-blue-500/10 text-blue-500",
  steady: "bg-amber-500/10 text-amber-500",
};

const recentMessages = [
  {
    id: 1,
    title: "Pronunciation practice",
    status: "replied",
    summary: "Tutor provided a daily shadowing plan and audio tips.",
    date: "2026-01-09",
  },
  {
    id: 2,
    title: "Vocabulary outline suggestion",
    status: "in-progress",
    summary: "Requested a themed outline for business meetings.",
    date: "2026-01-07",
  },
];

export default function FeedbackPage() {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-6xl mx-auto px-4 py-8 pt-24 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Feedback & Reports</h1>
            <p className="text-muted-foreground mt-1">
              Leave a message for tutors and track your learning progress report.
            </p>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <FileText className="h-4 w-4" />
            Download Report
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reportHighlights.map((highlight) => (
            <Card key={highlight.label} className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">{highlight.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-2xl font-semibold">{highlight.value}</span>
                <Badge className={statusColors[highlight.status]}>{highlight.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Leave a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Topic</label>
                <Input
                  placeholder="Ask about vocabulary, reading, or study plans"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  className="mt-2 bg-secondary/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Share your learning challenge or report..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 bg-secondary/30"
                  rows={6}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button className="gap-2">
                  <Send className="h-4 w-4" />
                  Submit Message
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Star className="h-4 w-4" />
                  Request Report Review
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Recent Responses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="rounded-lg border border-border/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{message.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{message.summary}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={message.status === "replied" ? "border-emerald-500/40 text-emerald-500" : ""}
                    >
                      {message.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">{message.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
