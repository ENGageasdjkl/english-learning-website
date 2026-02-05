"use client";

import { useState } from "react";
import { AssistantHeader } from "@/components/assistant/assistant-header";
import { AssistantSidebar } from "@/components/assistant/assistant-sidebar";
import { MnemonicManagement } from "@/components/assistant/mnemonic-management";
import { OutlineManagement } from "@/components/assistant/outline-management";
import { VocabularyEditing } from "@/components/assistant/vocabulary-editing";

type Tab = "mnemonics" | "outlines" | "vocabulary";

export default function AssistantPage() {
  const [activeTab, setActiveTab] = useState<Tab>("mnemonics");

  const renderContent = () => {
    switch (activeTab) {
      case "mnemonics":
        return <MnemonicManagement />;
      case "outlines":
        return <OutlineManagement />;
      case "vocabulary":
        return <VocabularyEditing />;
      default:
        return <MnemonicManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AssistantHeader />

      <div className="flex pt-16">
        <AssistantSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 p-6 ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
