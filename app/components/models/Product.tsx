"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import Button from "../UI/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
interface ProductsProps {
  product: Product;
}
const Product: React.FC<ProductsProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.stock[0].color);
  const [selectedSize, setSelectedSize] = useState("");
  const [addBagLabel, setAddToBagLabel] = useState("Select a Size");
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
    return null;
  };
  const addToWishlist = () => {
    return null;
  };
  return (
    <div className="grid lg:grid-cols-2">
      <div className="ml-7">
        <div className="font-extrabold text-xl">{product.name}</div>
        <div className="my-2 font-bold">$ {product.price}</div>
      </div>
      <div className="col-span-1 relative h-85vh lg:h-screen ">
        <Image
          className="bg-slate-200"
          src={product.picture}
          alt={product.description.title}
          fill
        ></Image>
      </div>
      <Button
        label="Wishlist"
        icon={AiOutlineHeart}
        onClick={addToWishlist}
      ></Button>
      <div className="col-span-1 ml-6">
        <div className="my-3 font-bold">
          {productColors.length} Colors Available:
        </div>
        <div>
          {productColors.map((color) => (
            <button
              className={
                `bg-slate-100 p-4 mx-1 my-1 uppercase ` +
                (selectedColor === color ? "underline bg-slate-300" : "")
              }
              onClick={(e) => {
                setSelectedColor(color);
                setSelectedSize("");
                setAddToBagLabel('Select a Size')
              }}
            >
              {color}
            </button>
          ))}
        </div>
        <div className="flex justify-between my-5">
          <div className="font-bold">Sizes</div>
          <div className="text-xs mr-7">Find your Size</div>
        </div>
        <div className="flex flex-wrap justify-center">
          {sizes.map((element) => (
            <button
              className={
                `text-xs border w-40 p-3 ` +
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
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
