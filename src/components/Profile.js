import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  return (
    isAuthenticated && (
      <div className="profile">
        <img className="profile-img" src={user.picture} alt={user.name} />
        <h4>{user.given_name}</h4>
      </div>
    )
  );
};

export default Profile;