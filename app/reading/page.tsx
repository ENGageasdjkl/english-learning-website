"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ArticleCard } from "@/components/reading/article-card";
import { ArticleFilters } from "@/components/reading/article-filters";
import { ArticleReader } from "@/components/reading/article-reader";

const sampleArticles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    excerpt: "Artificial intelligence is transforming every aspect of our lives, from healthcare to transportation. This article explores the latest developments and what they mean for our future.",
    content: `Artificial intelligence (AI) has moved from the realm of science fiction into our everyday lives. From the moment we wake up and check our smartphones to the time we go to bed, AI is working behind the scenes to make our lives easier and more efficient.

The healthcare industry is one of the most promising areas for AI application. Machine learning algorithms can now analyze medical images with accuracy that rivals, and sometimes exceeds, that of human doctors. This technology is being used to detect diseases like cancer at earlier stages, potentially saving millions of lives.

Transportation is another sector being revolutionized by AI. Self-driving cars, once a distant dream, are now being tested on public roads around the world. These vehicles use a combination of sensors, cameras, and AI to navigate complex traffic situations.

In education, AI-powered tutoring systems can provide personalized learning experiences for students. These systems adapt to each student's learning style and pace, offering customized exercises and feedback.

However, the rapid advancement of AI also raises important ethical questions. As machines become more capable, we must consider the implications for employment, privacy, and human autonomy. It's crucial that we develop AI responsibly, with careful consideration of its potential impacts on society.

The future of AI is both exciting and uncertain. What is certain is that AI will continue to shape our world in profound ways, and understanding this technology will be essential for everyone.`,
    category: "Technology",
    difficulty: "Intermediate",
    readTime: 8,
    wordCount: 245,
    date: "2026-01-15",
  },
  {
    id: 2,
    title: "Climate Change: A Global Challenge",
    excerpt: "Understanding the science behind climate change and what we can do to address this pressing environmental issue.",
    content: `Climate change is one of the most pressing challenges facing humanity today. The scientific evidence is clear: our planet is warming at an unprecedented rate, and human activities are the primary cause.

The burning of fossil fuels releases carbon dioxide and other greenhouse gases into the atmosphere. These gases trap heat from the sun, causing the Earth's temperature to rise. This phenomenon, known as the greenhouse effect, is natural and necessary for life on Earth. However, human activities have intensified this effect to dangerous levels.

The consequences of climate change are already visible around the world. Glaciers are melting, sea levels are rising, and extreme weather events are becoming more frequent and severe. These changes threaten ecosystems, human communities, and global food security.

Addressing climate change requires action at all levels of society. Governments must implement policies to reduce greenhouse gas emissions and promote renewable energy. Businesses need to adopt sustainable practices and invest in green technologies. Individuals can make a difference by reducing their carbon footprint through choices like using public transportation, eating less meat, and conserving energy.

International cooperation is essential. The Paris Agreement, signed by nearly 200 countries, represents a global commitment to limit warming to well below 2 degrees Celsius above pre-industrial levels. However, meeting this goal will require even more ambitious action.

The transition to a low-carbon economy also presents opportunities. Clean energy industries are growing rapidly, creating new jobs and driving innovation. By embracing this transition, we can build a more sustainable and prosperous future for all.`,
    category: "Science",
    difficulty: "Advanced",
    readTime: 10,
    wordCount: 280,
    date: "2026-01-10",
  },
  {
    id: 3,
    title: "The Art of Effective Communication",
    excerpt: "Master the essential skills for clear and persuasive communication in professional and personal settings.",
    content: `Effective communication is a fundamental skill that can transform your personal and professional life. Whether you're giving a presentation, negotiating a deal, or simply having a conversation with a friend, the ability to express your ideas clearly and persuasively is invaluable.

Good communication starts with listening. Active listening means fully concentrating on what the other person is saying, rather than just waiting for your turn to speak. It involves paying attention to both verbal and non-verbal cues, asking clarifying questions, and providing feedback to show that you understand.

Clarity is another essential element of effective communication. Before you speak or write, take time to organize your thoughts. What is the main point you want to convey? What supporting information is necessary? By structuring your message clearly, you make it easier for your audience to understand and remember.

Non-verbal communication plays a significant role in how your message is received. Your body language, facial expressions, and tone of voice can reinforce or contradict your words. Maintaining eye contact, using open body posture, and speaking with confidence all contribute to effective communication.

In written communication, attention to detail is crucial. Grammar, spelling, and punctuation errors can undermine your credibility and distract from your message. Take time to proofread your writing and consider how it will be perceived by your audience.

Finally, empathy is the foundation of all good communication. Understanding your audience's perspective, needs, and concerns allows you to tailor your message for maximum impact. By communicating with empathy, you build trust and strengthen relationships.`,
    category: "Business",
    difficulty: "Beginner",
    readTime: 6,
    wordCount: 265,
    date: "2026-01-08",
  },
  {
    id: 4,
    title: "Exploring the Wonders of Space",
    excerpt: "Journey through the cosmos and discover the latest findings from space exploration missions.",
    content: `Space exploration has captivated human imagination for centuries. From ancient astronomers mapping the stars to modern missions sending robots to distant planets, our quest to understand the universe continues to yield remarkable discoveries.

The James Webb Space Telescope, launched in 2021, represents a new era in astronomical observation. This powerful instrument can see deeper into space than ever before, capturing images of galaxies formed shortly after the Big Bang. Its observations are helping scientists understand how galaxies evolve and how stars and planets form.

Mars exploration has reached new heights with multiple rovers and orbiters studying the Red Planet. These missions are searching for signs of ancient life and preparing for future human missions. The data they collect is helping scientists understand Mars's geology, climate, and potential for supporting human settlement.

Private companies are playing an increasingly important role in space exploration. Companies like SpaceX and Blue Origin are developing reusable rockets that significantly reduce the cost of accessing space. This commercialization of space is opening new possibilities for research, tourism, and even manufacturing.

The search for extraterrestrial life remains one of the most exciting aspects of space exploration. Scientists are using various methods to detect signs of life, from analyzing the atmospheres of exoplanets to searching for biosignatures on moons in our own solar system.

As we continue to explore space, we not only learn more about the universe but also gain new perspectives on our own planet. The famous "pale blue dot" photograph, showing Earth as a tiny speck in the vastness of space, reminds us of both our cosmic insignificance and the preciousness of our home world.`,
    category: "Science",
    difficulty: "Intermediate",
    readTime: 7,
    wordCount: 270,
    date: "2026-01-05",
  },
];

export default function ReadingPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof sampleArticles[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredArticles = sampleArticles.filter((article) => {
    const categoryMatch = selectedCategory === "all" || article.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "all" || article.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
          <ArticleReader 
            article={selectedArticle} 
            onBack={() => setSelectedArticle(null)} 
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Reading</h1>
          <p className="text-muted-foreground mt-1">Improve your comprehension with curated articles</p>
        </div>

        <ArticleFilters
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          onCategoryChange={setSelectedCategory}
          onDifficultyChange={setSelectedDifficulty}
        />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
              onRead={() => setSelectedArticle(article)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
