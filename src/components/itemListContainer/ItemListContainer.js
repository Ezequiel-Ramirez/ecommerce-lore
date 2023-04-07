import ItemList from "../itemList/ItemList";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { IoShirtOutline } from "react-icons/io5";
import { IoShirtSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { GiHoodie } from "react-icons/gi";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../itemList/ItemList.css";
import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const queryRef = categoryId
        ? query(
          collection(db, "productsList"),
          where("category", "==", categoryId)
        )
        : collection(db, "productsList");

      // hacer la consulta
      const response = await getDocs(queryRef);
      const docsInfo = response.docs.map((doc) => {
        const newDoc = {
          id: doc.id,
          ...doc.data(),
        };
        return newDoc;
      });
      setProducts(docsInfo);
    };
    getData();
  }, [categoryId]);

  const [loading, setLoading] = useState(false);

  function CoolPage() {
    return (
      <div>
        <ScrollToTop smooth />
      </div>
    );
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(products)
  return (
    <section>
      {CoolPage()}
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div>
          <nav className="NavFilter container mx-auto">
            <div className="FilterFlex">
              <div>
                <h6>FILTRAR </h6>
                {categoryId &&
                  <Link to="/products">
                    <p style={{ color: 'red' }}>borrar filtro</p>
                  </Link>
                }
              </div>
              <div>
                <BsArrowRight className="" size={25} />
              </div>
            </div>
            <OverlayTrigger overlay={<Tooltip>Tops</Tooltip>}>
              <span className="d-inline-block">
                <Link to="/products/top">
                  {/*    <IoShirtOutline color="black" size={31} /> */}
                  <span style={{ fontSize: '23px' }}>👚</span>
                </Link>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>Vedetinas</Tooltip>}>
              <span className="d-inline-block">
                <Link to="/products/vedetina">
                  {/* <GiHoodie color="black" size={31} /> */}
                  <span style={{ fontSize: '23px' }}>🩲</span>
                </Link>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>Less</Tooltip>}>
              <span className="d-inline-block">
                <Link to="/products/less">
                  {/* <IoShirtSharp color="black" size={31} /> */}
                  <span style={{ fontSize: '23px' }}>👙</span>
                </Link>
              </span>
            </OverlayTrigger>
          </nav>
          <ItemList products={products} />
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
