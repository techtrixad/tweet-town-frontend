
import React from "react";
import { MessageSquare, Repeat2, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TweetCardProps {
  tweet: {
    id: string;
    name: string;
    username: string;
    content: string;
    timestamp: string;
    replies: number;
    retweets: number;
    likes: number;
    avatar?: string;
  };
}

export const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  return (
    <div className="p-4 border-b border-border tweet-hover cursor-pointer">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-bold hover:underline">{tweet.name}</span>
            <span className="text-muted-foreground">@{tweet.username}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground hover:underline">{tweet.timestamp}</span>
          </div>
          
          <p className="mt-1 text-base whitespace-pre-wrap">{tweet.content}</p>
          
          <div className="flex justify-between mt-3 max-w-md">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-twitter-blue hover:bg-twitter-blue/10 rounded-full gap-1 p-2">
              <MessageSquare size={18} />
              <span className="text-xs">{tweet.replies}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 hover:bg-green-500/10 rounded-full gap-1 p-2">
              <Repeat2 size={18} />
              <span className="text-xs">{tweet.retweets}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-full gap-1 p-2">
              <Heart size={18} />
              <span className="text-xs">{tweet.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-twitter-blue hover:bg-twitter-blue/10 rounded-full p-2">
              <Share size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
