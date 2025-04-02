import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  const totalCartItems = items.reduce((acc, item) => acc + item.quantity, 0);

  function handleShowcart() {
    showCart();
  }

  return (
    <header>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="Food Logo" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button onClick={handleShowcart} textOnly>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </div>
    </header>
  );
}
