import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/card';
import {characterData, loadCharacterPagination } from '../redux/reducers'
import '../App.css'
import Pagination from '../components/pagination/Pagination';
import Loading from '../components/loading-page/Loading';



function Home() {
  const dispatch = useDispatch();

  const {episodes, loading} = useSelector((state: any) => state.characters);

  const [inputValue, setInputValue] = useState('');

const [currentPageUrl, setCurrentPageUrl] = useState(1)

  const handleFilterClick = () => {
  
    setInputValue(inputValue);
    // Add your filtering logic here using the inputValue
  };

  const handleCancelClick = () => {
    setInputValue('');
    // Add any additional cancellation logic here
  };

  useEffect(() => {
    dispatch(characterData({name: inputValue}));

  }, [dispatch, inputValue]);

  useEffect(() => {
    dispatch(loadCharacterPagination(currentPageUrl))
  },[dispatch, currentPageUrl])

  function nextPage() {
    if(currentPageUrl < episodes.info?.pages){
    setCurrentPageUrl((prev: number) => prev + 1)
    }
    }

    function prevPage() {
        setCurrentPageUrl((prev: number) => prev - 1)
    
    }

    function goToPage(num: number) {
      setCurrentPageUrl(num)
    }

  return (
  <div className='bg-gray-800'>
    <div className='w-screen bg-gray-800'>
     <div className='flex justify-center items-center'>
      <h1 className='text-gray-200 font-bold text-3xl py-8'>Rick and Morty Characters</h1>
      </div>

      <div className="flex justify-center mt-4">
      <input 
      className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
      type="text" 
      placeholder="Filter"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
     
      <button className="px-4 py-2 text-white bg-blue-500 rounded-r-none hover:bg-blue-600 focus:outline-none focus:bg-blue-600" 
      type="button"
      onClick={handleFilterClick}
      >
        Filter
      </button>
      
      
      <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-r-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
       type="button"
       onClick={handleCancelClick}
       >
        Cancel
      </button>
    </div>

      {
        loading && <Loading />
      }
      <div className='bg-gray-800 grid lg:grid-cols-5 lg:gap-3 md:grid-cols-3 md:gap-8 sm:grid-cols-1 sm:my-8'>      
        {episodes.results?.map((episode: any) => {
          const{id, image, name, status, species, type, gender} = episode
      
          return (
            <Card id = {id} image={image} name={name} status={status} species={species} gender={gender}/>
          )
      })}
      
      </div>
    </div>
     <Pagination 
     nextPage={currentPageUrl < episodes.info?.pages ? nextPage : null}
     prevPage={episodes.info?.prev ? prevPage : null }
     goToPage={goToPage}
     pages={episodes.info?.pages}
     currentPage = {currentPageUrl}
    />
</div>
 
  );
}

export default Home;