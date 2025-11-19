import React from "react";

/**
 * PUBLIC_INTERFACE
 * Card for restaurant info; clickable, with alt text and basics.
 */
function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div
      className="restaurant-card"
      tabIndex={0}
      role="button"
      aria-label={`View restaurant: ${restaurant.name}`}
      onClick={() => onSelect(restaurant.id)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(restaurant.id)}
      style={{
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        borderRadius: "12px",
        margin: "12px 0",
        padding: 16,
        cursor: "pointer",
        outline: "none",
      }}
    >
      <img
        src={restaurant.image}
        alt={`Photo of ${restaurant.name}`}
        style={{
          width: 88,
          height: 88,
          objectFit: "cover",
          borderRadius: 8,
          marginRight: 16,
          float: "left",
        }}
      />
      <div style={{ marginLeft: 104 }}>
        <h3 style={{ margin: "0 0 4px", color: "#2563EB" }}>{restaurant.name}</h3>
        <p style={{ margin: "0 0 8px" }}>{restaurant.description}</p>
        <span
          style={{
            fontSize: 13,
            background: "#F59E0B",
            color: "#fff",
            borderRadius: 4,
            padding: "2px 8px",
          }}
        >
          {restaurant.cuisine}
        </span>
        <div style={{ fontSize: 13, color: "#111827", marginTop: 6 }}>
          <span role="img" aria-label="Location">
            📍
          </span>{" "}
          {restaurant.address} | {restaurant.hours}
        </div>
      </div>
      <div style={{ clear: "both" }} />
    </div>
  );
}

export default RestaurantCard;
