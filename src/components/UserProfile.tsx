import React from "react";

interface UserInfo {
  photoURL?: string;
  displayName?: string;
}

const UserProfile = ({ user }) => {
  const { displayName, photoURL }: UserInfo = user || {};

  return (
    <div className="flex items-center shrink-0">
      {user && (
        <img
          className="w-8 h-8 rounded-full mr-2"
          src={photoURL}
          alt={displayName}
        />
      )}
      <span className="hidden md:block">{displayName} 님</span>
    </div>
  );
};

export default UserProfile;
