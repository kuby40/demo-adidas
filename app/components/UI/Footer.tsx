'use client'
import useRegisterModal from "../../hooks/useRegisterModal";
const Footer = () => {
  const registerModal = useRegisterModal();
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
          <button className="uppercase">Login</button>
          <button className="uppercase">Your bag</button>
        </div>
        <div className="bg-amber-300 h-40">
          <div className="h-1/2">
            <h1 className="uppercase font-extrabold text-center py-7">
              Become a member & get 15% off
            </h1>
          </div>
          <div className="h-1/2 flex justify-center">
            <button
              className="border-black bg-black text-white h-3/4 p-3 rounded-md"
              onClick={registerModal.onOpen}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-bold text-xs">
        <ul>
          <div className="flex justify-around p-3">
            <li>One</li>
            <li>Two</li>
          </div>
          <div className="flex justify-around p-3">
            <li>One</li>
            <li>Two</li>
          </div>
          <div className="flex justify-around p-3">
            <li>One</li>
            <li>Two</li>
          </div>
        </ul>
      </div>
      <div className="flex-row px-12 py-10 justify-between hidden lg:flex xl:px-36">
        <div>
          <h2 className="font-bold text-2xl pb-3">Products</h2>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Shoes
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Clothing
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Accessories
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            New Arrivals
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Best Sellers
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Release Dates
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Outlet
          </h5>
          <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
            Fake Exclusives
          </h5>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Sports</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Soccer
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Running
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Basketball
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Training
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Golf
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Hockey
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Outdoor
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Tennis
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Snowboarding
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Volleyball
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Swimming
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Skateboarding
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Collections</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 01
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 02
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 03
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 04
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 05
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 06
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 07
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 08
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 09
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              No. 10
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Support</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Help & Customer Service
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Contact Us
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Returns & Exchanges
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Order Tracking
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Gift Cards
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Store Locator
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              How to Clean
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Bra Fit Guide
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Affiliate Program
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Team Uniform Inquiries
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Company Info</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              About Us
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Careers
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Fake News
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Fake Club
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Sustainability
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Mobile Apps
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Fake Stories
            </h5>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-2xl pb-3">Follow Us</h2>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Facebook
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Instagram
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Twitter
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Pinterest
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              TikTok
            </h5>
            <h5 className="pb-1 font-thin text-sm hover:underline hover:cursor-pointer">
              Youtube
            </h5>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 text-white font-bold text-xs border-t-2 border-zinc-500">
        <ul>
          <div className="flex justify-around py-4">
            <li>Cookie Settings</li>
            <li>Cookies</li>
          </div>
          <div className="flex justify-around py-4">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </div>
        </ul>
      </div>
      <div className="bg-zinc-900 flex justify-center p-3 text-white">
        <span>&copy;2023 Fake Limited</span>
      </div>
    </div>
  );
}

export default Footer;