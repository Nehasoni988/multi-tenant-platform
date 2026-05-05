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

  // Router Hooks
  const { productId } = useParams();
  const productRef = useRef<ProductType | null>(null);

  // Hooks
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
    <div className="max-w-7xl mx-auto space-y-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-600 font-medium transition-colors">
          Products
        </Link>
        <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {productRef.current && (
          <span className="text-gray-900 font-medium">{productRef.current.title}</span>
        )}
      </nav>

      {/* Product card (compact) */}
      {productRef.current && (
        <div className="max-w-sm">
          <Product product={productRef.current} />
        </div>
      )}

      {/* Channels Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* LEFT: Channel tabs */}
        <aside className="md:w-56 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">Channels</p>
          <ul className="space-y-1">
            {channels.map((channel) => {
              const isActive = activeChannel?.id === channel.id;
              return (
                <li key={channel.id}>
                  <button
                    onClick={() => setActiveChannel(channel)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center gap-2.5 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white" : "bg-gray-300"}`} />
                    {channel.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* RIGHT: Content */}
        {activeChannel && (
          <div className="flex-1 min-w-0">
            <Channel channel={activeChannel} />
          </div>
        )}
      </div>
    </div>
  );
};
