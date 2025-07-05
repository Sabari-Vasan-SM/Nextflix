import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Bell, ChevronDown, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProfile } from "@/contexts/ProfileContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedProfile, setSelectedProfile, profiles } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-menu]")) {
        setShowProfileMenu(false);
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "TV Shows", path: "/tv-shows" },
    { name: "Movies", path: "/movies" },
    { name: "New & Popular", path: "/new-popular" },
    { name: "My List", path: "/my-list" },
    { name: "Browse by Languages", path: "/browse-languages" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results - placeholder
      console.log("Searching for:", searchQuery);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-netflix-dark"
          : "bg-gradient-to-b from-black/70 to-transparent",
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        {/* Left section */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            data-menu
          >
            {showMobileMenu ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Nextflix Logo */}
          <Link
            to="/"
            className="text-netflix-red text-xl md:text-2xl font-bold hover:text-red-600 transition-colors"
          >
            NEXTFLIX
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Titles, people, genres"
                  className="bg-black/70 border border-white text-white px-4 py-2 text-sm w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-white"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                  }}
                  className="text-white hover:text-gray-300 ml-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Kids link - Hidden on mobile */}
          <Link
            to="/kids"
            className="hidden lg:block text-sm text-white hover:text-gray-300 transition-colors"
          >
            Kids
          </Link>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-netflix-red w-3 h-3 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </button>

          {/* Profile menu */}
          <div className="relative" data-menu>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-1 md:space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-netflix-red rounded flex items-center justify-center">
                {selectedProfile ? (
                  <span className="text-xs md:text-sm">
                    {selectedProfile.avatar}
                  </span>
                ) : (
                  <User className="h-3 w-3 md:h-4 md:w-4" />
                )}
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200 hidden md:block",
                  showProfileMenu ? "rotate-180" : "",
                )}
              />
            </button>

            {/* Profile dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-black/95 border border-gray-700 rounded-sm py-2 animate-fadeIn backdrop-blur-sm">
                {/* Current Profile */}
                {selectedProfile && (
                  <>
                    <div className="px-4 py-2 border-b border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center text-sm">
                          {selectedProfile.avatar}
                        </div>
                        <span className="text-white font-medium">
                          {selectedProfile.name}
                        </span>
                      </div>
                    </div>

                    {/* Other Profiles */}
                    <div className="py-2">
                      <div className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wide">
                        Switch Profile
                      </div>
                      {profiles
                        .filter((p) => p.id !== selectedProfile.id)
                        .map((profile) => (
                          <button
                            key={profile.id}
                            onClick={() => {
                              setSelectedProfile(profile);
                              setShowProfileMenu(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{profile.avatar}</span>
                              <span>{profile.name}</span>
                            </div>
                          </button>
                        ))}
                    </div>
                    <hr className="border-gray-700 my-2" />
                  </>
                )}

                <button
                  onClick={() => {
                    navigate("/profiles");
                    setShowProfileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Manage Profiles
                </button>
                <Link
                  to="/account"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Account
                </Link>
                <Link
                  to="/help"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Help Center
                </Link>
                <hr className="border-gray-700 my-2" />
                <button
                  onClick={() => {
                    setSelectedProfile(null);
                    navigate("/profiles");
                    setShowProfileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Sign out of Nextflix
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-700 animate-slideDown">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block text-base font-medium transition-colors duration-200",
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white",
                )}
                onClick={() => setShowMobileMenu(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/kids"
              className="block text-base text-gray-400 hover:text-white transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              Kids
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
