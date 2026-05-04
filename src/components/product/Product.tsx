import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router";
import type { Product as ProductType } from "../../types/productTypes.ts";

interface ComponentProps {
  product: ProductType;
}

export const Product = ({ product }: ComponentProps) => {
  // Hooks
  const match = useMatch("/product/:productId/channels");

  useEffect(() => {
    match ? setShowLink(false) : setShowLink(true);
  }, []);

  // State
  const [showLink, setShowLink] = useState(false);

  return (
    <>
      <div className="bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs">
        <img
          src={product.image}
          alt={product.title}
          width="70px"
          height="70px"
          className="mb-4"
        />

        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
            {product.title}
          </h5>
        </a>
        <p className="mb-3 text-body">{product.description}</p>
        {showLink && (
          <Link
            to={`/product/${product.id}/channels`}
            className="inline-flex font-medium items-center text-fg-brand hover:underline"
          >
            See more info
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </Link>
        )}
      </div>
    </>
  );
};
