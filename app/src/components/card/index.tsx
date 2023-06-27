import { Link } from "react-router-dom";
import './index.css'


type Cardprops = {
  id: number,
  image: string;
  name: string;
};

export default function Card({ id, image, name}:Cardprops) {
  return (
    <>
    <Link to = {`detail/${id}`}>
        <div className="character">
        <img src={image} alt={name}  className="character__thumbnail"/>
        <h2 className="character__name">{name}</h2>
        </div>
      </Link>
    </>
  );
}
