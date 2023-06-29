import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { characterDataDetail } from "../../../redux/reducers";
import Loading from "../../loading-page/Loading";


const CardDetails = () => {
  const { id } : any = useParams();

  console.log(typeof id)
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
  <div className="flex flex-col justify-center items-center my-auto">

    <div className="w-full flex flex-col justify-center pt-4 bg-teal-900">

        <img className="m-auto max-w-20 z-10 border-white border-4" src = {image} alt = {name} />
        <h1 className="text-center text-5xl p-3 text-white" >{name}</h1>

    </div>

<div className="w-full p-8 border-solid border-4 border-teal-900">
    {(() => {
      if (status === "Dead") {
        return <div className="badge bg-red-500 rounded-md text-white text-xl text-center py-1">{status}</div>;
      } else if (status === "Alive") {
        return <div className="badge bg-green-500 rounded-md text-white text-xl text-center py-1">{status}</div>;
      } else {
        return <div className="badge bg-gray-500 rounded-md text-white text-xl text-center py-1">{status}</div>;
      }
    })()}
    <div className="flex flex-col text-center">

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










