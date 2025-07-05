import { useState } from "react";
import {
  Play,
  Plus,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NetflixCardProps {
  id: string;
  title: string;
  image: string;
  type?: "movie" | "series";
  rating?: string;
  year?: string;
  duration?: string;
  genres?: string[];
  isLarge?: boolean;
  className?: string;
  description?: string;
}

export function NetflixCard({
  id,
  title,
  image,
  type = "movie",
  rating = "TV-MA",
  year = "2024",
  duration = "2h 15m",
  genres = ["Action", "Drama"],
  isLarge = false,
  className,
  description = "An engaging story that will keep you on the edge of your seat.",
}: NetflixCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInList, setIsInList] = useState(false);
  const [userRating, setUserRating] = useState<"like" | "dislike" | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real app, this would navigate to the player
    console.log(`Playing: ${title}`);
    setTimeout(() => setIsPlaying(false), 2000); // Reset for demo
  };

  const handleAddToList = () => {
    setIsInList(!isInList);
    console.log(`${isInList ? "Removed from" : "Added to"} My List: ${title}`);
  };

  const handleRating = (rating: "like" | "dislike") => {
    setUserRating(userRating === rating ? null : rating);
    console.log(`Rated ${rating}: ${title}`);
  };

  const handleMoreInfo = () => {
    console.log(`Show more info for: ${title}`);
    // In a real app, this would open a modal or navigate to details page
  };

  return (
    <div
      className={cn(
        "group relative cursor-pointer transition-all duration-300 hover:z-50",
        isLarge ? "w-72 md:w-80" : "w-56 md:w-64",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <div
        className={cn(
          "relative overflow-hidden rounded transition-all duration-300",
          "group-hover:scale-110 group-hover:shadow-2xl",
          isLarge ? "h-40 md:h-48" : "h-32 md:h-36",
        )}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Loading/Playing overlay */}
        {isPlaying && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-sm animate-pulse">Loading...</div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          )}
        />

        {/* Play button overlay */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          )}
        >
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 hover:bg-white/30 transition-colors disabled:opacity-50"
          >
            <Play className="h-4 w-4 md:h-6 md:w-6 text-white fill-white" />
          </button>
        </div>

        {/* Type badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 text-xs rounded">
          {type === "series" ? "Series" : "Movie"}
        </div>
      </div>

      {/* Expanded info on hover - Desktop only */}
      {isHovered && (
        <div className="hidden md:block absolute top-full left-0 right-0 bg-nextflix-gray rounded-b shadow-2xl p-4 animate-slideUp border-t border-gray-600">
          {/* Action buttons */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePlay}
                disabled={isPlaying}
                className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Play className="h-4 w-4 fill-current" />
              </button>
              <button
                onClick={handleAddToList}
                className={cn(
                  "border-2 rounded-full p-2 transition-colors",
                  isInList
                    ? "border-white bg-white text-black"
                    : "border-gray-500 text-white hover:border-white",
                )}
              >
                {isInList ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => handleRating("like")}
                className={cn(
                  "border-2 rounded-full p-2 transition-colors",
                  userRating === "like"
                    ? "border-white bg-white text-black"
                    : "border-gray-500 text-white hover:border-white",
                )}
              >
                <ThumbsUp className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleRating("dislike")}
                className={cn(
                  "border-2 rounded-full p-2 transition-colors",
                  userRating === "dislike"
                    ? "border-white bg-white text-black"
                    : "border-gray-500 text-white hover:border-white",
                )}
              >
                <ThumbsDown className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleMoreInfo}
              className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition-colors"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Content info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-semibold">
                {Math.floor(Math.random() * 20) + 80}% Match
              </span>
              <span className="border border-gray-500 px-1 text-xs text-gray-300">
                {rating}
              </span>
              <span className="text-gray-300">{duration}</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {genres.map((genre, index) => (
                <span key={index} className="text-gray-300 text-sm">
                  {genre}
                  {index < genres.length - 1 && " •"}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* Title for non-hovered state and mobile */}
      {(!isHovered || window.innerWidth < 768) && (
        <div className="mt-2">
          <h3 className="text-white text-sm font-medium truncate">{title}</h3>
          {/* Mobile action buttons */}
          <div className="md:hidden flex items-center space-x-2 mt-2">
            <button
              onClick={handlePlay}
              className="nextflix-button text-xs px-3 py-1"
            >
              <Play className="h-3 w-3 mr-1 fill-current" />
              Play
            </button>
            <button
              onClick={handleAddToList}
              className={cn(
                "text-xs px-3 py-1 border rounded transition-colors",
                isInList
                  ? "border-white bg-white text-black"
                  : "border-gray-500 text-white",
              )}
            >
              {isInList ? "✓ My List" : "+ My List"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
