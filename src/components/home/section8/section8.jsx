import "./section8.css";
import { useNavigate } from "react-router-dom";
import TvGirl from "./img/tvgirl.png";

export default function Section8() {
  const navigate = useNavigate();

  return (
    <section className="section8">

      <h2 className="section8-title">Прайс</h2>

      <div className="price-list">

        <div className="price-head">
          <span>Наименование продукции</span>
          <span>Цена</span>
        </div>

        <div className="price-item">
          <span>Pico 4 Ultra</span>
          <span>9 400 ₽</span>
        </div>

        <div className="price-item">
          <span>Pico 4 Ultra</span>
          <span>9 400 ₽</span>
        </div>

        <div className="price-item">
          <span>Pico 4 Ultra</span>
          <span>9 400 ₽</span>
        </div>

        <div className="price-item">
          <span>Pico 4 Ultra</span>
          <span>9 400 ₽</span>
        </div>

        <div className="price-item">
          <span>Pico 4 Ultra</span>
          <span>9 400 ₽</span>
        </div>

        <div className="price-item">
          <span>Pico 4 Ultra</span>
          <span>9 400 ₽</span>
        </div>

      </div>

      <div className="price-action">
        <p>Актуальную стоимость уточняйте по заявке</p>

        <button onClick={() => navigate("/opt")}>
          Оставить заявку на расчёт
        </button>
      </div>


      <div className="contacts">

        <img
          src={TvGirl}
          alt=""
          className="contacts-bg"
        />

        <div className="contacts-overlay"></div>

        <div className="contacts-box">

          <h2>Контакты</h2>

          <div className="contacts-columns">

            <div>
              <p className="contact-title">Телефон</p>
              <p className="contact-value">+7 912 608-44-94</p>

              <p className="contact-title">Telegram</p>
              <p className="contact-value">@Postvr</p>
            </div>

            <div>
              <p className="contact-title">Почта</p>
              <p className="contact-value">info@npp-law.ru</p>

              <p className="contact-title">Рабочее время</p>
              <p className="contact-value">9:00–21:00</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}