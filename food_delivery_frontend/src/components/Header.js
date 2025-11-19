import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * App header: shows name, cart badge, and a theme toggle.
 */
function Header({ theme, setTheme }) {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className="header"
      style={{ background: "#2563EB", color: "#fff" }}
      role="banner"
    >
      <nav
        aria-label="Main navigation"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          type="button"
          className="header__brand"
          onClick={() => navigate("/")}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          aria-label="Food Delivery Home"
          style={{
            fontWeight: 700,
            fontSize: "1.3rem",
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "#fff",
            padding: 0,
          }}
        >
          Ocean Delivery
        </button>
        <div style={{ flex: 1 }} />
        <button
          className="header__cart"
          aria-label={`View cart (${getCartCount()} items)`}
          onClick={() => navigate("/cart")}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 20,
            position: "relative",
            cursor: "pointer",
            marginRight: 24,
          }}
          disabled={location.pathname === "/cart"}
        >
          <span aria-hidden="true" role="img">
            🛒
          </span>
          {getCartCount() ? (
            <span
              className="badge"
              style={{
                background: "#EF4444",
                color: "#fff",
                fontWeight: 700,
                marginLeft: 2,
                padding: "2px 7px",
                borderRadius: "40%",
                fontSize: 13,
                position: "absolute",
                top: -8,
                right: -12,
              }}
              aria-label={`Cart has ${getCartCount()} items`}
            >
              {getCartCount()}
            </span>
          ) : null}
        </button>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="theme-toggle"
          aria-label={`Switch theme, currently ${theme === "light" ? "light" : "dark"} mode`}
          style={{
            marginLeft: 8,
          }}
          type="button"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
