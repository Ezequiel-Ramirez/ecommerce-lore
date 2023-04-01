import "./Brand.css";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="BrandContainer me-5">
      <Link to="/" className="LogoSpecsContainer">
        <img className="logoMenu" src="/iconoLore.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Brand;
