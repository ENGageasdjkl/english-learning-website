"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { UsersManagement } from "@/components/admin/users-management";
import { VocabularyManagement } from "@/components/admin/vocabulary-management";
import { ArticlesManagement } from "@/components/admin/articles-management";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { RecordsManagement } from "@/components/admin/records-management";

type Tab = "dashboard" | "users" | "vocabulary" | "articles" | "records";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard />;
      case "users":
        return <UsersManagement />;
      case "vocabulary":
        return <VocabularyManagement />;
      case "articles":
        return <ArticlesManagement />;
      case "records":
        return <RecordsManagement />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      
      <div className="flex pt-16">
        <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6 ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
