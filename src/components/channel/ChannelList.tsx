import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { PRODUCTS } from "../../data/products";
import { CHANNELS } from "../../data/channels";
import { Product } from "../product/Product";
import { Channel } from "./Channel";
import type { Channel as ChannelType } from "../../types/channelTypes";
import type { Product as ProductType } from "../../types/productTypes";

export const ChannelList = () => {
  // State
  const [channels, setChannels] = useState<ChannelType[]>([]);
  const [activeChannel, setActiveChannel] = useState<ChannelType | null>(null);

  // Hooks
  const { productId } = useParams();
  const productRef = useRef<ProductType | null>(null);

  // UseEffect
  useEffect(() => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    productRef.current = product;

    const mappedChannels = CHANNELS.filter((channel) =>
      product.channelIds.includes(channel.id),
    );

    if (!mappedChannels?.length) return;

    setChannels(mappedChannels);
    setActiveChannel(mappedChannels[0]);
  }, [productId]);

  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand"
            >
              Products
            </Link>
          </li>

          <li aria-current="page">
            <div className="flex items-center space-x-1.5">
              <svg
                className="w-3.5 h-3.5 rtl:rotate-180 text-body"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
              {productRef.current && (
                <span className="inline-flex items-center text-sm font-medium text-body-subtle">
                  {productRef.current.title}
                </span>
              )}
            </div>
          </li>
        </ol>
      </nav>

      {productRef.current && <Product product={productRef.current} />}
      
      <div className="md:flex gap-4">
        {/* LEFT: Vertical Tabs */}
        <ul className="space-y-2 md:w-64">
          {channels.map((channel) => (
            <li key={channel.id}>
              <button
                onClick={() => {
                  setActiveChannel(channel);
                }}
                className={`w-full text-left px-4 py-2 rounded-base ${
                  activeChannel?.id === channel.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {channel.title}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT: Content */}
        {activeChannel && <Channel channel={activeChannel} />}
      </div>
    </>
  );
};
