'use client';
import Link from "next/link";
import { useState } from "react";

const Home = () => {
    const [showBanner, setShowBanner] = useState(false);

    const showBannerHandler = () => {
        setShowBanner(!showBanner);
    }

    return (
        <div className="grid grid-rows-4">
            <div onClick={showBannerHandler} className="row-auto bg-black text-white text-center h-11 cursor-pointer"><p className="mt-2">Join the Club Today. &#711;</p></div>
            <div className="row-auto bg-red-500">2</div>
            <div className="row-auto bg-blue-500">3</div>
            {showBanner ? <div className="absolute h-screen lg:h-1/2 w-full grid grid-row-4 bg-white lg:grid-cols-4 lg:flex lg:flex-row-reverse lg:text-left overflow-auto">
                <div>
                <button type="button" onClick={showBannerHandler} className="float-right p-5 text-black text-6xl">&#10062;</button></div>
                <div className="ml-24 mb-12 lg:self-center lg:m-0">
                    <h3 className="font-extrabold">JOIN THE CLUB. GET REWARDED</h3>
                    <p className="py-5 mr-12 lg:m-0 lg:py-5">Sign up for adiClub to unlock unlimited free standard shipping and start earning points on every order.</p>
                    <Link as={'h3'} href="#" className="underline">LEARN MORE</Link>
                </div>
                <div className="ml-24 mb-12 lg:self-center lg:m-0 lg:p-2.5">
                    <h3 className="font-extrabold">SHOP WORRY FREE FOR THE HOLIDAYS</h3>
                    <p className="py-5 mr-12 lg:m-0 lg:py-5">Eligible orders from October 15 to December 31 can be returned until January 31, 2023. Exclusions apply, not applicable on Final Sale.
Order before December 10th for best shipping times.</p>
                    <Link as={'h3'} href="#" className="underline">LEARN MORE</Link>
                    </div>
                <div className="ml-24 lg:self-center lg:ml-5">
                    <h3 className="font-extrabold">SHOP NOW. PAY OVER TIME WITH KLARNA</h3>
                    <p className="py-5 mr-12 lg:m-0 lg:py-5">With Klarna, pay in 4 interest-free installments. The first payment is taken when the order is processed and the remaining 3 are automatically taken every two weeks.</p>
                    <Link as={'h3'} href="#" className="underline">LEARN MORE</Link>
                    </div>
            </div> : ''}
        </div>

    )
}

export default Home;