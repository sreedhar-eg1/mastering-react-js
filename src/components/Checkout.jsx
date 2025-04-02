import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../Store/UserProgressContext";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { useActionState } from "react";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const totalAmount = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  //   without using useStateAction hook
  //   async function handletSubmit(event) {
  //     event.preventDefault();

  //     const formData = new FormData(event.target);
  //     // const fullName = formData.get('name');
  //     // const email = formData.get('email');
  //     // const street = formData.get('street');
  //     // const postalCode = formData.get('postal-code');
  //     // const city = formData.get('city');

  //     const customerData = Object.fromEntries(formData.entries());

  //     sendRequest(
  //       JSON.stringify({
  //         order: { items: cartCtx.items, customer: customerData },
  //       })
  //     );

  //     // const response = await fetch("http://localhost:3000/orders", {
  //     //   method: "POST",
  //     //   body: JSON.stringify({
  //     //     order: { items: cartCtx.items, customer: customerData },
  //     //   }),
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });

  //     // if (!response.ok) {
  //     //   return;
  //     // }
  //   }

  // with the help of useStateAction hook
  async function checkoutAction(prevState, formData) {
    const customerData = Object.fromEntries(formData.entries());

    await sendRequest(
      JSON.stringify({
        order: { items: cartCtx.items, customer: customerData },
      })
    );
  }

  const [formstate, formAction, pending] = useActionState(checkoutAction, null);

  let action = (
    <>
      <p className="modal-actions">
        <Button onClick={handleCloseCheckout} type="button" textOnly>
          Close
        </Button>
        <Button type="submit">Submit Order</Button>
      </p>
    </>
  );

  //without action state
  //   if (isSending) {
  //     action = <p>Sending order data...</p>;
  //   }

  //with action state
  if (pending) {
    action = <p>Sending order data...</p>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish} type="button">
            Okay
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      {/* without using action onSubmit={handleSubmit} */}
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
        <Input label="Full name" id="name" type="text"></Input>
        <Input label="E-Mail Address" id="email" type="email"></Input>
        <Input label="Street" id="street" type="text"></Input>
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text"></Input>
          <Input label="City" id="city" type="text"></Input>
        </div>
        {error && (
          <Error title={"Failed to submit order"} message={error}></Error>
        )}
        <p className="modal-actions">{action}</p>
      </form>
    </Modal>
  );
}
