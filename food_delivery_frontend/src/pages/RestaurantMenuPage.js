import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import FoodMenuList from "../components/FoodMenuList";
import restaurantDb from "../data/restaurants.json";

/**
 * PUBLIC_INTERFACE
 * Displays menu for a specific restaurant, rendering FoodMenuList with mapped data and cart integration.
 */
function RestaurantMenuPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const { addToCart } = useCart();

  // Lazy load menu JSON from src/data/menus/{id}.json
  useEffect(() => {
    setRestaurant(restaurantDb.find(r => r.id === id));
    import(`../data/menus/${id}.json`)
      .then(mod => setMenu(mod.default || mod))
      .catch(() => setMenu([]));
  }, [id]);

  // Transform menu item fields from {id, name, description, price, image}
  // --> {id, title, description, price, image, currencySymbol}
  const transformedMenu = useMemo(
    () =>
      (menu || []).map(item => ({
        id: String(item.id),
        title: item.name ?? item.title ?? "",
        description: item.description ?? "",
        price: Number(item.price) || 0,
        image: item.image || "/assets/sample-menu.png",
        currencySymbol: "$",
      })),
    [menu]
  );

  if (!restaurant)
    return (
      <div style={{ padding: 32 }}>
        <h3>Restaurant not found.</h3>
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
    );

  return (
    <div className="menu-page" style={{ maxWidth: 650, margin: "30px auto" }}>
      <Button onClick={() => navigate("/")} type="secondary" style={{ marginBottom: 12 }}>
        ← Back
      </Button>
      <h2 style={{ marginTop: 0 }}>
        {restaurant.name}
        <span style={{ color: "#2563EB", fontSize: 16, marginLeft: 8 }}>
          Menu
        </span>
      </h2>
      {!transformedMenu.length ? (
        <div role="alert" style={{ margin: "40px 0" }}>
          No menu found.
        </div>
      ) : (
        <FoodMenuList
          items={transformedMenu}
          onAdd={item =>
            // Pass the untransformed menu item's id to keep keys in sync in cart.
            addToCart(
              {
                id: item.id,
                name: item.title,
                description: item.description,
                price: item.price,
                image: item.image,
              },
              id,
              1
            )
          }
        />
      )}
    </div>
  );
}

export default RestaurantMenuPage;
