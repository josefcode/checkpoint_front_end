import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import {  useAppDispatch, useAppSelector, } from "../../../redux/hooks";
import { characterDataDetail } from "../../../redux/reducers";
import Loading from "../../loading-page/Loading";
import { useNavigate } from 'react-router-dom';


const CardDetails = () => {
  const { id } : any = useParams();

  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1);
  };


  const dispatch = useAppDispatch();
  const {episodes, loading} = useAppSelector((state: any) => state.characters);
  const { name, location, origin, gender, image, status, species } = episodes;

  useEffect(() => {
    dispatch(characterDataDetail(id))
  }, [dispatch, id]);

  if(loading){
    return (
      <Loading />
    )
  }

  return (
  <div className="flex flex-col justify-center items-center my-0 my-auto">

    <div className="w-full flex flex-col justify-center pt-20 bg-teal-900">

        <img className="m-auto max-w-20 z-10 border-white border-4" src = {image} alt = {name} />
        <h1 className="text-center text-5xl p-3 text-white" >{name}</h1>

    </div>
   
   
<div className="w-full m-20 p-8 border-solid border-4 border-gray-600">

    {(() => {
      if (status === "Dead") {
        return <div className="badge bg-red-500 text-white text-base w-full text-center">{status}</div>;
      } else if (status === "Alive") {
        return <div className="badge bg-green-500 text-white text-base w-full text-center">{status}</div>;
      } else {
        return <div className="badge bg-gray-500 text-white text-base w-full text-center">{status}</div>;
      }
    })()}
    <div className="flex flex-col text-center">

    <div>
    <button className='w-12 h-8 rounded-sm m-5 text-center bg-black text-pink-200 font-bold tracking-wide' onClick = {goBack}> back</button>
    </div>    
    
    <span className="text-2xl">Gender : {gender} </span>

        <span className="text-2xl">Location:  {location?.name} </span>

        <span className="text-2xl">Origin:  {origin?.name}</span>

        <span className="text-2xl">Species: {species}</span>

    </div>
    
    </div>

</div>
  );
};

export default CardDetails;










