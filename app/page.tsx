'use client';
import Link from "next/link";
import { useState } from "react";

const Home = () => {
    const [showBanner, setShowBanner] = useState(false);

    const showBannerHandler = () => {
        setShowBanner(!showBanner);
    }




    return (
      <div className="grid grid-rows-2">
        <div
          onClick={showBannerHandler}
          className="row-span-1 bg-black text-white cursor-pointer"
        >
          <div className="grid grid-cols-3 h-full">
            <span className="col-span-1"></span>
            <p className="col-span-1 m-auto">
              Join the Club Today. <span className="p-3 invisible lg:visible">&#8659;</span>
            </p>
            <span className="col-span-1 my-auto ml-auto mr-5 flex-right lg:invisible">&#8659;</span>
          </div>
        </div>
        <div className="h-14 block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-10 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            className="w-8 h-10 ml-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="row-span-1 bg-blue-500">3</div>
        {showBanner ? (
          <div className="absolute h-screen lg:h-1/2 w-full grid grid-row-4 bg-white lg:grid-cols-4 lg:flex lg:flex-row-reverse lg:text-left overflow-auto">
            <div>
              <button
                type="button"
                onClick={showBannerHandler}
                className="float-right p-5 text-black text-6xl"
              >
                &#10062;
              </button>
            </div>
            <div className="ml-24 mb-12 lg:self-center lg:m-0">
              <h3 className="font-extrabold">JOIN THE CLUB. GET REWARDED</h3>
              <p className="py-5 mr-12 lg:m-0 lg:py-5">
                Sign up for adiClub to unlock unlimited free standard shipping
                and start earning points on every order.
              </p>
              <Link as={"h3"} href="#" className="underline">
                LEARN MORE
              </Link>
            </div>
            <div className="ml-24 mb-12 lg:self-center lg:m-0 lg:p-2.5">
              <h3 className="font-extrabold">
                SHOP WORRY FREE FOR THE HOLIDAYS
              </h3>
              <p className="py-5 mr-12 lg:m-0 lg:py-5">
                Eligible orders from October 15 to December 31 can be returned
                until January 31, 2023. Exclusions apply, not applicable on
                Final Sale. Order before December 10th for best shipping times.
              </p>
              <Link as={"h3"} href="#" className="underline">
                LEARN MORE
              </Link>
            </div>
            <div className="ml-24 lg:self-center lg:ml-5">
              <h3 className="font-extrabold">
                SHOP NOW. PAY OVER TIME WITH KLARNA
              </h3>
              <p className="py-5 mr-12 lg:m-0 lg:py-5">
                With Klarna, pay in 4 interest-free installments. The first
                payment is taken when the order is processed and the remaining 3
                are automatically taken every two weeks.
              </p>
              <Link as={"h3"} href="#" className="underline">
                LEARN MORE
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default Home;