import React from "react";
import Russia from "./img/russia.png";
import Logo5 from "./img/Logo5.svg";
import Logo6 from "./img/logo6.svg";
import "./section2.css";
const Section2 = () => {
  return (
    <div>
      <div className="section">
        <img src={Russia} alt="" />
        <img className="nitca" src={Logo5} alt="" />
        <img className="nitca2" src={Logo6} alt="" />
        <div className="card-0">
          <h4>Работаем по всей стране</h4>
        </div>
        <div className="card-1">
          <h4>Индивидуальный подход к каждому клубу</h4>
        </div>
        <div className="card-2">
          <h4>Возможность Трейд-ин</h4>
        </div>
        <div className="card-3">
          <h4>Контроль доставки</h4>
        </div>
        <div className="card-4">
          <h4>Поддержка и консультации</h4>
        </div>
      </div>
    </div>
  );
};

export default Section2;
