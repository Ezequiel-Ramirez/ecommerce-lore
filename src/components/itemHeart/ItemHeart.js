import "../itemHeart/ItemHeart.css";

import { useEffect, useState } from "react";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const ItemHeart = ({ item }) => {
  const [like, setLike] = useState(true);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const local = localStorage.getItem("local");
      if (local) {
        setLocal(JSON.parse(local));
      } else {
        localStorage.setItem("local", JSON.stringify([]));
      }
    }, 400);
  }, []);


  const handleClick = () => {
    //lee local storage y si no existe lo crea con un array vacio y si existe lo parsea con el id del producto para que no se repita
    const local = localStorage.getItem("local");
    if (local) {
      const localParse = JSON.parse(local);
      if (localParse.includes(item.id)) {
        const newLocal = localParse.filter((id) => id !== item.id);
        setLocal(newLocal);
        localStorage.setItem("local", JSON.stringify(newLocal));
      } else {
        const newLocal = [...localParse, item.id];
        setLocal(newLocal);
        localStorage.setItem("local", JSON.stringify(newLocal));
      }
    }
    if (!local) {
      localStorage.setItem("local", JSON.stringify([item.id]));
    }
  };

  function isLiked(id) {
    if (local.includes(id)) {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    let isFavourite = isLiked(item.id);
    setLike(isFavourite);
  }, [local]);



  return (
    <div className="ItemHeart" onClick={handleClick}>
      {like ? (
        <BsHeart className="Heart" color="red" size={23} />
      ) : (
        <BsHeartFill className="Heart" color="red" size={23} />
      )}
    </div>
  );
};

export default ItemHeart;
