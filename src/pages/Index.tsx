
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { TweetComposer } from "@/components/tweet/TweetComposer";
import { TweetFeed } from "@/components/tweet/TweetFeed";

const Index = () => {
  return (
    <MainLayout>
      <div className="border-b border-border p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      <TweetComposer />
      <TweetFeed />
    </MainLayout>
  );
};

export default Index;
