import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  } 
  
  if (action.type === "UPDATE_ITEM") {
           const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );

        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
          items: updatedItems,
        };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  // with Context API
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

  //   function handleAddItemToCart(id) {
  //     setShoppingCart((prevShoppingCart) => {
  //       const updatedItems = [...prevShoppingCart.items];

  //       const existingCartItemIndex = updatedItems.findIndex(
  //         (cartItem) => cartItem.id === id
  //       );
  //       const existingCartItem = updatedItems[existingCartItemIndex];

  //       if (existingCartItem) {
  //         const updatedItem = {
  //           ...existingCartItem,
  //           quantity: existingCartItem.quantity + 1,
  //         };
  //         updatedItems[existingCartItemIndex] = updatedItem;
  //       } else {
  //         const product = DUMMY_PRODUCTS.find((product) => product.id === id);
  //         updatedItems.push({
  //           id: id,
  //           name: product.title,
  //           price: product.price,
  //           quantity: 1,
  //         });
  //       }

  //       return {
  //         items: updatedItems,
  //       };
  //     });
  //   }

  //   function handleUpdateCartItemQuantity(productId, amount) {
  //     setShoppingCart((prevShoppingCart) => {
  //       const updatedItems = [...prevShoppingCart.items];
  //       const updatedItemIndex = updatedItems.findIndex(
  //         (item) => item.id === productId
  //       );

  //       const updatedItem = {
  //         ...updatedItems[updatedItemIndex],
  //       };

  //       updatedItem.quantity += amount;

  //       if (updatedItem.quantity <= 0) {
  //         updatedItems.splice(updatedItemIndex, 1);
  //       } else {
  //         updatedItems[updatedItemIndex] = updatedItem;
  //       }

  //       return {
  //         items: updatedItems,
  //       };
  //     });
  //   }

  //   const ctxValue = {
  //     items: shoppingCart.items,
  //     addItemToCart: handleAddItemToCart,
  //     updateItemQuantity: handleUpdateCartItemQuantity,
  //   };

  // With UseReducer

  const [shoppingcartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      action: "UPDATE_ITEM",
      payload: { productId, amount },
    });
  }

  const ctxValue = {
    items: shoppingcartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children} </CartContext.Provider>
  );
}

// we need to wrap it over the component to use this context
// for older version <CartContext.Provider> we need to to use provider, for react version greater than 19, its optional, we can use <CartContext>

// with respect to provider, we need to add value property to this context wrapper <CartContext.Provider value={{items:[]}}>
// with this value property added, we can get autosuggestion when we use this content in the component

// If we need to access these value in any one of the component, then we need to go to that componet
// and import this context, and also need to use one amoung two hooks provided by react (useContext or use)
// use is more fexible than useContext, because use can be used within the if block
// use hook is only available if we are using react version 19 or higher

// we can make use of useReducer, and use the reducer to update the state of the context
