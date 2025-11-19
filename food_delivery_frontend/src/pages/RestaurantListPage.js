import React from "react";
import data from "../data/restaurants.json";
import RestaurantCard from "../components/RestaurantCard";
import { useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Home page: shows restaurants.
 */
function RestaurantListPage() {
  const navigate = useNavigate();
  return (
    <div className="restaurant-list-page" style={{ maxWidth: 600, margin: "30px auto" }}>
      <h2>Browse Restaurants</h2>
      {data.length === 0 && (
        <div role="alert">No restaurants found.</div>
      )}
      {data.map(r => (
        <RestaurantCard
          key={r.id}
          restaurant={r}
          onSelect={rid => navigate(`/restaurant/${rid}`)}
        />
      ))}
    </div>
  );
}

export default RestaurantListPage;
