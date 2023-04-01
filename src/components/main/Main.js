import Background from "./Background";

import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import "./Main.css";

const Main = () => {

  function ScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  
  return (
    <main className="Main">
      {ScrollToTop()}
      {loading ? (
        <div className=" SpinnerMain">
          <Spinner />
        </div>
      ) : (
        
        <Background brand="LOVE By LORE" specs="Lencería" />
        
      )}
    </main>
  );
};

export default Main;
