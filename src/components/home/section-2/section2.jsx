import React from "react";
import "./section2.css";
import Russia from "./img/russia.png";

export default function Section2() {
  return (
    <section className="map-section">
      <div className="map-wrapper">
        <img src={Russia} alt="Russia" className="map-image" />

        <svg
          className="routes"
          viewBox="0 0 1536 768"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="routeGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            fill="none"
            stroke="#df8bb8"
            strokeWidth="2"
            filter="url(#routeGlow)"
            opacity="0.8"
          >
            <path d="M 555 225 C 720 105 1010 95 1220 150" />
            <path d="M 555 225 C 700 175 830 175 900 325" />
            <path d="M 555 225 C 710 390 1000 530 1210 615" />
            <path d="M 555 225 C 520 340 465 400 480 450" />
          </g>

          <g fill="#e99ac5">
            <circle cx="555" cy="225" r="3" />
            <circle cx="1220" cy="150" r="3" />
            <circle cx="900" cy="325" r="3" />
            <circle cx="1210" cy="615" r="3" />
            <circle cx="480" cy="450" r="3" />
          </g>
        </svg>

        <div className="map-info info-country">
          Работаем по всей
          <br />
          стране
        </div>

        <div className="map-info info-trading">
          Возможность
          <br />
          Трейд-ин
        </div>

        <div className="map-info info-individual">
          Индивидуальный подход
          <br />к каждому клубу
        </div>

        <div className="map-info info-delivery">Контроль доставки</div>

        <div className="map-info info-support">
          Поддержка
          <br />и консультации
        </div>
      </div>
    </section>
  );
}
