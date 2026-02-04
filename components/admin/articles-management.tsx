"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  MoreHorizontal 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sampleArticles = [
  { id: 1, title: "The Future of Artificial Intelligence", category: "Technology", difficulty: "Intermediate", reads: 1245, status: "published", date: "2026-01-15" },
  { id: 2, title: "Climate Change: A Global Challenge", category: "Science", difficulty: "Advanced", reads: 892, status: "published", date: "2026-01-10" },
  { id: 3, title: "The Art of Effective Communication", category: "Business", difficulty: "Beginner", reads: 2103, status: "published", date: "2026-01-08" },
  { id: 4, title: "Exploring the Wonders of Space", category: "Science", difficulty: "Intermediate", reads: 756, status: "draft", date: "2026-01-05" },
  { id: 5, title: "Healthy Eating Habits", category: "Health", difficulty: "Beginner", reads: 0, status: "draft", date: "2026-01-04" },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-500",
  Intermediate: "bg-cyan-500/10 text-cyan-500",
  Advanced: "bg-rose-500/10 text-rose-500",
};

const statusColors: Record<string, string> = {
  published: "bg-emerald-500/10 text-emerald-500",
  draft: "bg-gray-500/10 text-gray-500",
};

export function ArticlesManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = sampleArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Articles Management</h1>
          <p className="text-muted-foreground">Manage reading articles and content</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Article
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/30"
        />
      </div>

      {/* Articles Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            All Articles ({filteredArticles.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Title</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Difficulty</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Reads</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.map((article) => (
                  <tr key={article.id} className="border-b border-border/50 hover:bg-secondary/30">
                    <td className="py-3 px-4">
                      <span className="font-medium line-clamp-1">{article.title}</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="secondary">{article.category}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={difficultyColors[article.difficulty]}>
                        {article.difficulty}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[article.status]}>
                        {article.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">{article.reads.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{article.date}</td>
                    <td className="py-3 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">214</div>
            <p className="text-sm text-muted-foreground">Total Articles</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">189</div>
            <p className="text-sm text-muted-foreground">Published</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">25</div>
            <p className="text-sm text-muted-foreground">Drafts</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary">45.2K</div>
            <p className="text-sm text-muted-foreground">Total Reads</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
