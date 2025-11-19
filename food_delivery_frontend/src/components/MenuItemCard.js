import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";

/**
 * PUBLIC_INTERFACE
 * Shows a menu item, allows addition to cart.
 */
function MenuItemCard({ item, restaurantId }) {
  const [adding, setAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    setAdding(true);
    addToCart(item, restaurantId, 1);
    setTimeout(() => setAdding(false), 400); // show briefly as "added"
  };

  return (
    <div
      className="menu-item-card"
      style={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: 8,
        margin: "16px 0",
        padding: 14,
        boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: 70,
          height: 70,
          objectFit: "cover",
          borderRadius: 6,
          marginRight: 16,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600 }}>{item.name}</div>
        <div style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>
          {item.description}
        </div>
        <div style={{ color: "#F59E0B", fontWeight: 500 }}>${item.price.toFixed(2)}</div>
      </div>
      <Button
        onClick={handleAdd}
        disabled={adding}
        aria-label={`Add ${item.name} to cart`}
        type={adding ? "success" : "primary"}
      >
        {adding ? "Added" : "Add"}
      </Button>
    </div>
  );
}

export default MenuItemCard;
