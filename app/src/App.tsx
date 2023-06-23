import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from './redux/actions';
import Card from './components/card';

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
    <div className='w-screen bg-gray-800'>
     <div className='flex justify-center items-center'>
      <h1 className='text-gray-200 font-bold text-3xl py-8'>Rick and Morty Characters</h1>
      </div>
      <div className='bg-gray-800 grid lg:grid-cols-5 lg:gap-3 md:grid-cols-3 md:gap-8 sm:grid-cols-1 sm:my-8'>      
        {episodes.map((episode: any) => {
         const{image, name, status, species, type, gender} = episode
         console.log(episode)

          return (
            <Card image={image} name={name} status={status} species={species} gender={gender}/>
          )
})}
      
      </div>
    </div>
  );
}

export default App;
