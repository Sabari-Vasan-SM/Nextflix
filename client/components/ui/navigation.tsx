import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Bell, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "TV Shows", path: "/tv-shows" },
    { name: "Movies", path: "/movies" },
    { name: "New & Popular", path: "/new-popular" },
    { name: "My List", path: "/my-list" },
    { name: "Browse by Languages", path: "/browse-languages" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-netflix-dark"
          : "bg-gradient-to-b from-black/70 to-transparent",
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Left section */}
        <div className="flex items-center space-x-8">
          {/* Netflix Logo */}
          <Link to="/" className="text-netflix-red text-2xl font-bold">
            NETFLIX
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-gray-300",
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-400",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Browse dropdown for mobile */}
          <div className="md:hidden">
            <button className="flex items-center text-white text-sm">
              Browse <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search className="h-5 w-5" />
          </button>

          {/* Kids link - Hidden on mobile */}
          <Link
            to="/kids"
            className="hidden md:block text-sm text-white hover:text-gray-300 transition-colors"
          >
            Kids
          </Link>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <Bell className="h-5 w-5" />
          </button>

          {/* Profile menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  showProfileMenu ? "rotate-180" : "",
                )}
              />
            </button>

            {/* Profile dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 border border-gray-700 rounded-sm py-2 animate-fadeIn">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Manage Profiles
                </Link>
                <Link
                  to="/account"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Account
                </Link>
                <Link
                  to="/help"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Help Center
                </Link>
                <hr className="border-gray-700 my-2" />
                <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors">
                  Sign out of Netflix
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
