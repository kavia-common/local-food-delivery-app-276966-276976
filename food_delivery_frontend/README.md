# Ocean Delivery: Food Delivery React App (Local JSON Demo)

Modern, accessible food ordering web app. Browse restaurants, menus, place orders, and manage your cart—data persists only in your browser.

## Getting Started

In the project directory:

### `npm install`
Install dependencies if you haven't already.

### `npm start`
Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it.

## Features

- Restaurant listings and details (from `src/data/restaurants.json`)
- View menus (from `src/data/menus/{restaurantId}.json`)
- Add to cart, update or remove items, view live cart summary
- Place order and view confirmation (orders are stored to local browser storage)
- Responsive, accessible UI following Ocean Professional theme and color palette

## Restaurant Images

- The Browse Restaurants view displays a photo for each restaurant.
- Ocean Bistro and Golden Grill use `/public/assets/restaurant-oceanbistro.jpg` and `/public/assets/restaurant-goldengrill.jpg`, respectively. Supply new images in this folder to customize.
- If a restaurant image is missing or fails to load, a generic fallback (`/public/assets/sample-menu.png`) is shown.
- All restaurant image references are set in `src/data/restaurants.json` (`image` field).
- Images are loaded with accessible alt text, responsive styling, and `loading="lazy"`.
- See `RestaurantCard.js` for implementation and fallback handling.

## Notes

- All data is local, no backend or API calls.
- Cart and orders are persisted in localStorage (non-sensitive, for demo only).
- To customize restaurant/menu data, edit the JSON files under `/src/data/`.
- Images referenced in demo data must reside under `/public/assets/`.
- Example assets: `/public/assets/restaurant-oceanbistro.jpg` etc.
- Menu item images are located in `/public/assets/` as compressed JPG/PNG placeholders (e.g., `/public/assets/bbq-chicken-sandwich.jpg`, `pizza.jpg`, `salad.jpg`, `sushi.jpg`, `dessert.jpg`).
- All food/item photos are royalty-free/generated placeholders for demonstration only. Replace with your own images if needed.
- Alt attributes on images use the item name for accessibility.
- Images will responsively fit their containers; see `MenuItemCard.js` and usage for details.
- If switching to external CDNs/images, update the menu JSON `image` field to use the absolute URL.

---

## Component Demo

- To preview the new `FoodMenuList` sample UI component, visit [http://localhost:3000/demo-menu](http://localhost:3000/demo-menu) once the dev server is running.
- The `/demo-menu` route is for demonstration only and can be used as a starting point for card-style menus.

- **Main Menu UI:** The FoodMenuList component is now used on each restaurant’s menu page for real menu ordering. The "Add" button is fully wired to the cart (see `/src/pages/RestaurantMenuPage.js` for the integration and data transformation).

## Accessibility & Responsiveness

This app was carefully crafted to meet high accessibility standards and provide a fully responsive experience on mobile, tablet, and desktop devices.

### Accessibility Features
- **Landmarks & Navigation:** Semantic elements, ARIA roles, and skip-to-content link ensure smooth screen reader and keyboard navigation.
- **Keyboard Support:** All controls, cards, and page actions are accessible via Tab/Shift+Tab, with visible focus outlines.
- **Color Contrast:** Ocean Professional palette used with ensured AA-compliant color contrast, including in light and dark modes.
- **ARIA & Labels:** Interactive elements have ARIA labels/roles for assistive technologies.
- **Reduced Motion:** Honors users' system `prefers-reduced-motion` setting, disables non-essential transitions/animations if requested.
- **Landmark Structure:** Header (banner+nav), main content (`role="main"`), and page sections are structured for accessibility.

### Responsiveness
- **Mobile First:** Responsive grid/layout adapts to phone, tablet, and desktop.
- **Touch-Friendly:** Large button targets and flexible layout for all screen sizes.
- **Adaptive Spacing:** Padding, margins, and card layouts scale with viewport.

---

## Limitations

- This is a frontend-only demo: no login, backend, or payment support.
- No live order status or notifications.

## Contributing

Feel free to adapt and extend for demonstration or learning use!

