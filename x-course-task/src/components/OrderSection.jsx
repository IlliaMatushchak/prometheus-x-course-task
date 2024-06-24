import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";

function OrderSection({bookID, price, title, amount}) {

  const { cart, setCart } = useCart();

  const [totalCount, setTotalCount] = useState(1);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    cart?.forEach(({ id, count }) => {
      if (id === bookID) setTotalCount(count);
    });
  }, []);

  function validateTotalCount(count) {
    if (count > 0 && count <= amount) {
      setIsValid(() => true);
    } else {
      setIsValid(() => false);
    }
  }

  function changeTotalCount(e) {
    const operator = e.target.innerText;
    const value = +e.target.value;
    e.target.value = value;

    if (operator === "+") {
      setTotalCount((prev) => prev + 1);
      validateTotalCount(totalCount + 1);
    } else if (operator === "-") {
      setTotalCount((prev) => prev - 1);
      validateTotalCount(totalCount - 1);
    } else {
      setTotalCount(value);
      validateTotalCount(value);
    }
  }

  function addToCart() {
    const index = cart.findIndex((el) => {
      return el.id === bookID;
    });
    if (index === -1) {
      setCart([...cart, { id: bookID, count: totalCount, price, title }]);
    } else {
      let cartNew = [...cart];
      cartNew[index] = { id: bookID, count: totalCount, price, title };
      setCart(cartNew);
    }
  }

  return (
    <section className="order-section">
      <div>
        <p className="price-paragr">Price, $</p>
        <p className="price">{price}</p>
      </div>

      <div>
        <label className="count-label" htmlFor="count">
          Count
        </label>
        <button
          className="btn-plus"
          onClick={changeTotalCount}
          data-testid="btnPlus"
        >
          +
        </button>
        <input
          className={isValid ? "count" : "count invalid"}
          data-testid="totalCountInput"
          type="number"
          step="1"
          min="1"
          value={totalCount}
          id="count"
          name="count"
          required
          onInput={changeTotalCount}
        />
        <button
          className="btn-minus"
          onClick={changeTotalCount}
          data-testid="btnMinus"
        >
          -
        </button>
      </div>

      <div>
        <p className="total-price-paragr">Total price</p>
        <p className="total-price" data-testid="totalPrice">
          {(price * totalCount).toFixed(2)}
        </p>
      </div>

      <button className="add-button" disabled={!isValid} onClick={addToCart}>
        Add to cart
      </button>
    </section>
  );
}

export default OrderSection;
