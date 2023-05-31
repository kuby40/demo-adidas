"use client";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import Link from "next/link";
interface FooterProps {
  currentUser: User;
}
const Footer: React.FC<FooterProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <div>
      <div className="flex justify-center cursor-pointer p-4">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          ^Back to Top
        </button>
      </div>
      <div>
        <div className="flex justify-around bg-black text-white h-14">
          {currentUser === null && (
            <button
              className="uppercase hover:underline hover:cursor-pointer"
              onClick={loginModal.onOpen}
            >
              Login
            </button>
          )}
          {currentUser != null && (
            <button
              className="uppercase hover:underline hover:cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
          <button className="uppercase hover:underline hover:cursor-pointer">
            Your bag
          </button>
        </div>
        {currentUser === null && (
          <div className="bg-amber-300 h-40">
            <div className="h-1/2">
              <h1 className="uppercase font-extrabold text-center py-7">
                Become a member & get 15% off
              </h1>
            </div>
            <div className="h-1/2 flex justify-center">
              <button
                className="border-black bg-black text-white h-3/4 p-3 rounded-md hover:underline hover:cursor-pointer"
                onClick={registerModal.onOpen}
              >
                Sign up for free
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-black text-white font-bold text-xs border-t-2 border-white">
        <ul>
          <div className="flex w-full p-3">
            <li className="flex w-1/2 justify-center hover:underline hover:cursor-pointer">
              <Link href="/demo">fakeClub</Link>
            </li>
            <li className="flex w-1/2 justify-center hover:underline hover:cursor-pointer">
              <Link href="/demo">Store Locator</Link>
            </li>
          </div>
          <div className="flex w-full p-3">
            <li className="flex w-1/2 justify-center hover:underline hover:cursor-pointer">
              <Link href="/demo">Returns & Exchanges</Link>
            </li>
            <li className="flex w-1/2 justify-center hover:underline hover:cursor-pointer">
              <Link href="/demo">Mobile Apps</Link>
            </li>
          </div>
          <div className="flex w-full p-3">
            <li className="flex w-1/2 justify-center hover:underline hover:cursor-pointer">
              <Link href="/demo">Order Tracker</Link>
            </li>
            <li className="flex w-1/2 justify-center hover:underline hover:cursor-pointer">
              <Link href="/demo">Help and Customer Service</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex-row px-12 py-10 justify-between hidden lg:flex xl:px-36">
        <div>
          <h2 className="font-bold text-2xl pb-3">Products</h2>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Shoes</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Clothing</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Accessories</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">New Arrivals</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Best Sellers</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Release Dates</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Outlet</Link>
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            <Link href="/demo">Fake Exclusives</Link>
          </h5>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Sports</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Soccer</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Running</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Basketball</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Training</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Golf</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Hockey</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Outdoor</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Tennis</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Snowboarding</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Volleyball</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Swimming</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Skateboarding</Link>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Collections</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">No. 01</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">No. 02</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 03</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">No. 04</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 05</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 06</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 07</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 08</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 09</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> No. 10</Link>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Support</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Help & Customer Service</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Contact Us</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Returns & Exchanges</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Order Tracking</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Gift Cards</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Store Locator</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> How to Clean</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Bra Fit Guide</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Affiliate Program</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Team Uniform Inquiries</Link>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Company Info</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> About Us</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Careers</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Fake News</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Fake Club</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Sustainability</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Mobile Apps</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo">Fake Stories</Link>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Follow Us</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Facebook</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Instagram</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Twitter</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Pinterest</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> TikTok</Link>
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              <Link href="/demo"> Youtube</Link>
            </h5>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 text-white font-bold text-xs border-t-2 border-zinc-500">
        <ul>
          <div className="flex py-4">
            <li className="flex justify-center w-1/2 hover:underline hover:cursor-pointer">
              <Link href="/demo"> Cookie Settings</Link>
            </li>
            <li className="flex justify-center w-1/2 hover:underline hover:cursor-pointer">
              <Link href="/demo"> Cookies</Link>
            </li>
          </div>
          <div className="flex justify-around py-4">
            <li className="flex justify-center w-1/2 hover:underline hover:cursor-pointer">
              <Link href="/demo"> Privacy Policy</Link>
            </li>
            <li className="flex justify-center w-1/2 hover:underline hover:cursor-pointer">
              <Link href="/demo">Terms and Conditions</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="bg-zinc-900 flex justify-center p-3 text-white">
        <span>&copy;2023 Fake Limited</span>
      </div>
    </div>
  );
};

export default Footer;
