import { useState } from "react";
import "./section7.css";

export default function Section7() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Что входит в комплект?",
      answer:
        "В комплект входит VR-шлем, контроллеры, необходимые кабели и стандартные аксессуары для работы устройства."
    },
    {
      question: "Как происходит доставка?",
      answer:
        "После оформления заявки менеджер связывается с вами, уточняет адрес и удобный способ доставки."
    },
    {
      question: "Можно ли взять шлем в тест?",
      answer:
        "Да, возможность тестирования оборудования можно уточнить у нашего менеджера."
    },
    {
      question: "Чем отличается Quest 3s от Pico 4 Ultra?",
      answer:
        "Модели отличаются характеристиками, дисплеем, камерами, производительностью и дополнительными возможностями."
    },
    {
      question: "Как оформить трейд-ин?",
      answer:
        "Оставьте заявку и укажите информацию о вашем устройстве. Менеджер оценит оборудование и расскажет об условиях трейд-ин."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">

        <h2 className="faq__title">
          Вопрос-ответ
        </h2>

        <div className="faq__list">
          {questions.map((item, index) => (
            <div
              className={`faq__item ${
                openIndex === index ? "faq__item--open" : ""
              }`}
              key={index}
            >

              <button
                type="button"
                className="faq__question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq__question-text">
                  {item.question}
                </span>

                <span className="faq__arrow">
                  <span></span>
                </span>
              </button>

              <div className="faq__answer-wrapper">
                <div className="faq__answer">
                  {item.answer}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}