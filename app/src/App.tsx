import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const episodes = useSelector((state: any) => state.episode.episodes);
  const loading = useSelector((state: any) => state.episode.loading);
  const error = useSelector((state: any) => state.episode.error);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 
  return (
    <div>
      <h1>Rick and Morty Episodes</h1>
      <ul>
        {episodes.map((episode: any) => {
         
         console.log(episode)

          return (
          <li key={episode.id}>{episode.name}
           <img src = {episode.image} />
          </li>
          )
})}
      </ul>
    </div>
  );
}

export default App;
