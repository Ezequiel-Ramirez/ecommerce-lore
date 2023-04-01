import { Link } from "react-router-dom";
import "./Background.css";
import corazon from "../assets/img/coraLore-removebg.png";
const Background = (props) => {
  return (
    <section className="Background">
      <div>
        <h1>L<span>
        <img src={corazon} alt="corazon" className="coraHome"/>
        </span>VE By LORE</h1>
        <h2 style={{fontFamily: 'WindSong' }}>{props.specs}</h2>
        <Link to="/products" className="SeeProducts">
          Ver productos
        </Link>
      </div>
    </section>
  );
};

export default Background;
