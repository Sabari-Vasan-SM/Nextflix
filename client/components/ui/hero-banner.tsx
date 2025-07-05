import { useState, useEffect } from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";

interface HeroBannerProps {
  title: string;
  description: string;
  backgroundImage: string;
  videoUrl?: string;
  rating?: string;
  year?: string;
  genres?: string[];
}

export function HeroBanner({
  title,
  description,
  backgroundImage,
  videoUrl,
  rating = "TV-MA",
  year = "2024",
  genres = ["Action", "Drama", "Thriller"],
}: HeroBannerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Simulate video loading after component mounts
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {showVideo && videoUrl ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Gradients */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-32 netflix-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-16">
        <div className="max-w-lg space-y-4 fade-in-up">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Meta info */}
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-green-500 font-semibold">98% Match</span>
            <span className="text-white">{year}</span>
            <span className="border border-gray-400 px-2 py-1 text-gray-300 text-xs">
              {rating}
            </span>
            <span className="text-white">3 Seasons</span>
          </div>

          {/* Genres */}
          <div className="flex items-center space-x-2">
            {genres.map((genre, index) => (
              <span key={index} className="text-gray-300">
                {genre}
                {index < genres.length - 1 && " •"}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white text-lg leading-relaxed max-w-md">
            {description}
          </p>

          {/* Action buttons */}
          <div className="flex items-center space-x-4 pt-4">
            <button className="netflix-button flex items-center space-x-2 text-lg px-8 py-3">
              <Play className="h-6 w-6 fill-current" />
              <span>Play</span>
            </button>
            <button className="netflix-button-secondary flex items-center space-x-2 text-lg px-8 py-3">
              <Info className="h-6 w-6" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Volume control */}
      {showVideo && videoUrl && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-32 right-4 md:right-16 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6" />
          ) : (
            <Volume2 className="h-6 w-6" />
          )}
        </button>
      )}

      {/* Age rating badge */}
      <div className="absolute bottom-32 left-4 md:left-16 z-20">
        <div className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 text-sm font-semibold">
          {rating}
        </div>
      </div>
    </div>
  );
}
