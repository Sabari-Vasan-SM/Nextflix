import { useRef } from "react";
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = isLarge ? 640 : 512; // About 2-3 cards
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

  return (
    <div className={cn("relative group", className)}>
      {/* Row title */}
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 px-4 md:px-16">
        {title}
      </h2>

      {/* Movies container */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className={cn(
            "absolute left-0 top-0 bottom-0 z-40 w-16 bg-black/50 text-white",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "flex items-center justify-center hover:bg-black/70",
          )}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className={cn(
            "absolute right-0 top-0 bottom-0 z-40 w-16 bg-black/50 text-white",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "flex items-center justify-center hover:bg-black/70",
          )}
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 movie-row-gradient-left z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 movie-row-gradient-right z-30 pointer-events-none" />

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide px-4 md:px-16 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none">
              <NetflixCard
                title={movie.title}
                image={movie.image}
                type={movie.type}
                rating={movie.rating}
                year={movie.year}
                duration={movie.duration}
                genres={movie.genres}
                isLarge={isLarge}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
