import { useEffect, useState } from "react";
import { Product } from "./Product.tsx";
import { getLoggedinUserFromLS } from "../../utils/helper.ts";
import type { Product as ProductType } from "../../types/productTypes.ts";
import { PRODUCTS } from "../../data/products.ts";

export const ProductList = () => {
  // State
  const [products, setProducts] = useState<ProductType[]>([]);

  // Hooks
  useEffect(() => {
    function updateProducts() {
      const loggedInUser = getLoggedinUserFromLS();
      if (!loggedInUser) return;

      const authUserProducts = PRODUCTS.filter((product) =>
        loggedInUser.products.includes(product.id),
      );

      setProducts(authUserProducts);
    }

    // Listen to user changed event
    window.addEventListener("userChanged", updateProducts);

    // Initially setup the products
    updateProducts();

    // Clean on component unmount
    return () => window.removeEventListener("userChanged", updateProducts);
  }, []);

  return (
    <>
      <div className="grid my-2 text-2xl font-semibold tracking-tight text-heading">
        Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
