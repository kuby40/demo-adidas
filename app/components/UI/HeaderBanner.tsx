'use client'
import { useState } from "react";
import Link from 'next/link'
import disableScroll from 'disable-scroll';

const HeaderBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const showBannerHandler = () => {
        setShowBanner(!showBanner);
        if (showBanner) {
            disableScroll.off()
        }
        else {
            disableScroll.on();
        }
    };
    const banner =
        <div className={`translate duration-300 absolute top-0 h-screen lg:h-1/2 w-full grid grid-row-4 bg-white lg:grid-cols-4 lg:flex lg:flex-row-reverse lg:text-left z-10 text-black
            ${showBanner ? "translate-y-0" : ""}
            ${showBanner ? "opacity-100" : ""}`}>
        <div>
            <button
                type="button"
                onClick={showBannerHandler}
                className="float-right p-5 text-black text-4xl"
            >
                ❌
            </button>
        </div>
        <div className="ml-24 mb-12 lg:self-center lg:m-0">
            <h3 className="font-extrabold">JOIN THE CLUB. GET REWARDED</h3>
            <p className="py-5 mr-12 lg:m-0 lg:py-5">
                Sign up for adiClub to unlock unlimited free standard shipping and
                start earning points on every order.
            </p>
                <Link href="/demo" className="underline hover:bg-black hover:text-white">
                LEARN MORE
            </Link>
        </div>
        <div className="ml-24 mb-12 lg:self-center lg:m-0 lg:p-2.5">
            <h3 className="font-extrabold">SHOP WORRY FREE FOR THE HOLIDAYS</h3>
            <p className="py-5 mr-12 lg:m-0 lg:py-5">
                Eligible orders from October 15 to December 31 can be returned
                until January 31, 2023. Exclusions apply, not applicable on Final
                Sale. Order before December 10th for best shipping times.
            </p>
                <Link href="/demo" className="underline hover:bg-black hover:text-white">
                LEARN MORE
            </Link>
        </div>
        <div className="ml-24 lg:self-center lg:ml-5">
            <h3 className="font-extrabold">
                SHOP NOW. PAY OVER TIME WITH CLARNA
            </h3>
            <p className="py-5 mr-12 lg:m-0 lg:py-5">
                With Clarna, pay in 4 interest-free installments. The first
                payment is taken when the order is processed and the remaining 3
                are automatically taken every two weeks.
            </p>
                <Link href="/demo" className="underline hover:bg-black hover:text-white">
                LEARN MORE
            </Link>
        </div>
    </div >
    return (
            <div
                className="row-span-1 bg-black text-white cursor-pointer h-12"
            >
            {showBanner ? banner :
                <div onClick={showBannerHandler} className="grid grid-cols-3 h-full">
                    <span className="col-span-1"></span>
                    <p className="col-span-1 m-auto text-sm">
                        Join the Club Today.
                        <span className="p-3 invisible lg:visible">&#8659;</span>
                    </p>
                    <span className="col-span-1 my-auto ml-auto mr-5 flex-right lg:invisible">
                        &#8659;
                    </span>
                </div>
            }
            </div>
    )
}
export default HeaderBanner;