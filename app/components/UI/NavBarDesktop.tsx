import Link from "next/link";
import Image from 'next/image';
import Logo from "../../../public/logo.png";
import { IoBagOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { User, Product } from "@prisma/client";
import useLoginModal from "../../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import useWishlistModal from "../../hooks/useWishlistModal";
import useCartModal from "../../hooks/useCartModal";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";
import axios from "axios";
interface NavBarDesktopInterface {
    currentUser: User;
}
const NavBarDesktop: React.FC<NavBarDesktopInterface> = ({ currentUser }) => {
    const loginModal = useLoginModal();
    const router = useRouter();
    const wishlistModal = useWishlistModal();
    const cartModal = useCartModal();
    const cart = useCart();
    const handleProfileClick = () => {
        if (!currentUser) {
            loginModal.onOpen();
        } else {
            router.push("/account");
        }
    };
    const showWishlistHandler = () => {
        wishlistModal.onOpen();
    };
    const openCartHandler = () => {
        cartModal.onOpen();
    }
    const [inputValue, setInputValue] = useState('');
    const [foundItems, setFoundItems] = useState<Product[]>([])
    const searchItems = async () => {
        axios.get('/api/products/search', {
            params: {
                find: inputValue
            }
        }).then((response) => {
            setFoundItems(response.data)
            console.log(foundItems)
        })
    };
    useEffect(() => {
        if (inputValue !== '') {
            searchItems()
        }
    }, [inputValue]);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className='hidden lg:block'>
            <div className="flex justify-end text-sm p-2">
                <span className="px-3 hover:underline hover:cursor-pointer">help</span>
                <span className="px-3 hover:underline hover:cursor-pointer">orders and returns</span>
                <span className="px-3 hover:underline hover:cursor-pointer">become a member</span>
            </div>
            <div className="flex pl-3 pb-3">
                <Link href={"/"}>
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        height={0}
                        className="flex place-items-center justify-center m-0 cursor-pointer mr-8 xl:mr-0"
                    ></Image>
                </Link>
                <div className="xl:m-auto pt-4">
                    <Link href={'/men'} className="font-bold p-2 border-black hover:border-b-4">MEN</Link>
                    <Link href={'/women'} className="font-bold p-2 border-black hover:border-b-4">WOMEN</Link>
                    <Link href={'/demo'} className="font-bold p-2 border-black hover:border-b-4">KIDS</Link>
                    <Link href={'/demo'} className="p-2 border-black hover:border-b-4">GIFTS</Link>
                    <Link href={'/demo'} className="p-2 border-black hover:border-b-4">OUTLET</Link>
                    <Link href={'/demo'} className="p-2 border-black hover:border-b-4">SPORTS</Link>
                </div>
                <div className="flex place-items-center ml-auto">
                    <div className="flex place-items-center mr-4 border-2 border-slate-300">
                        <input placeholder="Search" className="w-full bg-slate-200 pl-5 outline-none" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}></input><IoSearchOutline className="flex bg-slate-200 place-items-center text-2xl" />
                    </div>
                    <IoPersonOutline
                        className="w-8 h-10 mr-5 cursor-pointer hover:-translate-y-1"
                        onClick={handleProfileClick}
                    />
                    <IoHeartOutline
                        onClick={showWishlistHandler}
                        className="w-8 h-10 cursor-pointer hover:-translate-y-1"
                    />
                    <h4 className="bg-blue-500 text-s px-2 rounded-full -translate-y-4 -translate-x-3">
                        {currentUser != null ? currentUser.favoriteIDs.length : ""}
                    </h4>
                    <IoBagOutline
                        className="w-8 h-10  cursor-pointer hover:-translate-y-1"
                        onClick={openCartHandler}
                    />
                    <h4 className="bg-blue-500 text-s px-2 rounded-full -translate-y-4 -translate-x-3">
                        {isClient ? cart.items.length : 0}
                    </h4>
                </div>
            </div>
            {foundItems.length !== 0 && inputValue !== '' ?
                <div className='h-auto pt-2'>
                    <h3 className='flex font-bold justify-center border-b-stone-900 border-b-2'>Found Items</h3>
                    <ul className="table m-auto">
                        {foundItems.map(data => {
                            return (
                                <div className='pl-2 sm:w-1/2 lg:w-1/3 sm:float-left p-2'>
                                    <Link className="hover:font-medium" href={`/products/${data.id}`} onClick={() => setInputValue('')}>-{data.name}</Link>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                : ''}
        </div>
    )
}

export default NavBarDesktop;