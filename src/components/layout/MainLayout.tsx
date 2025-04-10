
import React from "react";
import { SidebarNav } from "./SidebarNav";
import { TrendingSection } from "./TrendingSection";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex">
      <SidebarNav />
      <main className="flex-1 border-x border-border max-w-2xl">
        {children}
      </main>
      {!isMobile && <TrendingSection />}
    </div>
  );
};
