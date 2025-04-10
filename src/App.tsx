
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create placeholder pages for our routes
const ExplorePage = () => <div className="p-4"><h1 className="text-2xl font-bold">Explore Page</h1><p>This page is under construction</p></div>;
const NotificationsPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Notifications</h1><p>This page is under construction</p></div>;
const MessagesPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Messages</h1><p>This page is under construction</p></div>;
const ProfilePage = () => <div className="p-4"><h1 className="text-2xl font-bold">Profile</h1><p>This page is under construction</p></div>;
const MorePage = () => <div className="p-4"><h1 className="text-2xl font-bold">More Options</h1><p>This page is under construction</p></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
