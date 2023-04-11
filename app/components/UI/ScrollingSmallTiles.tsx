import { useRef } from "react";

const ScrollingSmallTiles = () => {
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
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
          <div className="w-40 h-40 mx-1 max-w-xs overflow-hidden bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingSmallTiles;
