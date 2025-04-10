
import React from "react";
import { SidebarNav } from "./SidebarNav";
import { TrendingSection } from "./TrendingSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
  showLoginButton?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showLoginButton = false 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex">
      <SidebarNav />
      <main className="flex-1 border-x border-border max-w-2xl">
        {showLoginButton && (
          <div className="p-4 flex justify-end">
            <Button asChild size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
          </div>
        )}
        {children}
      </main>
      {!isMobile && <TrendingSection />}
    </div>
  );
};
