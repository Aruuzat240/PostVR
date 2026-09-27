import "./section.css";
import { useNavigate } from "react-router-dom";

import logo2 from "./img/logo2.svg"
import logo3 from "./img/logo3.svg"
import logo4 from "./img/logo4.svg"

const categories = [
  {
    title: "Шлемы",
    href: "#helmets",
  },
  {
    title: "Комплекты",
    href: "#sets",
  },
  {
    title: "Аксессуары",
    href: "#accessories",
  },
  {
    title: "Подписка на игры",
    href: "#games",
  },
  {
    title: "Trade-in",
    href: "#trade-in",
  },
  {
    title: "Арена VR",
    href: "#vr-arena",
  },
];

const products = [
  {
    image: logo2,
    title: "Pico 4 Ultra",
    description: "Краткое описание",
  },
  {
    image: logo3,
    title: "Quest 3",
    description: "Краткое описание",
  },
  {
    image: logo4,
    title: "Quest 3s",
    description: "Краткое описание",
  },
];

export default function Section() {
  const navigate = useNavigate();

  return (
    <section className="catalog">
      <div className="catalog__container">

        <h2 className="catalog__title">
          Каталог
        </h2>

        <div className="catalog__toolbar">

          <nav className="catalog__categories">
            {categories.map((category, index) => (
              <a
                key={category.title}
                href={category.href}
                className={`catalog__category ${
                  index === 0
                    ? "catalog__category--active"
                    : ""
                }`}
              >
                {category.title}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="catalog__filter"
          >
            <span>
              Фильтр по совместимости
            </span>

            <span className="catalog__filter-arrow">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

        </div>

        <div className="catalog__grid">

          {products.map((product) => (
            <article
              className="catalog-card"
              key={product.title}
            >

              <div className="catalog-card__badge">
                Новинка!
              </div>

              <div className="catalog-card__image">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="catalog-card__content">

                <h3 className="catalog-card__title">
                  {product.title}
                </h3>

                <p className="catalog-card__description">
                  {product.description}
                </p>

                <div className="catalog-card__actions">

                  <button
                    type="button"
                    className="catalog-card__details"
                  >
                    Подробнее
                  </button>

                  <button
                    type="button"
                    className="catalog-card__request"
                    onClick={() => navigate("/otz")}
                  >
                    Добавить в заявку
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}