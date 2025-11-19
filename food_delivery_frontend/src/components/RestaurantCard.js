import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Card for restaurant info; clickable, with alt text and basics.
 * Displays a restaurant image with lazy loading, accessible alt, responsive/correct aspect ratio,
 * and fallback to /assets/sample-menu.png if the asset is missing/broken.
 */
function RestaurantCard({ restaurant, onSelect }) {
  // Track image error to supply fallback
  const [imgSrc, setImgSrc] = useState(restaurant.image || "/assets/sample-menu.png");

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
          minHeight: 112,
        }}
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            width: 96,
            height: 96,
            minWidth: 88,
            minHeight: 88,
            marginRight: 16,
            background: "#f1f5f9",
            borderRadius: 10,
            overflow: "hidden",
            flexShrink: 0,
            aspectRatio: "1/1",
            position: "relative"
          }}
        >
          <img
            src={imgSrc}
            alt={`Photo of ${restaurant.name}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 10,
              display: "block",
            }}
            loading="lazy"
            decoding="async"
            onError={e => {
              // Only swap on first error/fallback, avoid infinite loop
              if (imgSrc !== "/assets/sample-menu.png") {
                setImgSrc("/assets/sample-menu.png");
              }
            }}
          />
        </span>
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
          <span
            style={{
              fontSize: 13,
              color: "#111827",
              marginTop: 6,
              display: "inline-block"
            }}
          >
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
