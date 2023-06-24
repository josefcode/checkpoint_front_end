import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { characterDataDetail } from "../../../redux/reducers";
import '../../../App.css'


const CardDetails = () => {
  const { id } : any = useParams();
  const dispatch = useDispatch();
  const {episodes, loading} = useSelector((state: any) => state.characters);
  const { name, location, origin, gender, image, status, species } = episodes;

  useEffect(() => {
    dispatch(characterDataDetail(id))
  }, [dispatch]);

  if(loading){
    return <div>loading ....</div>
  }

  return (

<div className="container flex justify-center mb-5   ">
  <div className="flex flex-col gap-3">
    <h1 className="text-center">{name}</h1>

    <img className="w-full" src={image} alt="" />
    {(() => {
      if (status === "Dead") {
        return <div className="badge bg-red-500 text-white text-base">{status}</div>;
      } else if (status === "Alive") {
        return <div className="badge bg-green-500 text-white text-base">{status}</div>;
      } else {
        return <div className="badge bg-gray-500 text-white text-base">{status}</div>;
      }
    })()}
    <div className="content">
      <div className="">
        <span className="font-bold">Gender : </span>
        {gender}
      </div>
      <div className="">
        <span className="font-bold">Location: </span>
        {location?.name}
      </div>
      <div className="">
        <span className="font-bold">Origin: </span>
        {origin?.name}
      </div>
      <div className="">
        <span className="font-bold">Species: </span>
        {species}
      </div>
    </div>
  </div>
</div>
  );
};

export default CardDetails;










