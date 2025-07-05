import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NetflixCard } from "./netflix-card";
import { cn } from "@/lib/utils";

interface Movie {
  id: string;
  title: string;
  image: string;
  type?: "movie" | "series";
  rating?: string;
  year?: string;
  duration?: string;
  genres?: string[];
  description?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  isLarge?: boolean;
  className?: string;
}

export function MovieRow({
  title,
  movies,
  isLarge = false,
  className,
}: MovieRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    checkScrollPosition();
    container.addEventListener("scroll", checkScrollPosition);
    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, [movies]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = isLarge ? (isMobile ? 288 : 320) : isMobile ? 224 : 256;
      const gap = 16;
      const scrollAmount = (cardWidth + gap) * (isMobile ? 1 : 2);

      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scroll("right");
    }
    if (isRightSwipe && canScrollLeft) {
      scroll("left");
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Row title */}
      <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 px-4 md:px-8 lg:px-16">
        {title}
      </h2>

      {/* Movies container */}
      <div className="relative">
        {/* Left arrow - Desktop only */}
        {!isMobile && canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-40 w-12 lg:w-16 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-black/70"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
          </button>
        )}

        {/* Right arrow - Desktop only */}
        {!isMobile && canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-40 w-12 lg:w-16 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-black/70"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
          </button>
        )}

        {/* Gradient overlays - Desktop only */}
        {!isMobile && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-16 movie-row-gradient-left z-30 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-16 movie-row-gradient-right z-30 pointer-events-none" />
          </>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-3 md:space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-6 md:pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: isMobile ? "x mandatory" : "none",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="flex-none"
              style={{
                scrollSnapAlign: isMobile ? "start" : "none",
              }}
            >
              <NetflixCard
                id={movie.id}
                title={movie.title}
                image={movie.image}
                type={movie.type}
                rating={movie.rating}
                year={movie.year}
                duration={movie.duration}
                genres={movie.genres}
                description={movie.description}
                isLarge={isLarge}
              />
            </div>
          ))}
        </div>

        {/* Mobile scroll indicators */}
        {isMobile && (
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: Math.ceil(movies.length / 2) }).map(
              (_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-600" />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
