import React from 'react'



const Pagination = ({ nextPage, prevPage, goToPage, pages, currentPage }:any) => {
  const  pageButtons = []
  function styleButtons(index: number){
     if(currentPage === index){
       return  <button className="h-7 w-7 mx-1 rounded-lg border text-center bg-blue-500 text-white font-bold" key={index} onClick={() => goToPage(index)}>{index}</button>
     }
     return <button className="h-7 w-7 mx-1 rounded-lg border text-center bg-white font-bold" key={index} onClick={() => goToPage(index)}>{index}</button>
  }
  for (let i = 1; i <= pages; i++) {
            pageButtons.push(styleButtons(i))
}
  return (
    <div className='flex flex-wrap justify-center pb-20 pt-10'>
      {prevPage && (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded h-7" onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded h-7" onClick={nextPage}>Next</button>)}
    </div>
  )
}
export default Pagination