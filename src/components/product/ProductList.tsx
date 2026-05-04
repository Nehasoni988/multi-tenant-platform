import { useEffect, useState } from "react";
import { Product } from "./Product.tsx";
import { getLoggedinUser } from "../../utils/helper.ts";
import type { Product as ProductType } from "../../types/productTypes.ts";

export const ProductList = () => {
  // State
  const [products, setProducts] = useState<ProductType[]>([]);

  // Hooks
  useEffect(() => {
    function updateProducts() {
      const loggedInUser = getLoggedinUser();
      if (!loggedInUser) return;

      setProducts(loggedInUser.products);
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
