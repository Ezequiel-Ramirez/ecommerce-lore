//Imports

import "./Item.css";

import ItemHeart from "../itemHeart/ItemHeart";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import ComponentWhatsapp from './../utils/ComponentWhatsapp';

import {IoLogoWhatsapp} from 'react-icons/io5';

//Logic

export const Item = (props) => {
  const { title, price, priceBefore, img, id } = props.data;

  return (
    <div className="col-lg-4 col-md-6 mt-3">
      <Card className="Card">
        <Card.Title className="CardTitle">{title}</Card.Title>
        <Link to={`/product/${id}`} className="Link">
          <Card.Img className="Image" src={img} />
        </Link>
        <Card.Body>
          <div className="PriceHeart">
            <Card.Text className="CardPriceBefore">
              Antes: {priceBefore}{" "}
            </Card.Text>
            <IoLogoWhatsapp color="green" size={24} onClick={() => ComponentWhatsapp(props.data)} style={{cursor: 'pointer'}}/>
            <ItemHeart item={props.data} />
          </div>
          <Card.Text className="CardPrice">${price.toFixed(2)} </Card.Text>
          <Card.Text className="CardDesc"> </Card.Text>
          <Link to={`/product/${id}`} className="Link">
            <Button variant="dark">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

//Exports
export default Item;
