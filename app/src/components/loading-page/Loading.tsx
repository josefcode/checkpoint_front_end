import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const Loading = () => {
   return (
    <div className="flex items-center justify-center h-screen">
    <CircularProgress />
    <div>loading...</div>
    </div>
   )
  
}
export default Loading