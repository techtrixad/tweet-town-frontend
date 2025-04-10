
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, BarChart, Smile, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const TweetComposer: React.FC = () => {
  const [tweetText, setTweetText] = useState("");
  const { toast } = useToast();
  
  const handleTweet = () => {
    if (!tweetText.trim()) {
      toast({
        title: "Tweet cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Tweet posted!",
      description: "Your tweet was successfully posted.",
    });
    
    setTweetText("");
  };
  
  return (
    <div className="p-4 border-b border-border">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div className="flex-1">
          <Textarea
            placeholder="What's happening?"
            className="border-none resize-none text-lg p-0 focus-visible:ring-0 min-h-20"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 text-twitter-blue">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-twitter-blue/10">
                <Image size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-twitter-blue/10">
                <BarChart size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-twitter-blue/10">
                <Smile size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-twitter-blue/10">
                <Calendar size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-twitter-blue/10">
                <MapPin size={18} />
              </Button>
            </div>
            <Button 
              className="rounded-full bg-twitter-blue hover:bg-twitter-blue/90 transition-colors" 
              disabled={!tweetText.trim()}
              onClick={handleTweet}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
