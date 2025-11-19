import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getStorage, setStorage, removeStorage } from "../utils/storage";

// Initializer: recover cart from localStorage or default empty
function cartInit() {
  return getStorage("cart", {});
}

// Reducer: add, remove, update, clear operations
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const addKey = action.item.id + "|" + (action.restaurantId || "");
      return {
        ...state,
        [addKey]: {
          ...action.item,
          restaurantId: action.restaurantId,
          quantity: (state[addKey]?.quantity || 0) + (action.quantity || 1),
        },
      };
    case "UPDATE":
      if (action.quantity <= 0) {
        // Remove if updating to 0
        const { [action.id]: _, ...rest } = state;
        return rest;
      }
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          quantity: action.quantity,
        },
      };
    case "REMOVE":
      const { [action.id]: _, ...newState } = state;
      return newState;
    case "CLEAR":
      return {};
    default:
      return state;
  }
}

const CartContext = createContext(undefined);

// PUBLIC_INTERFACE
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {}, cartInit);

  // Sync cart to localStorage on changes
  useEffect(() => {
    setStorage("cart", cart);
  }, [cart]);

  // PUBLIC_INTERFACE
  const cartItems = Object.values(cart);

  // PUBLIC_INTERFACE
  const getCartCount = () =>
    cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  // PUBLIC_INTERFACE
  const getCartTotal = () =>
    cartItems.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
      0
    );

  // PUBLIC_INTERFACE
  const addToCart = (item, restaurantId, quantity = 1) =>
    dispatch({ type: "ADD", item, restaurantId, quantity });

  // PUBLIC_INTERFACE
  const updateCartItem = (id, quantity) =>
    dispatch({ type: "UPDATE", id, quantity });

  // PUBLIC_INTERFACE
  const removeCartItem = (id) => dispatch({ type: "REMOVE", id });

  // PUBLIC_INTERFACE
  const clearCart = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        getCartCount,
        getCartTotal,
        addToCart,
        updateCartItem,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be within CartProvider");
  return ctx;
}
