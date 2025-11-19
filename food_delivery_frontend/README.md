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

## Notes

- All data is local, no backend or API calls.
- Cart and orders are persisted in localStorage (non-sensitive, for demo only).
- To customize restaurant/menu data, edit the JSON files under `/src/data/`.
- Images referenced in demo data must reside under `/public/assets/`.
- Example assets: `/public/assets/restaurant-oceanbistro.jpg` etc.

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

