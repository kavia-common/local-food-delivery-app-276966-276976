import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { setStorage, getStorage } from "../utils/storage";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Checkout: finalize order and persist
 */
function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [placing, setPlacing] = useState(false);

  const handlePlaceOrder = () => {
    setPlacing(true);
    // save basic order to localStorage "orders" array
    const order = {
      id: Date.now().toString(),
      items: cartItems,
      total: getCartTotal(),
      placedAt: new Date().toISOString(),
    };
    const prevOrders = getStorage("orders", []);
    setStorage("orders", [...prevOrders, order]);
    clearCart();
    setTimeout(() => {
      setPlacing(false);
      navigate("/confirmation", { state: { orderId: order.id } });
    }, 350);
  };

  if (cartItems.length === 0)
    return (
      <div style={{ margin: "40px auto", maxWidth: 400 }}>
        <div role="alert">Your cart is empty!</div>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    );

  return (
    <div className="checkout-page" style={{ maxWidth: 540, margin: "30px auto" }}>
      <h2>Order Review</h2>
      <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
        <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {cartItems.map((item) => (
            <li key={item.id + "|" + (item.restaurantId || "")}>
              <strong>{item.name}</strong> × {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <div style={{ fontWeight: 700, marginTop: 14 }}>
          Total: ${getCartTotal().toFixed(2)}
        </div>
      </div>
      <Button
        type="primary"
        onClick={handlePlaceOrder}
        disabled={placing}
        style={{ marginTop: 24 }}
        aria-label="Place order"
      >
        {placing ? "Placing..." : "Place Order"}
      </Button>
    </div>
  );
}

export default CheckoutPage;
