import { useNavigate } from "react-router-dom";
import "./otz3.css";
import Mango2 from "./img/mango2.svg";

export default function Otz3() {
  const navigate = useNavigate();

  return (
    <main className="otz3-page">
      <section className="otz3-card">
        <button
          className="otz3-close"
          onClick={() => navigate("/")}
          aria-label="Закрыть"
        >
          ×
        </button>

        <div className="otz3-top">
          <div className="otz3-product-image">
            <img src={Mango2} alt="Pico 4 Ultra" />
          </div>

          <div className="otz3-product-info">
            <h1>Pico 4 Ultra</h1>

            <div className="otz3-price">25 000 ₽</div>

            <p className="otz3-stock">6 в наличии</p>

            <div className="otz3-actions">
              <div className="otz3-counter">
                <button type="button">−</button>
                <span>1</span>
                <button type="button">+</button>
              </div>

              <button type="button" className="otz3-add">
                Добавить в заявку
              </button>
            </div>
          </div>
        </div>

        <div className="otz3-description">
          <p>
            Автономный VR шлем представляет собой передовое устройство
            виртуальной реальности с расширенными возможностями для смешанной
            реальности. Обладая улучшенной оптической системой и высокоточными
            датчиками, он обеспечивает превосходное качество изображения и
            комфортное использование, благодаря эргономичному дизайну и
            инновационным функциям.
          </p>

          <p>
            На задней поверхности находится аккумулятор ёмкостью 5300 мАч,
            позволяющий использовать шлем длительное время, не прерываясь
            посреди игры или просмотра видео. Отдельно следует отметить
            запатентованную оптическую линзу Pancake, благодаря которой
            обеспечивается более широкий угол обзора (105°), а картинка поражает
            своей чёткостью и насыщенностью.
          </p>
        </div>
      </section>
    </main>
  );
}
