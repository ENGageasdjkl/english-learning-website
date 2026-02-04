"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CheckInCard } from "@/components/dashboard/check-in-card";
import { LearningStatsCard } from "@/components/dashboard/learning-stats-card";
import { RecentWordsCard } from "@/components/dashboard/recent-words-card";
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card";
import { StreakCalendar } from "@/components/dashboard/streak-calendar";

export default function DashboardPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Learner!</h1>
          <p className="text-muted-foreground mt-1">Track your progress and continue learning</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Check-in Card */}
          <CheckInCard isCheckedIn={isCheckedIn} onCheckIn={() => setIsCheckedIn(true)} />
          
          {/* Learning Stats */}
          <LearningStatsCard />
          
          {/* Quick Actions */}
          <QuickActionsCard />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* Streak Calendar */}
          <StreakCalendar />
          
          {/* Recent Words */}
          <RecentWordsCard />
        </div>
      </main>
    </div>
  );
}
