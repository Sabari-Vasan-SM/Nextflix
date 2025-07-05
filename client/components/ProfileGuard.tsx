import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useProfile } from "@/contexts/ProfileContext";
import Profile from "@/pages/Profile";

interface ProfileGuardProps {
  children: React.ReactNode;
}

export function ProfileGuard({ children }: ProfileGuardProps) {
  const { isProfileSelected } = useProfile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If no profile is selected and we're not on the profile page, redirect to profile
    if (!isProfileSelected && location.pathname !== "/profiles") {
      navigate("/profiles", { replace: true });
    }
  }, [isProfileSelected, location.pathname, navigate]);

  // If no profile is selected, show the profile selection page
  if (!isProfileSelected) {
    return <Profile />;
  }

  // If profile is selected, show the protected content
  return <>{children}</>;
}
