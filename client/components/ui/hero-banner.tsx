import { useState, useEffect, useRef } from "react";
import { Play, Info, Volume2, VolumeX, Plus, Check } from "lucide-react";

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
  const [isInList, setIsInList] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Show video after component mounts
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-mute video on mobile
    const isMobile = window.innerWidth < 768;
    setIsMuted(true);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    console.log(`Playing: ${title}`);
    // In a real app, this would navigate to the video player
    setTimeout(() => setIsPlaying(false), 2000); // Reset for demo
  };

  const handleMoreInfo = () => {
    console.log(`Show more info for: ${title}`);
    // In a real app, this would show detailed information modal
  };

  const handleAddToList = () => {
    setIsInList(!isInList);
    console.log(`${isInList ? "Removed from" : "Added to"} My List: ${title}`);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {showVideo && videoUrl ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onLoadedData={() => console.log("Video loaded")}
            onError={() => console.log("Video error, falling back to image")}
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-lg lg:max-w-xl space-y-4 fade-in-up">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Meta info */}
          <div className="flex items-center space-x-2 md:space-x-4 text-sm">
            <span className="text-green-500 font-semibold">
              {Math.floor(Math.random() * 20) + 80}% Match
            </span>
            <span className="text-white">{year}</span>
            <span className="border border-gray-400 px-2 py-1 text-gray-300 text-xs">
              {rating}
            </span>
            <span className="text-white hidden md:inline">
              {Math.floor(Math.random() * 5) + 1} Season
              {Math.floor(Math.random() * 5) + 1 > 1 ? "s" : ""}
            </span>
          </div>

          {/* Genres */}
          <div className="flex items-center space-x-2">
            {genres.map((genre, index) => (
              <span key={index} className="text-gray-300 text-sm md:text-base">
                {genre}
                {index < genres.length - 1 && " •"}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white text-base md:text-lg leading-relaxed max-w-md lg:max-w-lg">
            {description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className="netflix-button flex items-center space-x-2 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 disabled:opacity-50"
            >
              <Play className="h-5 w-5 md:h-6 md:w-6 fill-current" />
              <span>{isPlaying ? "Loading..." : "Play"}</span>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={handleMoreInfo}
                className="netflix-button-secondary flex items-center space-x-2 text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
              >
                <Info className="h-5 w-5 md:h-6 md:w-6" />
                <span>More Info</span>
              </button>

              <button
                onClick={handleAddToList}
                className="netflix-button-secondary flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3"
              >
                {isInList ? (
                  <Check className="h-5 w-5 md:h-6 md:w-6" />
                ) : (
                  <Plus className="h-5 w-5 md:h-6 md:w-6" />
                )}
                <span className="hidden sm:inline">
                  {isInList ? "In My List" : "My List"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Volume control - Desktop only */}
      {showVideo && videoUrl && (
        <button
          onClick={toggleMute}
          className="hidden md:block absolute bottom-32 right-4 lg:right-16 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6" />
          ) : (
            <Volume2 className="h-6 w-6" />
          )}
        </button>
      )}

      {/* Age rating badge */}
      <div className="absolute bottom-32 left-4 md:left-8 lg:left-16 z-20">
        <div className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 text-sm font-semibold">
          {rating}
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
