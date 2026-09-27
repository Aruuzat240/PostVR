import React, { useState } from "react";
import "./section9.css";

import Mango from "./img/mango.svg";
import Xo2 from "./img/xo2.svg";

export default function Section9() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pico 4 Ultra",
      price: 100,
      image: Mango,
      quantity: 1,
    },
    {
      id: 2,
      name: "Pico 4 Ultra",
      price: 100,
      image: Mango,
      quantity: 1,
    },
    {
      id: 3,
      name: "Pico 4 Ultra",
      price: 100,
      image: Mango,
      quantity: 1,
    },
  ]);

  const changeQuantity = (id, value) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + value),
            }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Заявка отправлена!");
  };

  return (
    <section className="section9">
      <div className="section9-container">

        <div className="section9-left">

          <div className="section9-heading">
            <span>ТОВАР</span>
            <span>ИТОГО</span>
          </div>

          <div className="section9-line"></div>

          <div className="section9-products">
            {products.map((product) => (
              <div className="section9-product" key={product.id}>

                <div className="section9-product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="section9-product-info">

                  <h3>{product.name}</h3>

                  <p>{product.price} ₽</p>

                  <div className="section9-product-bottom">

                    <div className="section9-counter">
                      <button
                        type="button"
                        onClick={() => changeQuantity(product.id, -1)}
                      >
                        -
                      </button>

                      <span>{product.quantity}</span>

                      <button
                        type="button"
                        onClick={() => changeQuantity(product.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="section9-remove"
                      onClick={() => removeProduct(product.id)}
                    >
                      Удалить товар
                    </button>

                  </div>
                </div>

                <div className="section9-product-total">
                  {product.price * product.quantity} ₽
                </div>

              </div>
            ))}
          </div>
        </div>

        <form className="section9-form" onSubmit={handleSubmit}>

          <h2>СУММА ЗАКАЗА</h2>

          <div className="section9-form-line"></div>

          <div className="section9-subtotal">
            <span>Подытог</span>
            <span>{total} ₽</span>
          </div>

          <div className="section9-form-line"></div>

          <div className="section9-total">
            <strong>ИТОГО</strong>
            <strong>{total} ₽</strong>
          </div>

          <div className="section9-inputs">

            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="+7 999 999-99-99"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              name="comment"
              placeholder="Комментарий"
            />

          </div>

          <button className="section9-submit" type="submit">
            Отправить заявку
          </button>

        </form>

      </div>
    </section>
  );
}