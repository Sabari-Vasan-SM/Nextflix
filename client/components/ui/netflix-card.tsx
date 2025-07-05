import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NetflixCardProps {
  title: string;
  image: string;
  type?: "movie" | "series";
  rating?: string;
  year?: string;
  duration?: string;
  genres?: string[];
  isLarge?: boolean;
  className?: string;
}

export function NetflixCard({
  title,
  image,
  type = "movie",
  rating = "TV-MA",
  year = "2024",
  duration = "2h 15m",
  genres = ["Action", "Drama"],
  isLarge = false,
  className,
}: NetflixCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative cursor-pointer transition-all duration-300 hover:z-50",
        isLarge ? "w-80" : "w-64",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <div
        className={cn(
          "relative overflow-hidden rounded transition-all duration-300",
          "group-hover:scale-125 group-hover:shadow-2xl",
          isLarge ? "h-48" : "h-36",
        )}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

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
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
            <Play className="h-6 w-6 text-white fill-white" />
          </button>
        </div>
      </div>

      {/* Expanded info on hover */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 bg-netflix-gray rounded-b shadow-2xl p-4 animate-slideUp">
          {/* Action buttons */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <button className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors">
                <Play className="h-4 w-4 fill-current" />
              </button>
              <button className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition-colors">
                <Plus className="h-4 w-4" />
              </button>
              <button className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition-colors">
                <ThumbsUp className="h-4 w-4" />
              </button>
            </div>
            <button className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition-colors">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Content info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-semibold">98% Match</span>
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
          </div>
        </div>
      )}

      {/* Title for non-hovered state */}
      {!isHovered && (
        <div className="mt-2">
          <h3 className="text-white text-sm font-medium truncate">{title}</h3>
        </div>
      )}
    </div>
  );
}
