import React, { useState } from 'react';

const UserProfile = ({ name, email, profilePicture }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', width: '300px' }}>
      <img src={profilePicture} alt={`${name}'s Profile`} style={{ width: '100px', borderRadius: '50%' }} />
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={toggleFollow}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserProfile;