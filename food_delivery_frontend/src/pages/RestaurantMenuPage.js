import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import MenuItemCard from "../components/MenuItemCard";
import restaurantDb from "../data/restaurants.json";

/**
 * PUBLIC_INTERFACE
 * Displays menu for a specific restaurant
 */
function RestaurantMenuPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  // Lazy load menu JSON from src/data/menus/{id}.json
  useEffect(() => {
    setRestaurant(restaurantDb.find(r => r.id === id));
    import(`../data/menus/${id}.json`)
      .then(mod => setMenu(mod.default || mod))
      .catch(() => setMenu([]));
  }, [id]);

  if (!restaurant)
    return (
      <div style={{ padding: 32 }}>
        <h3>Restaurant not found.</h3>
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
    );

  return (
    <div className="menu-page" style={{ maxWidth: 600, margin: "30px auto" }}>
      <Button onClick={() => navigate("/")} type="secondary" style={{ marginBottom: 12 }}>
        ← Back
      </Button>
      <h2>
        {restaurant.name}
        <span style={{ color: "#2563EB", fontSize: 16, marginLeft: 8 }}>
          Menu
        </span>
      </h2>
      {!menu.length ? (
        <div role="alert" style={{ margin: "40px 0" }}>
          No menu found.
        </div>
      ) : (
        menu.map(item => (
          <MenuItemCard item={item} restaurantId={id} key={item.id} />
        ))
      )}
    </div>
  );
}

export default RestaurantMenuPage;
