// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calendar } from "lucide-react";


// export function StreakCalendar() {
//   // Generate mock data for the last 35 days
//   const today = new Date();
//   const days = Array.from({ length: 35 }, (_, i) => {
//     const date = new Date(today);
//     date.setDate(date.getDate() - (34 - i));
//     return {
//       date,
//       checked: Math.random() > 0.3, // Random check-in status for demo
//     };
//   });

//   const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   return (
//     <Card className="bg-card border-border">
//       <CardHeader className="pb-3">
//         <CardTitle className="flex items-center gap-2 text-lg">
//           <Calendar className="h-5 w-5 text-primary" />
//           Check-in Calendar
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         {/* Week day headers */}
//         <div className="grid grid-cols-7 gap-1 mb-2">
//           {weekDays.map((day) => (
//             <div key={day} className="text-center text-xs text-muted-foreground py-1">
//               {day}
//             </div>
//           ))}
//         </div>

//         {/* Calendar grid */}
//         <div className="grid grid-cols-7 gap-1">
//           {days.map((day, index) => {
//             const isToday = day.date.toDateString() === today.toDateString();
//             return (
//               <div
//                 key={index}
//                 className={`
//                   aspect-square rounded-md flex items-center justify-center text-xs
//                   ${day.checked ? "bg-primary text-primary-foreground" : "bg-secondary/50"}
//                   ${isToday ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
//                 `}
//               >
//                 {day.date.getDate()}
//               </div>
//             );
//           })}
//         </div>

//         <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded bg-primary" />
//             <span>Checked in</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded bg-secondary/50" />
//             <span>Missed</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

type DayItem = {
  date: Date;
  checked: boolean;
};

export function StreakCalendar() {
  const [today, setToday] = useState<Date | null>(null);
  const [days, setDays] = useState<DayItem[]>([]);

  useEffect(() => {
    const now = new Date();
    setToday(now);

    const generatedDays = Array.from({ length: 35 }, (_, i) => {
      const date = new Date(now);
      date.setDate(date.getDate() - (34 - i));
      return {
        date,
        checked: Math.random() > 0.3, // 仅在客户端生成
      };
    });

    setDays(generatedDays);
  }, []);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // ⛔ 在客户端数据准备好之前，不渲染任何内容
  if (!today) return null;

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calendar className="h-5 w-5 text-primary" />
          Check-in Calendar
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Week day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-xs text-muted-foreground py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const isToday =
              day.date.toDateString() === today.toDateString();

            return (
              <div
                key={index}
                className={`
                  aspect-square rounded-md flex items-center justify-center text-xs
                  ${day.checked ? "bg-primary text-primary-foreground" : "bg-secondary/50"}
                  ${isToday ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
                `}
              >
                {day.date.getDate()}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-primary" />
            <span>Checked in</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-secondary/50" />
            <span>Missed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}