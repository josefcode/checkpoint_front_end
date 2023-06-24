import React from 'react';

interface FavoritesPageProps {
  favoriteNames: string[];
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favoriteNames }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Favorite Names</h2>
      {favoriteNames.length === 0 ? (
        <p>No favorite names yet.</p>
      ) : (
        <ul>
          {favoriteNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;