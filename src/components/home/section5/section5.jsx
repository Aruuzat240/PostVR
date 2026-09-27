import { useNavigate } from "react-router-dom";
import "./section5.css";
import Boy from "./img/boy.png";

export default function Section5() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/opz");
  };

  return (
    <section className="feedback">
      <div className="feedback__container">

        {/* Парень на заднем фоне */}
        <img
          className="feedback__boy"
          src={Boy}
          alt=""
        />

        {/* Правая часть с формой */}
        <div className="feedback__content">

          <h2 className="feedback__title">
            ФОРМА ОБРАТНОЙ СВЯЗИ
            <br />
            НАПИШИТЕ НАМ!
          </h2>

          <form
            className="feedback__form"
            onSubmit={handleSubmit}
          >

            <input
              className="feedback__input"
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
            />

            <input
              className="feedback__input"
              type="tel"
              name="phone"
              placeholder="+7 999 999-99-99"
              required
            />

            <input
              className="feedback__input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              className="feedback__input"
              type="text"
              name="comment"
              placeholder="Комментарий"
            />

            <label className="feedback__file">
              <span className="feedback__file-text">
                Добавьте файл загрузив по клику
                <br />
                или перетащив файл в область
              </span>

              <span className="feedback__clip">
                &#128206;
              </span>

              <input
                type="file"
                name="file"
              />
            </label>

            <button
              className="feedback__submit"
              type="submit"
            >
              Отправить заявку
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}