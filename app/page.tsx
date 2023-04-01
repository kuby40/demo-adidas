'use client'
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import Logo from "../public/logo.png";
import HeaderPhoto from "../public/frontPageFirstPhoto2.jpg"
import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
const Home = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  });
  const winterHeader = cld.image("FakeBrand/pictures/frontPageFirstPhoto");

  const [showBanner, setShowBanner] = useState(false);
    const showBannerHandler = () => {
        setShowBanner(!showBanner);
  }
  
  return (
    <div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="flex flex-1 place-content-center">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={0}
              className="flex place-items-center justify-center m-0 cursor-pointer"
            ></Image>
          </div>
          <div className="flex flex-1 place-items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-10 ml-7 mr-4 cursor-pointer hover:-translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative h-85vh">
        <h1 className="absolute text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-white font-extrabold top-1/4 left-5">
          Casual.
          <div className="bg-clip-text from-white to-green-800">Redefined</div>
        </h1>
        <div className="imgBack -z-10">
          {/* <AdvancedImage
            cldImg={winterHeader}
          /> */}
          <Image
            src={HeaderPhoto}
            width={9999}
            height={9999}
            alt="three dudes chilling"
            className="imgBack"
          ></Image>
        </div>
        <div className="flex absolute bottom-0 ml-5 mb-6">
          <button className="flex bg-white p-3 font-bold hover:text-gray-500 border-slate-900 border-2">
            EXPLORE MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative ">
        <video className="-z-10" src={"WebsiteVideo.mp4"} autoPlay loop muted />
        {/* VIDEO ATTRIBUTION
           <a href="https://www.vecteezy.com/video/13219158-young-athletic-caucasian-girl-in-a-red-tank-top-doing-squats-on-a-lake-background-he-is-engaged-in-fitness">
            Young athletic Caucasian girl in a red tank top doing squats on a
            lake background. He is engaged in fitness. Stock Videos by Vecteezy
          </a> */}
        <div className="absolute text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-white font-extrabold top-1/4 left-5">
          <h1 className="">
            Get Fit. <br />
            Have Fun.
          </h1>
          <h3 className="">Look good, feel good</h3>
        </div>
        <button className="absolute uppercase bg-white p-3 font-bold hover:text-gray-500 border-slate-900 border-2 bottom-5 left-5">
          Shop Athletic Wear
        </button>
      </div>
      <div>
        <div className="mt-8 flex flex-wrap justify-center w-full">
          <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
            <div className="flex justify-center h-32">
              <CldImage
                alt="3 dudes chilling"
                width="150"
                height="150"
                src="FakeBrand/pictures/result_z5s6cp.png"
                sizes="100vw"
              />
            </div>
            <div className="h-12">
              <h5 className="flex justify-center underline font-bold mx-auto my-auto">
                <p className="hover:text-white hover:bg-black">Title</p>
              </h5>
            </div>
          </div>
          <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
            <div className="flex justify-center h-32">
              <CldImage
                alt="3 dudes chilling"
                width="150"
                height="150"
                src="FakeBrand/pictures/result_z5s6cp.png"
                sizes="100vw"
              />
            </div>
            <div className="h-12">
              <h5 className="flex justify-center underline font-bold">
                <p className="hover:text-white hover:bg-black">Title</p>
              </h5>
            </div>
          </div>
          <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
            <div className="flex justify-center h-32">
              <CldImage
                alt="3 dudes chilling"
                width="150"
                height="150"
                src="FakeBrand/pictures/result_z5s6cp.png"
                sizes="100vw"
              />
            </div>
            <div className="h-12">
              <h5 className="flex justify-center underline font-bold">
                <p className="hover:text-white hover:bg-black">Title</p>
              </h5>
            </div>
          </div>
          <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
            <div className="flex justify-center h-32">
              <CldImage
                alt="3 dudes chilling"
                width="150"
                height="150"
                src="FakeBrand/pictures/result_z5s6cp.png"
                sizes="100vw"
              />
            </div>
            <div className="h-12">
              <h5 className="flex justify-center underline font-bold">
                <p className="hover:text-white hover:bg-black">Title</p>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t-2">
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
              <p className="hover:text-white hover:bg-black mx-auto">
                View All
              </p>
            </h5>
          </div>
          <div className="flex">
            <button className="text-3xl hover:bg-black hover:text-white">
              &lt;
            </button>
            <button className="text-3xl hover:bg-black hover:text-white">
              &gt;
            </button>
          </div>
        </div>
        <div className="flex flex-row overflow-x-scroll scrollbar-hide">
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
      <div className="mt-10">
        <div className="flex flex-row overflow-x-auto xl:mx-28">
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h1>Popular Right Now</h1>
        </div>
        <div>
          <h2>Winter</h2>
          <h2>Spring</h2>
          <h2>Golf</h2>
          <h2>Running</h2>
          <h2>Hats</h2>
          <h2>Accessories</h2>
        </div>
      </div>

      {showBanner ? (
        <div className="absolute top-0 h-screen lg:h-1/2 w-full grid grid-row-4 bg-white lg:grid-cols-4 lg:flex lg:flex-row-reverse lg:text-left overflow-auto">
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
              SHOP NOW. PAY OVER TIME WITH KLARNA
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
}

export default Home;