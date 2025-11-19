import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

/**
 * PUBLIC_INTERFACE
 * Confirmation page - thanks user and prompts home.
 */
function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", padding: 28, background: "#fff", borderRadius: 12 }}>
      <h2>
        <span role="img" aria-label="Success">
          🎉
        </span>{" "}
        Order Placed!
      </h2>
      <p>Thank you for ordering with Ocean Delivery.</p>
      <Button onClick={() => navigate("/")}>Return to Home</Button>
    </div>
  );
}

export default ConfirmationPage;
