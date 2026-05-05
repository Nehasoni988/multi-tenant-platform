import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router";
import type { Product as ProductType } from "../../types/productTypes.ts";

interface ComponentProps {
  product: ProductType;
}

export const Product = ({ product }: ComponentProps) => {
  // Router Hooks
  const match = useMatch("/product/:productId/channels");

  // State
  const [showLink, setShowLink] = useState(false);

  // Hooks
  useEffect(() => {
    match ? setShowLink(false) : setShowLink(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h5 className="text-base font-semibold text-gray-900 mb-1.5">
          {product.title}
        </h5>
        <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
      </div>

      {/* Footer */}
      {showLink && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            to={`/product/${product.id}/channels`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 group"
          >
            Explore channels
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};
