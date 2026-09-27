import { useState } from "react";
import "./section6.css";

export default function Section6() {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      name: "Илья",
      text: `Эти ребята — профессионалы
с большой буквы. 5+ лет в деле, куча
довольных клиентов по всей стране
(фото есть — гляньте в «Галерею»).
Понравилось, что менеджеры —
бывшие VR-клубники, знают
все тонкости. 100% лучшие цены
Берут старую технику в trade-in
Работают честно, без воды. Нужно
крутое VR-оснащение? Только сюда!`,
    },
    {
      name: "Илья",
      text: `Эти ребята — профессионалы
с большой буквы. 5+ лет в деле, куча
довольных клиентов по всей стране
(фото есть — гляньте в «Галерею»).
Понравилось, что менеджеры —
бывшие VR-клубники, знают
все тонкости. 100% лучшие цены
Берут старую технику в trade-in
Работают честно, без воды. Нужно
крутое VR-оснащение? Только сюда!`,
    },
    {
      name: "Илья",
      text: `Эти ребята — профессионалы
с большой буквы. 5+ лет в деле, куча
довольных клиентов по всей стране
(фото есть — гляньте в «Галерею»).
Понравилось, что менеджеры —
бывшие VR-клубники, знают
все тонкости. 100% лучшие цены
Берут старую технику в trade-in
Работают честно, без воды. Нужно
крутое VR-оснащение? Только сюда!`,
    },
  ];

  const nextReview = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews">
      <div className="reviews__container">

        <h2 className="reviews__title">
          Отзывы
        </h2>

        <div className="reviews__cards">
          {reviews.map((review, index) => (
            <article
              className={`review-card ${
                index === active ? "review-card--active" : ""
              }`}
              key={index}
            >
              <h3 className="review-card__name">
                {review.name}
              </h3>

              <div className="review-card__stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="review-card__text">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        <div className="reviews__controls">
          <button
            className="reviews__arrow"
            type="button"
            onClick={prevReview}
            aria-label="Предыдущий отзыв"
          >
            ←
          </button>

          <button
            className="reviews__arrow"
            type="button"
            onClick={nextReview}
            aria-label="Следующий отзыв"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}