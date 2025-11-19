import React, { useCallback } from "react";
import FoodMenuList from "../components/FoodMenuList";

/**
 * PUBLIC_INTERFACE
 * Demo page that renders FoodMenuList with two sample items for preview/testing.
 */
function MenuDemoPage() {
  // Use the public asset path per README/app conventions.
  const imagePath = "/assets/sample-menu.png";
  const sampleItems = [
    {
      id: "item1",
      title: "Smoked Salmon Toast",
      description: "Toasted artisan bread, cream cheese, smoked salmon, dill, and capers.",
      price: 11.95,
      currencySymbol: "$",
      image: imagePath,
    },
    {
      id: "item2",
      title: "Smashed Avocado Bowl",
      description: "Smashed avocado, lemon, seeds, crispy chickpeas, and house greens.",
      price: 9.5,
      currencySymbol: "$",
      image: imagePath,
    }
  ];

  // eslint-disable-next-line no-alert
  const handleAdd = useCallback(item => {
    alert(`You clicked Add for: ${item.title}`);
  }, []);

  return (
    <div style={{ margin: "32px auto", maxWidth: 700, width: "100%" }}>
      <h2 style={{ fontSize: 23, fontWeight: 700, marginBottom: 16 }}>
        FoodMenuList Demo
      </h2>
      <p tabIndex={-1} style={{ color: "#6B7280", fontSize: 15, marginTop: 0, marginBottom: 22 }}>
        This is a sample showcase of the <b>FoodMenuList</b> card component.
      </p>
      <FoodMenuList items={sampleItems} onAdd={handleAdd} />
    </div>
  );
}

export default MenuDemoPage;
