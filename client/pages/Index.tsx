import { Navigation } from "@/components/ui/navigation";
import { HeroBanner } from "@/components/ui/hero-banner";
import { MovieRow } from "@/components/ui/movie-row";

// Real sample data with actual images from Pexels
const featuredContent = {
  title: "Crimson Shadows",
  description:
    "In a world where darkness threatens to consume everything, one hero must rise to face an ancient evil. A thrilling saga of courage, sacrifice, and the power of hope in the face of overwhelming odds.",
  backgroundImage:
    "https://images.pexels.com/photos/12966795/pexels-photo-12966795.jpeg",
  videoUrl:
    "https://videos.pexels.com/video-files/32832185/13993801_360_640_24fps.mp4",
  rating: "TV-MA",
  year: "2024",
  genres: ["Action", "Drama", "Thriller"],
};

const movieRows = [
  {
    title: "Trending Now",
    movies: [
      {
        id: "1",
        title: "The Dark Cinema",
        image:
          "https://images.pexels.com/photos/7991290/pexels-photo-7991290.jpeg",
        type: "series" as const,
        rating: "TV-MA",
        year: "2024",
        duration: "3 Seasons",
        genres: ["Horror", "Thriller"],
        description:
          "A mysterious tale that unfolds in the depths of an abandoned cinema, where reality and fiction blur together.",
      },
      {
        id: "2",
        title: "Midnight Station",
        image:
          "https://images.pexels.com/photos/15290787/pexels-photo-15290787.jpeg",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "2h 15m",
        genres: ["Mystery", "Drama"],
        description:
          "A lone traveler discovers dark secrets at an isolated gas station during a stormy night.",
      },
      {
        id: "3",
        title: "Love in Shadows",
        image:
          "https://images.pexels.com/photos/6800202/pexels-photo-6800202.jpeg",
        type: "series" as const,
        rating: "TV-14",
        year: "2024",
        duration: "2 Seasons",
        genres: ["Romance", "Drama"],
        description:
          "Two souls find each other in the most unexpected circumstances, defying all odds.",
      },
      {
        id: "4",
        title: "Spider's Web",
        image:
          "https://images.pexels.com/photos/12689070/pexels-photo-12689070.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 8m",
        genres: ["Action", "Adventure"],
        description:
          "A web-slinging hero faces his greatest challenge yet in this action-packed adventure.",
      },
      {
        id: "5",
        title: "Vintage Tales",
        image:
          "https://images.pexels.com/photos/18386910/pexels-photo-18386910.jpeg",
        type: "series" as const,
        rating: "TV-PG",
        year: "2024",
        duration: "4 Seasons",
        genres: ["Drama", "History"],
        description:
          "Stories from the past come alive in this anthology series spanning different eras.",
      },
      {
        id: "6",
        title: "City Lights",
        image:
          "https://images.pexels.com/photos/19265336/pexels-photo-19265336.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "1h 52m",
        genres: ["Romance", "Comedy"],
        description:
          "A charming romantic comedy set against the backdrop of a bustling metropolitan city.",
      },
    ],
    isLarge: true,
  },
  {
    title: "Netflix Originals",
    movies: [
      {
        id: "7",
        title: "Tech Wars",
        image:
          "https://images.pexels.com/photos/32791632/pexels-photo-32791632.jpeg",
        type: "series" as const,
        rating: "TV-MA",
        year: "2024",
        duration: "3 Seasons",
        genres: ["Sci-Fi", "Drama"],
        description:
          "In a futuristic world, technology and humanity clash in an epic battle for control.",
      },
      {
        id: "8",
        title: "The Hero's Journey",
        image:
          "https://images.pexels.com/photos/12966795/pexels-photo-12966795.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 30m",
        genres: ["Action", "Adventure"],
        description:
          "An ordinary person discovers extraordinary powers and must save the world from destruction.",
      },
      {
        id: "9",
        title: "Dark Mysteries",
        image:
          "https://images.pexels.com/photos/7991290/pexels-photo-7991290.jpeg",
        type: "series" as const,
        rating: "TV-MA",
        year: "2024",
        duration: "2 Seasons",
        genres: ["Mystery", "Horror"],
        description:
          "Each episode unveils a new mystery that challenges the boundaries of reality.",
      },
      {
        id: "10",
        title: "Station 47",
        image:
          "https://images.pexels.com/photos/15290787/pexels-photo-15290787.jpeg",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 58m",
        genres: ["Thriller", "Action"],
        description:
          "A high-stakes thriller set in an abandoned facility where nothing is as it seems.",
      },
      {
        id: "11",
        title: "Romantic Encounters",
        image:
          "https://images.pexels.com/photos/6800202/pexels-photo-6800202.jpeg",
        type: "series" as const,
        rating: "TV-14",
        year: "2024",
        duration: "3 Seasons",
        genres: ["Romance", "Comedy"],
        description:
          "Multiple love stories interweave in this heartwarming romantic series.",
      },
      {
        id: "12",
        title: "Web of Destiny",
        image:
          "https://images.pexels.com/photos/12689070/pexels-photo-12689070.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 12m",
        genres: ["Superhero", "Action"],
        description:
          "A web-slinging adventure that will keep you on the edge of your seat from start to finish.",
      },
    ],
  },
  {
    title: "Action & Adventure",
    movies: [
      {
        id: "13",
        title: "Red Strike",
        image:
          "https://images.pexels.com/photos/12966795/pexels-photo-12966795.jpeg",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "2h 5m",
        genres: ["Action", "Thriller"],
        description:
          "An elite operative must complete an impossible mission to save the world.",
      },
      {
        id: "14",
        title: "Shadow Protocol",
        image:
          "https://images.pexels.com/photos/7991290/pexels-photo-7991290.jpeg",
        type: "series" as const,
        rating: "TV-MA",
        year: "2024",
        duration: "2 Seasons",
        genres: ["Action", "Espionage"],
        description:
          "Secret agents navigate a world of deception and high-stakes international intrigue.",
      },
      {
        id: "15",
        title: "Night Station",
        image:
          "https://images.pexels.com/photos/15290787/pexels-photo-15290787.jpeg",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 47m",
        genres: ["Action", "Crime"],
        description:
          "A lone wolf takes on a criminal empire in this pulse-pounding action thriller.",
      },
      {
        id: "16",
        title: "Hero Rising",
        image:
          "https://images.pexels.com/photos/12689070/pexels-photo-12689070.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 18m",
        genres: ["Superhero", "Adventure"],
        description:
          "A new hero emerges to face an ancient threat in this epic superhero adventure.",
      },
      {
        id: "17",
        title: "Tech Warrior",
        image:
          "https://images.pexels.com/photos/32791632/pexels-photo-32791632.jpeg",
        type: "series" as const,
        rating: "TV-14",
        year: "2024",
        duration: "1 Season",
        genres: ["Sci-Fi", "Action"],
        description:
          "In a dystopian future, a resistance fighter uses advanced technology to fight oppression.",
      },
      {
        id: "18",
        title: "Vintage Valor",
        image:
          "https://images.pexels.com/photos/18386910/pexels-photo-18386910.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "2h 1m",
        genres: ["Adventure", "Historical"],
        description:
          "A period adventure that brings classic heroism to the modern screen.",
      },
    ],
  },
  {
    title: "Comedies",
    movies: [
      {
        id: "19",
        title: "City Comedy",
        image:
          "https://images.pexels.com/photos/19265336/pexels-photo-19265336.jpeg",
        type: "series" as const,
        rating: "TV-14",
        year: "2024",
        duration: "3 Seasons",
        genres: ["Comedy", "Romance"],
        description:
          "Hilarious mishaps and romantic entanglements in the big city.",
      },
      {
        id: "20",
        title: "Bookstore Blues",
        image:
          "https://images.pexels.com/photos/18386910/pexels-photo-18386910.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "1h 38m",
        genres: ["Comedy", "Drama"],
        description:
          "A quirky comedy about life, love, and literature in a vintage bookstore.",
      },
      {
        id: "21",
        title: "Love Projection",
        image:
          "https://images.pexels.com/photos/6800202/pexels-photo-6800202.jpeg",
        type: "series" as const,
        rating: "TV-PG",
        year: "2024",
        duration: "2 Seasons",
        genres: ["Romantic Comedy"],
        description:
          "A feel-good romantic comedy series that will warm your heart and make you laugh.",
      },
      {
        id: "22",
        title: "Tech Support",
        image:
          "https://images.pexels.com/photos/32791632/pexels-photo-32791632.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "1h 45m",
        genres: ["Comedy", "Sci-Fi"],
        description:
          "A hilarious look at technology gone wrong and the people trying to fix it.",
      },
      {
        id: "23",
        title: "Hero Academy",
        image:
          "https://images.pexels.com/photos/12689070/pexels-photo-12689070.jpeg",
        type: "series" as const,
        rating: "TV-PG",
        year: "2024",
        duration: "2 Seasons",
        genres: ["Comedy", "Superhero"],
        description:
          "Young heroes-in-training navigate the challenges of superhero school.",
      },
      {
        id: "24",
        title: "Cinema Laughs",
        image:
          "https://images.pexels.com/photos/7991290/pexels-photo-7991290.jpeg",
        type: "movie" as const,
        rating: "PG-13",
        year: "2024",
        duration: "1h 32m",
        genres: ["Comedy"],
        description:
          "A laugh-out-loud comedy that takes you behind the scenes of movie-making mayhem.",
      },
    ],
  },
  {
    title: "Horror & Thriller",
    movies: [
      {
        id: "25",
        title: "Dark Theater",
        image:
          "https://images.pexels.com/photos/7991290/pexels-photo-7991290.jpeg",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "1h 54m",
        genres: ["Horror", "Supernatural"],
        description:
          "An abandoned movie theater holds terrifying secrets that refuse to stay buried.",
      },
      {
        id: "26",
        title: "Midnight Drive",
        image:
          "https://images.pexels.com/photos/15290787/pexels-photo-15290787.jpeg",
        type: "series" as const,
        rating: "TV-MA",
        year: "2024",
        duration: "1 Season",
        genres: ["Horror", "Thriller"],
        description:
          "Late night travelers encounter supernatural horrors on desolate roads.",
      },
      {
        id: "27",
        title: "Shadow Romance",
        image:
          "https://images.pexels.com/photos/6800202/pexels-photo-6800202.jpeg",
        type: "movie" as const,
        rating: "R",
        year: "2024",
        duration: "2h 3m",
        genres: ["Horror", "Romance"],
        description:
          "A twisted love story that blurs the line between passion and obsession.",
      },
      {
        id: "28",
        title: "Web of Fear",
        image:
          "https://images.pexels.com/photos/12689070/pexels-photo-12689070.jpeg",
        type: "series" as const,
        rating: "TV-MA",
        year: "2024",
        duration: "2 Seasons",
        genres: ["Horror", "Psychological"],
        description:
          "Psychological horror that weaves a web of terror around its unsuspecting victims.",
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
        <div className="space-y-8 md:space-y-12 pb-16">
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
