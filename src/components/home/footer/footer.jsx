import { NavLink } from "react-router-dom";
import "./footer.css";
import Xo from "./img/xo.svg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-menu">

          <h2>PostVR</h2>

          <div className="footer-links">

            <div>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/cotolog">Каталог</NavLink>
              <NavLink to="/subscription">Подписка</NavLink>
            </div>

            <div>
              <NavLink to="/oz">Trade-in</NavLink>
              <NavLink to="/contacts">Контакты</NavLink>
            </div>

          </div>

        </div>


        <div className="footer-studio">

          <img src={Xo} alt="XO Studio" />

          <p>
            Разработано маркетинговым
            <br />
            агентством XO-STUDIO
          </p>

        </div>


        <div className="footer-info">

          <div>
            <h4>Телефон</h4>
            <a href="tel:+79126084494">
              +7 912 608-44-94
            </a>

            <h4>Telegram</h4>
            <a href="#">
              @Postvr
            </a>
          </div>


          <div>
            <h4>Почта</h4>
            <a href="mailto:info@npp-law.ru">
              info@npp-law.ru
            </a>

            <h4>Рабочее время</h4>
            <span>9:00–21:00</span>
          </div>

        </div>

      </div>


      <div className="footer-line"></div>


      <div className="footer-bottom">

        <span>© 2025</span>

        <a href="#">
          Политика конфиденциальности
        </a>

      </div>

    </footer>
  );
}

export default Footer;