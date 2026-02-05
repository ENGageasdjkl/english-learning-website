"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Search, Filter, Download, Eye } from "lucide-react";

const sampleRecords = [
  {
    id: 101,
    user: "John Doe",
    type: "Check-in",
    status: "completed",
    detail: "7-day streak maintained",
    date: "2026-01-10",
  },
  {
    id: 102,
    user: "Jane Smith",
    type: "Vocabulary",
    status: "completed",
    detail: "Completed CET-4 list (40 words)",
    date: "2026-01-10",
  },
  {
    id: 103,
    user: "Mike Johnson",
    type: "Reading",
    status: "in-review",
    detail: "Submitted reading reflection",
    date: "2026-01-09",
  },
  {
    id: 104,
    user: "Sarah Wilson",
    type: "Feedback",
    status: "pending",
    detail: "Requested pronunciation guidance",
    date: "2026-01-09",
  },
  {
    id: 105,
    user: "Tom Brown",
    type: "Vocabulary",
    status: "completed",
    detail: "Added 12 favorites",
    date: "2026-01-08",
  },
];

const statusColors: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-500",
  pending: "bg-amber-500/10 text-amber-500",
  "in-review": "bg-blue-500/10 text-blue-500",
};

export function RecordsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [records] = useState(sampleRecords);

  const filteredRecords = records.filter(
    (record) =>
      record.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.detail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Learning Records</h1>
          <p className="text-muted-foreground">Monitor check-ins, study logs, and feedback history</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search records..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/30"
        />
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Records Overview ({filteredRecords.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Detail</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="border-b border-border/50 hover:bg-secondary/30">
                    <td className="py-3 px-4 font-medium">{record.user}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{record.type}</td>
                    <td className="py-3 px-4 text-sm">{record.detail}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[record.status]}>{record.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{record.date}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
