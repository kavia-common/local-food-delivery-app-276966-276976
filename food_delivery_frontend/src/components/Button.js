import React from "react";

/**
 * PUBLIC_INTERFACE
 * Styled button for primary/secondary/success or danger.
 */
function Button({
  children,
  onClick,
  type = "primary",
  style = {},
  ...props
}) {
  let colorStyles = {
    primary: {
      background: "#2563EB",
      color: "#fff",
    },
    secondary: {
      background: "#f9fafb",
      border: "1px solid #2563EB",
      color: "#2563EB",
    },
    success: {
      background: "#F59E0B",
      color: "#fff",
    },
    danger: {
      background: "#EF4444",
      color: "#fff",
    },
  }[type] || colorStyles.primary;
  return (
    <button
      style={{
        border: "none",
        borderRadius: 6,
        minWidth: 62,
        padding: "8px 18px",
        fontWeight: 600,
        fontSize: 15,
        margin: "0 3px",
        cursor: "pointer",
        transition: "all 0.15s",
        outline: "none",
        ...colorStyles,
        ...style,
      }}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
