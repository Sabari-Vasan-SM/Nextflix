import { Navigation } from "@/components/ui/navigation";
import { HeroBanner } from "@/components/ui/hero-banner";
import { MovieRow } from "@/components/ui/movie-row";

// Mock data - In a real app, this would come from an API
const featuredContent = {
  title: "Stranger Things",
  description:
    "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
  backgroundImage:
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
  rating: "TV-14",
  year: "2024",
  genres: ["Sci-Fi", "Drama", "Horror"],
};

const movieRows = [
  {
    title: "Trending Now",
    movies: [
      {
        id: "1",
        title: "The Crown",
        image:
          "https://images.unsplash.com/photo-1489599162488-d2b7b6c3e6c5?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "6 Seasons",
        genres: ["Drama", "Biography"],
      },
      {
        id: "2",
        title: "Money Heist",
        image:
          "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "5 Seasons",
        genres: ["Crime", "Drama"],
      },
      {
        id: "3",
        title: "Extraction",
        image:
          "https://images.unsplash.com/photo-1518496058303-8c978c0c9a42?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 56m",
        genres: ["Action", "Thriller"],
      },
      {
        id: "4",
        title: "The Witcher",
        image:
          "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "3 Seasons",
        genres: ["Fantasy", "Adventure"],
      },
      {
        id: "5",
        title: "Red Notice",
        image:
          "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "1h 58m",
        genres: ["Action", "Comedy"],
      },
      {
        id: "6",
        title: "Ozark",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "4 Seasons",
        genres: ["Crime", "Drama"],
      },
    ],
    isLarge: true,
  },
  {
    title: "Netflix Originals",
    movies: [
      {
        id: "7",
        title: "House of Cards",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "6 Seasons",
        genres: ["Drama", "Political"],
      },
      {
        id: "8",
        title: "Bird Box",
        image:
          "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "2h 4m",
        genres: ["Horror", "Thriller"],
      },
      {
        id: "9",
        title: "Orange Is the New Black",
        image:
          "https://images.unsplash.com/photo-1485518994577-6cd6324d8c84?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "7 Seasons",
        genres: ["Comedy", "Drama"],
      },
      {
        id: "10",
        title: "The Irishman",
        image:
          "https://images.unsplash.com/photo-1489599162488-d2b7b6c3e6c5?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "3h 29m",
        genres: ["Crime", "Drama"],
      },
      {
        id: "11",
        title: "Black Mirror",
        image:
          "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-MA",
        year: "2023",
        duration: "6 Seasons",
        genres: ["Sci-Fi", "Thriller"],
      },
      {
        id: "12",
        title: "Roma",
        image:
          "https://images.unsplash.com/photo-1518496058303-8c978c0c9a42?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "2h 15m",
        genres: ["Drama"],
      },
    ],
  },
  {
    title: "Action & Adventure",
    movies: [
      {
        id: "13",
        title: "John Wick",
        image:
          "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 41m",
        genres: ["Action", "Thriller"],
      },
      {
        id: "14",
        title: "Mad Max: Fury Road",
        image:
          "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "2h 0m",
        genres: ["Action", "Adventure"],
      },
      {
        id: "15",
        title: "The Dark Knight",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 32m",
        genres: ["Action", "Crime"],
      },
      {
        id: "16",
        title: "Mission: Impossible",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 43m",
        genres: ["Action", "Adventure"],
      },
      {
        id: "17",
        title: "Avengers: Endgame",
        image:
          "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "3h 1m",
        genres: ["Action", "Adventure"],
      },
      {
        id: "18",
        title: "Top Gun: Maverick",
        image:
          "https://images.unsplash.com/photo-1485518994577-6cd6324d8c84?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 11m",
        genres: ["Action", "Drama"],
      },
    ],
  },
  {
    title: "Comedies",
    movies: [
      {
        id: "19",
        title: "The Office",
        image:
          "https://images.unsplash.com/photo-1489599162488-d2b7b6c3e6c5?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-14",
        year: "2023",
        duration: "9 Seasons",
        genres: ["Comedy"],
      },
      {
        id: "20",
        title: "Brooklyn Nine-Nine",
        image:
          "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-14",
        year: "2023",
        duration: "8 Seasons",
        genres: ["Comedy", "Crime"],
      },
      {
        id: "21",
        title: "The Good Place",
        image:
          "https://images.unsplash.com/photo-1518496058303-8c978c0c9a42?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-PG",
        year: "2023",
        duration: "4 Seasons",
        genres: ["Comedy", "Fantasy"],
      },
      {
        id: "22",
        title: "Superbad",
        image:
          "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 53m",
        genres: ["Comedy"],
      },
      {
        id: "23",
        title: "Step Brothers",
        image:
          "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=600&fit=crop",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 38m",
        genres: ["Comedy"],
      },
      {
        id: "24",
        title: "Parks and Recreation",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        type: "series" as const,
        rating: "TV-PG",
        year: "2023",
        duration: "7 Seasons",
        genres: ["Comedy"],
      },
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-netflix-dark">
      <Navigation />

      <main>
        {/* Hero Banner */}
        <HeroBanner {...featuredContent} />

        {/* Movie Rows */}
        <div className="space-y-12 pb-16">
          {movieRows.map((row, index) => (
            <MovieRow
              key={index}
              title={row.title}
              movies={row.movies}
              isLarge={row.isLarge}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
