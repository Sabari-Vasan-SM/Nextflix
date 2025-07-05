import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Edit, Plus } from "lucide-react";
import { useProfile } from "@/contexts/ProfileContext";

export default function Profile() {
  const navigate = useNavigate();
  const { profiles, setSelectedProfile, selectedProfile } = useProfile();
  const [isManaging, setIsManaging] = useState(false);

  const handleProfileSelect = (profile: any) => {
    if (!isManaging) {
      setSelectedProfile(profile);
      // Navigate to home page after profile selection
      navigate("/");
    }
  };

  const handleAddProfile = () => {
    console.log("Add new profile");
    // In a real app, this would open a form to create a new profile
  };

  const handleManageProfiles = () => {
    setIsManaging(!isManaging);
    console.log(isManaging ? "Exit manage mode" : "Enter manage mode");
  };

  return (
    <div className="min-h-screen bg-nextflix-dark">
      {/* Simple logo header - no full navigation for profile selection */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-nextflix-dark">
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          <div className="text-nextflix-red text-2xl font-bold">NEXTFLIX</div>
          {selectedProfile && (
            <button
              onClick={() => {
                setSelectedProfile(null);
                setIsManaging(false);
              }}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Switch Profile
            </button>
          )}
        </div>
      </header>

      <main className="pt-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            Who's watching?
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="text-center group cursor-pointer animate-fadeIn"
                onClick={() => handleProfileSelect(profile)}
              >
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 bg-nextflix-gray rounded-lg flex items-center justify-center text-3xl md:text-4xl mb-4 transition-all duration-300 ${
                    isManaging
                      ? "group-hover:bg-red-600"
                      : "group-hover:ring-4 group-hover:ring-white group-hover:scale-105"
                  } ${selectedProfile?.id === profile.id ? "ring-4 ring-nextflix-red" : ""}`}
                >
                  {isManaging && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <Edit className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  )}
                  {profile.avatar}
                </div>
                <p className="text-white text-base md:text-lg group-hover:text-gray-300 transition-colors">
                  {profile.name}
                </p>
                {profile.isKid && <p className="text-gray-400 text-sm">Kids</p>}
              </div>
            ))}

            {!isManaging && (
              <div
                className="text-center group cursor-pointer animate-fadeIn"
                onClick={handleAddProfile}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-nextflix-gray rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-600 transition-all duration-300 group-hover:scale-105">
                  <Plus className="h-12 w-12 md:h-16 md:w-16 text-gray-400" />
                </div>
                <p className="text-white text-base md:text-lg group-hover:text-gray-300 transition-colors">
                  Add Profile
                </p>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={handleManageProfiles}
              className="text-gray-400 hover:text-white transition-colors border border-gray-600 hover:border-white px-6 py-2 rounded text-sm md:text-base"
            >
              <Edit className="h-4 w-4 inline mr-2" />
              {isManaging ? "Done" : "Manage Profiles"}
            </button>
          </div>

          {/* Help text for first-time users */}
          {!selectedProfile && (
            <div className="text-center mt-8 animate-fadeIn">
              <p className="text-gray-400 text-sm">
                Select a profile to start watching
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
