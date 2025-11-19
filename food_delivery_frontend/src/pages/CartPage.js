import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Dedicated cart view - show all items, edit, remove, checkout
 */
function CartPage() {
  const { cartItems, updateCartItem, removeCartItem, getCartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-page" style={{ maxWidth: 500, margin: "30px auto" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && (
        <div role="alert" style={{ margin: "40px 0" }}>
          Cart is empty.
        </div>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id + "|" + (item.restaurantId || "")}
          style={{
            display: "flex",
            background: "#fff",
            borderRadius: 8,
            marginBottom: 16,
            boxShadow: "0 2px 5px rgba(0,0,0,0.04)",
            alignItems: "center",
            padding: 9,
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: 56,
              height: 56,
              objectFit: "cover",
              borderRadius: 6,
              marginRight: 14,
            }}
          />
          <div style={{ flex: 1 }}>
            <div>
              <strong>{item.name}</strong>
            </div>
            <div style={{ fontSize: 14, color: "#888" }}>
              ${item.price.toFixed(2)}
            </div>
            <div>
              <label htmlFor={`quantity-${item.id}`} style={{ marginRight: 4 }}>
                Qty:
              </label>
              <input
                id={`quantity-${item.id}`}
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  updateCartItem(
                    item.id + "|" + (item.restaurantId || ""),
                    Math.max(1, parseInt(e.target.value) || 1)
                  )
                }
                style={{
                  width: 44,
                  padding: 4,
                  border: "1px solid #E5E7EB",
                  borderRadius: 4,
                  marginRight: 9,
                  fontSize: 15,
                }}
                aria-label={`Update quantity for ${item.name}`}
              />
              <Button
                type="danger"
                onClick={() =>
                  removeCartItem(item.id + "|" + (item.restaurantId || ""))
                }
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div style={{ textAlign: "right", fontWeight: 700 }}>
          Total: ${getCartTotal().toFixed(2)}
        </div>
      )}
      <div style={{ marginTop: 28 }}>
        <Button onClick={() => navigate("/")} type="secondary">
          ← Continue Shopping
        </Button>
        {cartItems.length > 0 && (
          <Button
            onClick={() => navigate("/checkout")}
            style={{ marginLeft: 8 }}
            type="primary"
          >
            Proceed to Checkout
          </Button>
        )}
      </div>
    </div>
  );
}

export default CartPage;
