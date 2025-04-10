
import React from "react";
import { TweetCard } from "./TweetCard";

export const TweetFeed: React.FC = () => {
  const tweets = [
    {
      id: "1",
      name: "Database Expert",
      username: "dbguru",
      content: "Just finished designing a new schema for our DBMS project. Normalized to 3NF and performance is looking great!",
      timestamp: "2h",
      replies: 5,
      retweets: 12,
      likes: 42,
    },
    {
      id: "2",
      name: "Frontend Dev",
      username: "reactmaster",
      content: "Working on the UI for our database management system. React + TypeScript is such a powerful combination for creating intuitive interfaces.",
      timestamp: "4h",
      replies: 8,
      retweets: 15,
      likes: 67,
    },
    {
      id: "3",
      name: "DBMS Project",
      username: "dbmsproject",
      content: "Our latest update includes improved query performance and a redesigned dashboard. Check out the documentation for more details!",
      timestamp: "5h",
      replies: 3,
      retweets: 24,
      likes: 89,
    },
    {
      id: "4",
      name: "TypeScript Enthusiast",
      username: "tsdev",
      content: "Pro tip: Use strong typing in your database models to catch errors early. TypeScript interfaces that match your schema can save you hours of debugging!",
      timestamp: "6h",
      replies: 12,
      retweets: 34,
      likes: 102,
    },
    {
      id: "5",
      name: "Database Designer",
      username: "schemamaster",
      content: "Reminder: A well-designed database is the foundation of any good application. Take time to plan your tables, relationships, and indexes carefully!",
      timestamp: "1d",
      replies: 7,
      retweets: 19,
      likes: 73,
    }
  ];

  return (
    <div className="animate-fade-in">
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
