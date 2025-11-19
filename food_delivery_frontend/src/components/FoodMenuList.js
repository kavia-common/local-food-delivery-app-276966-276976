import React from "react";
import PropTypes from "prop-types";
import "./FoodMenuList.css";

/**
 * PUBLIC_INTERFACE
 * FoodMenuList - renders a responsive grid of food/menu items as card-style list.
 * @param {Array} items - [{id, title, description, price, image, currencySymbol}]
 * @param {Function} onAdd - callback function(item)
 */
function FoodMenuList({ items, onAdd }) {
  return (
    <section
      className="food-menu-list"
      aria-label="Menu items"
      data-testid="food-menu-list"
    >
      {items && items.length > 0 ? (
        items.map((item) => (
          <article
            className="food-menu-card"
            key={item.id}
            tabIndex={0}
            aria-labelledby={`food-title-${item.id}`}
          >
            <div className="food-menu-card__imgwrap">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="food-menu-card__img"
                width={112}
                height={112}
                decoding="async"
              />
            </div>
            <div className="food-menu-card__body">
              <h3
                className="food-menu-card__title"
                id={`food-title-${item.id}`}
              >
                {item.title}
              </h3>
              <p className="food-menu-card__desc">{item.description}</p>
              <div className="food-menu-card__footer">
                <span
                  className="food-menu-card__price"
                  aria-label={`Price: ${
                    item.currencySymbol ? item.currencySymbol : "$"
                  }${item.price.toFixed(2)}`}
                >
                  {item.currencySymbol ? item.currencySymbol : "$"}
                  {item.price.toFixed(2)}
                </span>
                <button
                  className="food-menu-card__addbtn"
                  onClick={() => onAdd && onAdd(item)}
                  aria-label={`Add ${item.title} to cart`}
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p className="food-menu-list__empty" role="status">No menu items available.</p>
      )}
    </section>
  );
}

FoodMenuList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      currencySymbol: PropTypes.string,
    })
  ).isRequired,
  onAdd: PropTypes.func,
};

export default FoodMenuList;
