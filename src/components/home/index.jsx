import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header">
        <div className="container">

          <div className="logo">
            <h5>PostVR</h5>
          </div>

          <nav>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/cotolog">Каталог</NavLink>
            <NavLink to="/subscription">Подписка</NavLink>
            <NavLink to="/oz">Trade-in</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </nav>

          <button 
            onClick={() => navigate("/opz")}
          >
            Оставить заявку
          </button>
           
        </div>
      </div>
    </header>
  );
};

export default Header;