// Get actual products
import products from "./products";

/**
 * Get all posible values for id in "products/[id]".
 */
export const getAllProductsIds = () => {
  let ids = [];
  for (let i = 0; i < products.categories.length; i++) {
    const category = products.categories[i];
    for (let j = 0; j < category.products.length; j++) {
      const product = category.products[j];
      ids.push({ params: { id: product.id } });
    }
  }
  return ids;
};

/**
 * Get product date given a product ID
 */
export const getProductData = (id) => {
  for (let i = 0; i < products.categories.length; i++) {
    const category = products.categories[i];
    for (let j = 0; j < category.products.length; j++) {
      const product = category.products[j];
      if (product.id === id) return product;
    }
  }
  return null;
};
