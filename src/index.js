/*Imports*/

//Módulos
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//Estilos
import "./index.css";

//Componentes

/*Context*/
import CartContext from "./context/CartContext";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartListContainer from "./components/cart/CartListContainer";
import Shipping from "./components/main/Shipping";
import Services from "./components/main/Services";
import Contact from "./components/main/Contact";
import Footer from "./components/footer/Footer";
import BuyForm from "./components/form/Form";

//Core
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main brand="LOVE By LORE" specs="Lencería" />}
          />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route
            path="/product/:productId"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartListContainer />} />
          <Route
            path="/products/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/send-order" element={<BuyForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
