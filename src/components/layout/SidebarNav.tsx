
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home, Search, Bell, Mail, User, MoreHorizontal, Twitter } from "lucide-react";

export const SidebarNav: React.FC = () => {
  const isMobile = useIsMobile();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Explore", path: "/explore" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Mail, label: "Messages", path: "/messages" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: MoreHorizontal, label: "More", path: "/more" },
  ];

  return (
    <div className="sticky top-0 h-screen p-4 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="p-3">
          <Twitter className="h-8 w-8 text-twitter-blue" />
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => 
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <item.icon className="h-6 w-6" />
              {!isMobile && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        
        <Button className="rounded-full bg-twitter-blue hover:bg-twitter-blue/90 transition-colors w-full mt-4">
          {isMobile ? <span>+</span> : <span>Tweet</span>}
        </Button>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center gap-2 p-3 rounded-full hover:bg-secondary transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          {!isMobile && (
            <div className="flex-1">
              <p className="font-bold text-sm">Username</p>
              <p className="text-muted-foreground text-sm">@username</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
