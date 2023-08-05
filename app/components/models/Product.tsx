"use client";
import { Product, User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import Button from "../UI/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagPlus, BsHeartFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ReactStars from "react-stars";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import useCart from "../../hooks/useCart";
interface ProductsProps {
  product: Product;
  currentUser: User | null;
}
const Product: React.FC<ProductsProps> = ({ product, currentUser }) => {
  const [selectedColor, setSelectedColor] = useState(product.stock[0].color);
  const [selectedSize, setSelectedSize] = useState("");
  const [addBagLabel, setAddToBagLabel] = useState("Select a Size");
  const [showReviewList, setReviewList] = useState(false);
  const [showDescriptionList, setShowDescriptionList] = useState(false);
  const [showDetailsList, setShowDetailsList] = useState(false);
  const wishlisted = currentUser?.favoriteIDs?.includes(product.id);
  const router = useRouter();
  const cart = useCart();

  const showReviewsListHandler = () => {
    setReviewList(!showReviewList);
  };
  const showDescriptionListHandler = () => {
    setShowDescriptionList(!showDescriptionList);
  };
  const showDetailsListHandler = () => {
    setShowDetailsList(!showDetailsList);
  };
  const findUniqueColors = () => {
    const colorsArray: string | string[] = [];

    product.stock.forEach((element) => {
      if (colorsArray.indexOf(element.color) === -1) {
        colorsArray.push(element.color);
      }
    });
    return colorsArray;
  };
  const productColors = findUniqueColors();
  const getSizes = (selectedColor: string) => {
    const list: ({ color: string; size: string; available: number } & {})[] =
      [];
    product.stock.forEach((element) => {
      if (element.color === selectedColor) {
        list.push(element);
      }
    });
    return list;
  };
  const sizes = getSizes(selectedColor);
  const addToBag = () => {
    cart.addItem(product, selectedColor, selectedSize);
  };
  const addToWishlistHandler = async () => {
    const data = product.id;
    axios
      .post("../api/updateWishlist", data)
      .then(() => {
        toast.success("Wishlist Updated");
        router.refresh();
      })
      .catch((e) => {
        toast.error("Please Log In To Wishlist");
      });
  };
  const averageReviewStars =
    product.reviews.reduce((p, c) => p + c.stars, 0) / product.reviews.length;
  const reviewList = (
    <div
      className="cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul>
        {product.reviews.map((review, inx) => (
          <li className="m-5" key={inx}>
            <h2>{review.title}</h2>
            <ReactStars edit={false} value={review.stars} />
            <p className="font-normal text-sm">{review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  const descriptionList = (
    <div
      className="cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h1 className="mt-5 mb-3 text-3xl">{product.description.title}</h1>
      <p className="font-normal mt-5">{product.description.explanation}</p>
    </div>
  );
  const detailsList = (
    <ul
      className="mt-5 font-normal list-disc ml-5 cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {product.details.map((item, inx) => (
        <li key={inx}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="grid lg:grid-cols-2">
      <div className="">
        <div className="ml-7">
          <div className="font-extrabold text-xl lg:hidden">{product.name}</div>
          <div className="my-2 font-bold lg:hidden">$ {product.price}</div>
        </div>
        <div className="col-span-1 relative h-[35rem] sm:h[40rem] md:h-[50rem]">
          <Image
            className="bg-slate-200"
            src={product.picture}
            alt={product.description.title}
            fill
          ></Image>
        </div>
        <Button
          fillIn={wishlisted ? true : false}
          label={`${wishlisted ? "Wishlisted" : "Wishlist"}`}
          icon={wishlisted ? BsHeartFill : AiOutlineHeart}
          onClick={addToWishlistHandler}
        ></Button>
      </div>

      <div className="col-span-1 ml-6">
        <div className="font-extrabold text-xl hidden lg:flex justify-center">
          {product.name}
        </div>
        <div className="my-2 font-bold hidden lg:flex justify-center">
          $ {product.price}
        </div>
        <div className="my-3 font-bold">
          {productColors.length} Colors Available:
        </div>
        <div>
          {productColors.map((color, inx) => (
            <button
              key={inx}
              className={
                `bg-slate-100 p-4 mx-1 my-1 uppercase ` +
                (selectedColor === color ? "underline bg-slate-300" : "")
              }
              onClick={(e) => {
                setSelectedColor(color);
                setSelectedSize("");
                setAddToBagLabel("Select a Size");
              }}
            >
              {color}
            </button>
          ))}
        </div>
        <div className="flex justify-between my-5">
          <div className="font-bold">Sizes</div>
          <div className="flex text-xs mr-7">
            <BiRuler className="mr-2 text-xl" />
            Find your Size
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {sizes.map((element, inx) => (
            <button
              key={inx}
              className={
                `text-xs border w-40 p-3 uppercase ` +
                (selectedSize === element.size ? "bg-black text-white " : "") +
                (element.available === 0 ? "line-through text-gray-400" : "")
              }
              onClick={(e) => {
                if (element.available != 0) {
                  setSelectedSize(element.size);
                  setAddToBagLabel("Add to Bag");
                }
              }}
            >
              {element.size}
            </button>
          ))}
        </div>
        <div className="m-5">
          <Button
            icon={BsBagPlus}
            label={addBagLabel}
            onClick={addToBag}
            disabled={selectedSize != "" ? false : true}
          ></Button>
        </div>
        <div>
          <div className="flex">
            <FaTruck className="mr-2" />
            <span className="underline hover:bg-black hover:text-white hover:cursor-pointer">
              Free Standard Shipping for fakeClub members
            </span>
          </div>
          <div className="flex">
            <FaTruckLoading className="mr-2" />
            <span className="underline hover:bg-black hover:text-white hover:cursor-pointer">
              Free Returns & Exchanges
            </span>
          </div>
        </div>
        <div className="mt-10 hover:cursor-pointer">
          <div
            className="border p-5 font-bold inline-block w-full"
            onClick={showReviewsListHandler}
          >
            Reviews ({product.reviews.length})
            <span className="flex float-right">
              {averageReviewStars}
              <ReactStars
                className="ml-1"
                edit={false}
                value={averageReviewStars}
                color1="white"
                color2="#4CBB17"
              />
              <MdKeyboardDoubleArrowDown className="text-xl" />
            </span>
            {showReviewList ? reviewList : ""}
          </div>
          <div
            className="border p-5 font-bold inline-block w-full"
            onClick={showDescriptionListHandler}
          >
            Description
            <MdKeyboardDoubleArrowDown className="text-xl float-right" />
            {showDescriptionList ? descriptionList : ""}
          </div>
          <div
            className="border p-5 font-bold inline-block w-full"
            onClick={showDetailsListHandler}
          >
            Details{" "}
            <MdKeyboardDoubleArrowDown className="text-xl float-right" />
            {showDetailsList ? detailsList : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
