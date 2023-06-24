import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


type Cardprops = {
  id: number,
  image: string;
  name: string;
  status: string;
  species: string;
  
  gender: string;
};

export default function Card({ id, image, name, status, species, gender }:Cardprops) {
  return (
    <>
    <Link to = {`detail/${id}`}>
      <div className="bg-slate-900 text-slate-200 shadow-md flex flex-col space-y-2 justify-around rounded-xl items-center gap-4 hover:scale-105 duration-200">
        <div className='flex items-baseline justify-between gap-4'>
        <h2 className="text-3xl text-center font-semibold pt-4">{name}</h2>
        {/* <StarIcon className="h-8 text-slate-600" /> */}
        <StarIcon className="h-8 text-yellow-400" />
        </div>
        <img src={image} alt={name} />
        <div className='text-xl space-y-4 pb-4'>
        {(() => {
      if (status === "Dead") {
        return <p className=" text-2xl badge bg-red-500 text-white ">{status}</p>;
      } else if (status === "Alive") {
        return <p className="text-2xl badge bg-green-500 text-white">{status}</p>;
      } else {
        return <p className=" text-2xl badge bg-gray-500 text-white">{status}</p>;
      }
    })()}
        <p className='text-2xl'>Species: {species}</p>        
        <p className='text-2xl'>Gender: {gender}</p>  
        </div> 
        </div>
      </Link>
    </>
  );
}
