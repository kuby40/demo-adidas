"use client";
import { Product } from "@prisma/client";
import SmallTile from "../../models/SmallTile";
import { useRef } from "react";

interface ScrollingSmallTilesProps {
  productsList: Product[];
}
const ScrollingSmallTiles: React.FC<ScrollingSmallTilesProps> = ({
  productsList,
}) => {
  const trendingScrollable = useRef<HTMLDivElement>(null);
  return (
    <div className="py-8 border-t-2">
      <div className="flex justify-around">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-7 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
          <h3 className="font-extrabold cursor-pointer">New Arrivals</h3>
          <h3 className="font-extrabold ml-4 cursor-pointer">
            What's Trending
          </h3>
        </div>
        <div className="flex">
          <h5 className="underline font-bold cursor-pointer">
            <p className="hover:text-white hover:bg-black mx-auto">View All</p>
          </h5>
        </div>
        <div className="flex">
          <button
            className="text-3xl hover:bg-black hover:text-white"
            onClick={() => {
              if (trendingScrollable.current != null) {
                trendingScrollable.current.scrollBy({
                  left: -300,
                  behavior: "smooth",
                });
              }
            }}
          >
            &lt;
          </button>
          <button
            className="text-3xl hover:bg-black hover:text-white"
            onClick={() => {
              if (trendingScrollable.current != null) {
                trendingScrollable.current.scrollBy({
                  left: 300,
                  behavior: "smooth",
                });
                console.log(trendingScrollable);
              }
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className="flex flex-row overflow-scroll scrollbar-hide mx-24"
        ref={trendingScrollable}
      >
        <div className="mt-8 mx-6 flex">
          {productsList.map((item) => (
            <SmallTile
            key={item.id} 
              title={item.name}
              imgURL={item.picture}
              gender={item.gender}
              collection={item.collection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingSmallTiles;
