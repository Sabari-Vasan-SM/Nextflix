import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "@/contexts/ProfileContext";
import { ProfileGuard } from "@/components/ProfileGuard";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProfileProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Profile selection route - accessible without profile selection */}
            <Route path="/profiles" element={<Profile />} />

            {/* Protected routes that require profile selection */}
            <Route
              path="/"
              element={
                <ProfileGuard>
                  <Index />
                </ProfileGuard>
              }
            />
            <Route
              path="/browse"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />
            <Route
              path="/tv-shows"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />
            <Route
              path="/movies"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />
            <Route
              path="/new-popular"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />
            <Route
              path="/my-list"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />
            <Route
              path="/browse-languages"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />
            <Route
              path="/kids"
              element={
                <ProfileGuard>
                  <Browse />
                </ProfileGuard>
              }
            />

            {/* Legacy profile routes redirect to new profile route */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/help" element={<Profile />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
