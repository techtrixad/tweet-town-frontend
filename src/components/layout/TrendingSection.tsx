
import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const TrendingSection: React.FC = () => {
  const trendingTopics = [
    { topic: "#DBMS", tweets: "12.5K" },
    { topic: "Frontend Development", tweets: "5,234" },
    { topic: "React", tweets: "32.1K" },
    { topic: "Database Design", tweets: "8,921" },
    { topic: "TypeScript", tweets: "15K" },
  ];

  const suggestedUsers = [
    { name: "Database Expert", username: "@dbguru", avatar: "" },
    { name: "React Master", username: "@reactdev", avatar: "" },
    { name: "DBMS Project", username: "@dbmsproject", avatar: "" },
  ];

  return (
    <div className="w-80 p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search" className="pl-10 bg-secondary border-none" />
      </div>
      
      <Card className="p-4 bg-secondary/50">
        <h2 className="font-bold text-xl mb-4">What's happening</h2>
        {trendingTopics.map((item, index) => (
          <div key={index} className="py-3 tweet-hover px-4 -mx-4">
            <p className="text-muted-foreground text-sm">Trending</p>
            <p className="font-bold">{item.topic}</p>
            <p className="text-muted-foreground text-sm">{item.tweets} Tweets</p>
          </div>
        ))}
      </Card>
      
      <Card className="p-4 bg-secondary/50">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        {suggestedUsers.map((user, index) => (
          <div key={index} className="flex items-center gap-3 py-3 tweet-hover px-4 -mx-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="flex-1 min-w-0">
              <p className="font-bold truncate">{user.name}</p>
              <p className="text-muted-foreground text-sm truncate">{user.username}</p>
            </div>
            <Button variant="outline" className="rounded-full text-sm font-bold border-twitter-blue text-twitter-blue hover:bg-twitter-blue/10">
              Follow
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
};

// Add this import at the top but it was cut off to save space
import { Button } from "@/components/ui/button";
