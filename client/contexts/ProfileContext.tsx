import React, { createContext, useContext, useState, ReactNode } from "react";

interface Profile {
  id: string;
  name: string;
  avatar: string;
  isKid: boolean;
}

interface ProfileContextType {
  selectedProfile: Profile | null;
  setSelectedProfile: (profile: Profile | null) => void;
  profiles: Profile[];
  isProfileSelected: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const profiles: Profile[] = [
    { id: "1", name: "John", avatar: "🧑", isKid: false },
    { id: "2", name: "Sarah", avatar: "👩", isKid: false },
    { id: "3", name: "Kids", avatar: "👶", isKid: true },
  ];

  const isProfileSelected = selectedProfile !== null;

  return (
    <ProfileContext.Provider
      value={{
        selectedProfile,
        setSelectedProfile,
        profiles,
        isProfileSelected,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
