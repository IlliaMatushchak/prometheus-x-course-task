import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import OrderSection from "../components/OrderSection";

describe("Specific Book component testing", () => {

  describe("Order section testing", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const setup = () => {
      const price = 10;

      render(<OrderSection bookID={1} price={price} title={"Test"} amount={42} />);

      const btnPlus = screen.getByTestId("btnPlus");
      const btnMinus = screen.getByTestId("btnMinus");
      const totalCountInput = screen.getByTestId("totalCountInput");
      const totalPrice = screen.getByTestId("totalPrice");

      return {price, btnPlus, btnMinus, totalCountInput, totalPrice };
    };

    test("Total count increasing testing", async () => {
      const { btnPlus, totalCountInput } = setup();

      expect(btnPlus).toBeInTheDocument();
      expect(totalCountInput).toBeInTheDocument();

      const inputValue ="5";
      fireEvent.change(totalCountInput, {target: {value: inputValue}});
      expect(totalCountInput.value).toBe(inputValue);

      //   const previousNumber = +totalCountInput.value;

      await userEvent.click(btnPlus);

      expect(totalCountInput.value).toBe("6");

        // const currentNumber = +totalCountInput.value;

        // expect(currentNumber).toEqual(previousNumber + 1);
    });

    test("Total count decreasing testing", async () => {
      const { btnMinus, totalCountInput } = setup();

      expect(btnMinus).toBeInTheDocument();
      expect(totalCountInput).toBeInTheDocument();

      const inputValue ="5";
      fireEvent.change(totalCountInput, {target: {value: inputValue}});
      expect(totalCountInput.value).toBe(inputValue);

      await userEvent.click(btnMinus);
      expect(totalCountInput.value).toBe("4");    
    });

    test("Changing total price testing", async () => {
      const { price, totalCountInput, totalPrice } = setup();

      expect(totalPrice).toBeInTheDocument();
      expect(totalCountInput).toBeInTheDocument();

      expect(+totalPrice.textContent).toBe(price);

      const inputValue ="5";
      fireEvent.change(totalCountInput, {target: {value: inputValue}});
      expect(+totalPrice.textContent).toBe(price*inputValue);    
    });
  });
});
