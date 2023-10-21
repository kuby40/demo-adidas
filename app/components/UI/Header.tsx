"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../../public/logo.png";
import useLoginModal from "../../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { Product, User } from "@prisma/client";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import useWishlistModal from "../../hooks/useWishlistModal";
import useCartModal from "../../hooks/useCartModal";
import useCart from "../../hooks/useCart";
import axios from "axios";
interface HeaderProps {
  currentUser: User;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const cart = useCart();
  const loginModal = useLoginModal();
  const wishlistModal = useWishlistModal();
  const cartModal = useCartModal();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  }, [])
  const handleProfileClick = () => {
    if (!currentUser) {
      loginModal.onOpen(); 
    } else {
      router.push("/account");
    }
  };
  const [showBanner, setShowBanner] = useState(false);
  const showBannerHandler = () => {
    setShowBanner(!showBanner);
  };
  const showWishlistHandler = () => {
    wishlistModal.onOpen();
  };

  const openCartHandler = () => {
    cartModal.onOpen();
  }
  const [showSearch, setShowSearch] = useState(false);
  const openSearchHandler = () => {
    setShowSearch(!showSearch)
  }
  const [inputValue, setInputValue] = useState('');
  const [foundItems, setFoundItems] = useState<Product[]>([])
  const searchItems = async () => {
    axios.get('api/products/search', {
      params: {
        find: inputValue
      }
    }).then((response) => {
      setFoundItems(response.data)
    })
  };

  useEffect(() => {
    if (showSearch && inputValue != '') {
      searchItems()
    }
  }, [inputValue]);

  return (
    <div className="grid grid-rows-2">
      <div
        onClick={showBannerHandler}
        className="row-span-1 bg-black text-white cursor-pointer"
      >
        <div className="grid grid-cols-3 h-full">
          <span className="col-span-1"></span>
          <p className="col-span-1 m-auto text-sm">
            Join the Club Today.
            <span className="p-3 invisible lg:visible">&#8659;</span>
          </p>
          <span className="col-span-1 my-auto ml-auto mr-5 flex-right lg:invisible">
            &#8659;
          </span>
        </div>
      </div>
      <div className="flex p-4">
        <div className="flex flex-1 place-items-center">
          <IoMenuSharp className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1" />
          <IoHeartOutline
            onClick={showWishlistHandler}
            className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
          />
          <h4 className="bg-blue-500 text-s px-2 rounded-full -translate-y-4 -translate-x-3">
            {currentUser != null ? currentUser.favoriteIDs.length : ""}
          </h4>
        </div>
        <div className="flex flex-1 place-content-center">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={0}
              className="flex place-items-center justify-center m-0 cursor-pointer"
            ></Image>
          </Link>
        </div>
        <div className="flex flex-1 place-items-center justify-end">
          <IoPersonOutline
            className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
            onClick={handleProfileClick}
          />
          <IoSearchOutline className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1" onClick={openSearchHandler} />
          <IoBagOutline
            className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
            onClick={openCartHandler}
          />
          <h4 className="bg-blue-500 text-s px-2 rounded-full -translate-y-4 -translate-x-3">
            {isClient ? cart.items.length : 0}
          </h4>
        </div>
      </div>
      {showSearch ? <div className="h-10 flex"><input placeholder="What are you trying to find?" className="rounded-lg w-full bg-slate-100 pl-5" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} /><span className="relative text-4xl bg-black rounded-lg cursor-pointer" onClick={openSearchHandler}><IoCloseSharp className="text-white"/></span></div> : ''}
      {foundItems ? '' : ''}
      {showBanner ? (
        <div className="absolute top-0 h-screen lg:h-1/2 w-full grid grid-row-4 bg-white lg:grid-cols-4 lg:flex lg:flex-row-reverse lg:text-left z-10">
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
            <Link as={"h3"} href="#" className="underline">
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
            <Link as={"h3"} href="#" className="underline">
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
};

export default Header;
