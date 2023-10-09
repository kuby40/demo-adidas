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
  gender?: string;
  collection?: string;
  cartLayout?: boolean;
  color?: string;
  size?: string;
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
  const layoutToRender = () => {
    if (props.cartLayout) {
      return <div></div>
    } else {
      if (wishlisted)
        return <BsHeartFill className='absolute right-3 top-3 w-8 h-8 cursor-pointer text-red-600' onClick={addToWishlistHandler} />
      else return <AiOutlineHeart className='absolute right-3 top-3 w-8 h-8 cursor-pointer' onClick={addToWishlistHandler} />
    }
  }
  const layout = layoutToRender();
  return (
    <div className="mx-1">
      
      <div className="relative w-60 h-60 max-w-xs overflow-hidden bg-gray-200">
        {layout}
        <Link href={`/products/${props.id}`} scroll={true}>
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
      {props.color ?
        <h4 className="font-bold uppercase">
        <span className='font-normal'>COLOR:</span> {props.color}
      </h4> : ''}
      {props.size ?
        <h4 className="font-bold uppercase">
        <span className='font-normal'>Size:</span> {props.size}
      </h4> : '' }
    </div>
  );
};

export default SmallTile;
