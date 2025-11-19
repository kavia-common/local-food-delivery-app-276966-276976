import React from "react";

/**
 * PUBLIC_INTERFACE
 * Card for restaurant info; clickable, with alt text and basics.
 */
function RestaurantCard({ restaurant, onSelect }) {
  // Interactive semantic: use <article> with a <button> for accessible card
  return (
    <article
      className="restaurant-card"
      style={{
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        borderRadius: "12px",
        margin: "12px 0",
        outline: "none",
      }}
      aria-labelledby={`rest-title-${restaurant.id}`}
    >
      <button
        type="button"
        tabIndex={0}
        aria-label={`View details about ${restaurant.name}`}
        onClick={() => onSelect(restaurant.id)}
        onKeyDown={e => e.key === "Enter" && onSelect(restaurant.id)}
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
          minHeight: 110,
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
            flexShrink: 0,
          }}
        />
        <span style={{ flex: 1, margin: 0, display: "block" }}>
          <h3
            id={`rest-title-${restaurant.id}`}
            style={{ margin: "0 0 4px", color: "#2563EB" }}
          >
            {restaurant.name}
          </h3>
          <p style={{ margin: "0 0 8px" }}>{restaurant.description}</p>
          <span
            style={{
              fontSize: 13,
              background: "#F59E0B",
              color: "#fff",
              borderRadius: 4,
              padding: "2px 8px",
              marginRight: 7,
            }}
          >
            {restaurant.cuisine}
          </span>
          <span style={{ fontSize: 13, color: "#111827", marginTop: 6, display: "inline-block" }}>
            <span role="img" aria-label="Location">
              📍
            </span>{" "}
            {restaurant.address} | {restaurant.hours}
          </span>
        </span>
      </button>
    </article>
  );
}

export default RestaurantCard;
