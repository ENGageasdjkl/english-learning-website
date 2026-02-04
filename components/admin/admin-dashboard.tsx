import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileText, TrendingUp, CalendarCheck, Clock } from "lucide-react";

const stats = [
  { label: "Total Users", value: "10,248", change: "+12%", icon: Users },
  { label: "Total Words", value: "5,100", change: "+8%", icon: BookOpen },
  { label: "Total Articles", value: "214", change: "+5%", icon: FileText },
  { label: "Daily Active", value: "1,856", change: "+18%", icon: TrendingUp },
];

const recentActivity = [
  { user: "John Doe", action: "Completed vocabulary lesson", time: "2 minutes ago" },
  { user: "Jane Smith", action: "Read 'The Future of AI' article", time: "5 minutes ago" },
  { user: "Mike Johnson", action: "Checked in for the day", time: "8 minutes ago" },
  { user: "Sarah Wilson", action: "Added 15 words to favorites", time: "12 minutes ago" },
  { user: "Tom Brown", action: "Completed reading assessment", time: "15 minutes ago" },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of platform statistics and activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-emerald-500">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarCheck className="h-5 w-5 text-primary" />
              Today's Check-ins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">847</div>
            <p className="text-sm text-muted-foreground mt-1">Users checked in today</p>
            <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-primary rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">45% of daily active users</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Words Learned Today</span>
                <span className="font-semibold">12,458</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Articles Read Today</span>
                <span className="font-semibold">892</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Avg. Session Duration</span>
                <span className="font-semibold">24 min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
