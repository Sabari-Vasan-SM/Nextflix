import { Navigation } from "@/components/ui/navigation";
import { User, Edit } from "lucide-react";

export default function Profile() {
  const profiles = [
    { name: "John", avatar: "🧑", isKid: false },
    { name: "Sarah", avatar: "👩", isKid: false },
    { name: "Kids", avatar: "👶", isKid: true },
  ];

  return (
    <div className="min-h-screen bg-netflix-dark">
      <Navigation />

      <main className="pt-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto py-16">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Who's watching?
          </h1>

          <div className="flex justify-center items-center space-x-8 mb-16">
            {profiles.map((profile, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-32 h-32 bg-netflix-gray rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:ring-4 group-hover:ring-white transition-all">
                  {profile.avatar}
                </div>
                <p className="text-white text-lg group-hover:text-gray-300 transition-colors">
                  {profile.name}
                </p>
              </div>
            ))}

            <div className="text-center group cursor-pointer">
              <div className="w-32 h-32 bg-netflix-gray rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-600 transition-colors">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <p className="text-white text-lg group-hover:text-gray-300 transition-colors">
                Add Profile
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="text-gray-400 hover:text-white transition-colors border border-gray-600 px-6 py-2 rounded">
              <Edit className="h-4 w-4 inline mr-2" />
              Manage Profiles
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
