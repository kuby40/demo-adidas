"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/logo.png";
import useLoginModal from "../../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { IoMenuSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

interface HeaderProps {
  currentUser: User;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleProfileClick = () => {
    if (!currentUser) {
      loginModal.onOpen(); 
    } else {
      router.push("/account");
    }
  };
  //States
  const [showBanner, setShowBanner] = useState(false);
  const showBannerHandler = () => {
    setShowBanner(!showBanner);
  };

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
          <IoHeartOutline className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1" />
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
          <IoSearchOutline className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1" />
          <IoBagOutline className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1" />
        </div>
      </div>

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
