"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="secondary" className="text-sm px-4 py-1.5">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          AI-Powered Intelligent Memory System
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          Master English with{" "}
          <span className="text-primary">Smart Memory</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          An intelligent English learning platform combining vocabulary learning, 
          reading comprehension, daily check-ins, and AI-powered memory techniques 
          to accelerate your language journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="text-base px-8 py-6 font-semibold gap-2">
            <Link href="/dashboard">
              <BookOpen className="w-5 h-5" />
              Start Learning
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 font-semibold bg-transparent gap-2">
            <Link href="/login">
              <Brain className="w-5 h-5" />
              Sign In
            </Link>
          </Button>
        </div>

        {/* Stats preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
          {[
            { value: "5000+", label: "Vocabulary Words" },
            { value: "200+", label: "Reading Articles" },
            { value: "50+", label: "Word Lists" },
            { value: "10K+", label: "Active Learners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
