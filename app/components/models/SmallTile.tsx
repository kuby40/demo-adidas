import { User } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AiOutlineHeart } from "react-icons/ai";
import {BsHeartFill} from 'react-icons/bs'
const SmallTile = (props: {
  currentUser: User | null
  id: string;
  title: string;
  imgURL: string;
  gender: string;
  collection: string;
}) => {
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
    <div className="mx-1">
      <div className="relative w-60 h-60 max-w-xs overflow-hidden bg-gray-200">
        {wishlisted ? 
        <BsHeartFill className='absolute right-3 top-3 w-8 h-8 cursor-pointer text-red-600' onClick={addToWishlistHandler}/>:
        <AiOutlineHeart className='absolute right-3 top-3 w-8 h-8 cursor-pointer' onClick={addToWishlistHandler}/>}
        <Link href={`products/${props.id}`}>
        <Image
          alt={props.title}
          width={300}
          height={300}
          src={props.imgURL}
          className="mx-auto my-auto"
        />
        </Link>
      </div>
      <h2 className="font-semibold">{props.title}</h2>
      
      <h4 className="font-thin">
        {props.gender}
      </h4>
      <h4 className="font-thin">
        {props.collection}
      </h4>
    </div>
  );
};

export default SmallTile;
