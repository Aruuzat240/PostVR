import { useState } from "react";
import "./section4.css";

export default function Section4() {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <section className="gallery">
      <div className="gallery__container">

        <h2 className="gallery__title">
          Галерея
        </h2>

        <div className="gallery__grid">


          <div
            className={`gallery__card gallery__card--left ${
              activeCard === 1 ? "gallery__card--active" : ""
            }`}
            onClick={() => handleClick(1)}
          />


          <div
            className={`gallery__card gallery__card--center ${
              activeCard === 2 ? "gallery__card--active" : ""
            }`}
            onClick={() => handleClick(2)}
          />


          <div
            className={`gallery__card gallery__card--right-top ${
              activeCard === 3 ? "gallery__card--active" : ""
            }`}
            onClick={() => handleClick(3)}
          />

   
          <div
            className={`gallery__card gallery__card--right-bottom ${
              activeCard === 4 ? "gallery__card--active" : ""
            }`}
            onClick={() => handleClick(4)}
          />

      
          <div
            className={`gallery__card gallery__card--bottom-left ${
              activeCard === 5 ? "gallery__card--active" : ""
            }`}
            onClick={() => handleClick(5)}
          />

  
          <div
            className={`gallery__card gallery__card--bottom-right ${
              activeCard === 6 ? "gallery__card--active" : ""
            }`}
            onClick={() => handleClick(6)}
          />

        </div>

      </div>
    </section>
  );
}