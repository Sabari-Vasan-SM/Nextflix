🎬 NEXTFLIX - Netflix Clone

A pixel-perfect, fully functional Netflix clone built with React, TypeScript, and TailwindCSS. Features authentic UI/UX, responsive design, and complete user interaction flows.

🚀 Getting Started

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start


📁 Project Structure
client/
├── components/ui/          # Reusable UI components
│   ├── navigation.tsx      # Netflix-style header navigation
│   ├── netflix-card.tsx    # Interactive movie/show cards
│   ├── hero-banner.tsx     # Featured content banner
│   └── movie-row.tsx       # Horizontal scrolling rows
├── contexts/               # React Context providers
│   └── ProfileContext.tsx  # Global profile state management
├── pages/                  # Route components
│   ├── Index.tsx          # Netflix homepage
│   ├── Profile.tsx        # Profile selection page
│   └── Browse.tsx         # Browse/category pages
└── App.tsx                # Main app with routing

server/                     # Express backend (optional)
shared/                     # Shared types and utilities
