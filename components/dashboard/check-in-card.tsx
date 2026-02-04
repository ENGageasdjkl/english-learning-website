"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Flame, Check } from "lucide-react";

interface CheckInCardProps {
  isCheckedIn: boolean;
  onCheckIn: () => void;
}

export function CheckInCard({ isCheckedIn, onCheckIn }: CheckInCardProps) {
  const currentStreak = 7;
  const totalCheckIns = 42;

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CalendarCheck className="h-5 w-5 text-primary" />
          Daily Check-in
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <div>
              <div className="text-2xl font-bold">{currentStreak}</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{totalCheckIns}</div>
            <div className="text-xs text-muted-foreground">Total Days</div>
          </div>
        </div>

        <Button
          onClick={onCheckIn}
          disabled={isCheckedIn}
          className="w-full gap-2"
          size="lg"
        >
          {isCheckedIn ? (
            <>
              <Check className="h-5 w-5" />
              Checked In Today
            </>
          ) : (
            <>
              <CalendarCheck className="h-5 w-5" />
              Check In Now
            </>
          )}
        </Button>

        {isCheckedIn && (
          <p className="text-center text-sm text-muted-foreground">
            Great job! Keep up your learning streak!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
