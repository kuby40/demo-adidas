import { User } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from 'react-icons/bs'
import useCart from '../../hooks/useCart';
import { useState } from 'react';
const WideTile = (props: {
  currentUser: User | null
  id: string;
  title: string;
  imgURL: string;
  color: string;
  size: string;
  price: number;
  indexNumber: number;
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const cart = useCart();
  const router = useRouter();
  const wishlisted = props.currentUser?.favoriteIDs.includes(props.id);
  const addToWishlistHandler = async () => {
    const data = props.id;
    axios
      .post("../api/updateWishlist", data)
      .then(() => {
        toast.success("Wishlist Updated");
        router.refresh();
      })
      .catch((e) => {
        toast.error("Please Log In To Wishlist");
      });
  }

  return (
    <div className=" border-black w-full lg:w-1/2 border-2 inline-flex">
      <div className="relative w-96 bg-gray-200">
        <Link href={`/products/${props.id}`} scroll={true}>
          <Image
            alt={props.title}
            width={200}
            height={200}
            src={props.imgURL}
            className=""
          />
        </Link>
      </div>
      <div className='p-3 w-full text-sm'>
        <h2 className="font-semibold">{props.title}</h2>

        <h4 className="text-xs uppercase">
          <span className='font-normal hidden'>COLOR:</span> {props.color}
        </h4>

        <h4 className="text-xs uppercase">
          <span className='font-normal hidden'>Size:</span> {props.size}
        </h4>
        <div className=''>
          <select className='border-black border px-6 py-1 sm:py-3' value={selectedQuantity} title={props.title} onChange={e => setSelectedQuantity(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        </div>
      <div className='p-3 w-full flex justify-end'>$ {(props.price * selectedQuantity).toFixed(2)}</div>
      <div className='p-3 font-bold cursor-pointer' onClick={() => cart.removeItem(props.indexNumber)}>x</div>
    </div>
  );
};

export default WideTile;
