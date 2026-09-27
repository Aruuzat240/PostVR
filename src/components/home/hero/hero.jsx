import React from "react";
import "./hero.css";
import Man from "./img/image 38.png";
import Shlem from "./img/logo.svg"

const Hero = () => {
  return (
    <section className="hero">

      {}
      <img
        src={Man}
        alt=""
        className="hero-man"
      />

      <div className="hero-overlay"></div>

      {}
      <div className="hero-content">
        <h1>
          VR-оборудование
          <br />
          для вашего клуба
        </h1>

        <p>
          Быстро, надёжно, выгодно
        </p>
      </div>

      {}
      <button className="hero-arrow">
        ➡️
      </button>

      {}
      <div className="hero-cards">

        <div className="hero-card active">
            
          <div className="card-image"> <img className="MANGO6767" src={Shlem} alt="" /></div>

          <div className="card-info">
            
            <h3>Шлемы</h3>
            <p>Pico 4 Ultra, Quest 3, Quest 3S</p>
           
          </div>
        </div>

        <div className="hero-card">
          <div className="card-image"></div>

          <div className="card-info">
            <h3>Комплекты</h3>
            <p>для залов и клубов</p>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-image"></div>

          <div className="card-info">
            <h3>Аксессуары</h3>
            <p>обвесы, аккумуляторы, крепления</p>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-image"></div>

          <div className="card-info">
            <h3>Подписка на игры</h3>
            <p>и помощь с контентом</p>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-image"></div>

          <div className="card-info">
            <h3>Программа трейд-ина</h3>
            <p>и консультации</p>
          </div>
        </div>
     
      </div>

    </section>
  );
};

export default Hero;