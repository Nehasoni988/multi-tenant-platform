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
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Products</h2>
        <p className="text-sm text-gray-500 mt-1">
          {products.length} product{products.length !== 1 ? "s" : ""} available to you
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium">No products assigned</p>
          <p className="text-gray-400 text-sm mt-1">Contact your admin to get access</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
