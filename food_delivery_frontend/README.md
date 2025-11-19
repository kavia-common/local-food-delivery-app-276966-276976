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

## Accessibility & Theming

- Semantic HTML, ARIA labels, and keyboard navigation support.
- Ocean Professional style: primary `#2563EB`, secondary/success `#F59E0B`, error `#EF4444`, background `#f9fafb`, surface `#ffffff`, text `#111827`.

## Limitations

- This is a frontend-only demo: no login, backend, or payment support.
- No live order status or notifications.

## Contributing

Feel free to adapt and extend for demonstration or learning use!

