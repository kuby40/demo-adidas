import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { IoBagOutline, IoCloseSharp, IoHeartOutline, IoMenuSharp, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import useWishlistModal from "../../hooks/useWishlistModal";
import { Product, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import useLoginModal from "../../hooks/useLoginModal";
import useCartModal from "../../hooks/useCartModal";
import { useEffect, useState } from "react";
import axios from "axios";
import useCart from "../../hooks/useCart";
import HamburgerNav from "./HamburgerNav";
import useNavBar from "../../hooks/useNavBar";

interface NavBarMobileInterface {
    currentUser: User;
}
const NavBarMobile: React.FC<NavBarMobileInterface> = ({ currentUser }) => {
    const wishlistModal = useWishlistModal();
    const loginModal = useLoginModal();
    const cartModal = useCartModal();
    const router = useRouter();
    const cart = useCart();
    const navBar = useNavBar();

    const showWishlistHandler = () => {
        wishlistModal.onOpen();
    };
    const handleProfileClick = () => {
        if (!currentUser) {
            loginModal.onOpen();
        } else {
            router.push("/account");
        }
    };
    const openCartHandler = () => {
        cartModal.onOpen();
    }

    const [showSearch, setShowSearch] = useState(false);
    const openSearchHandler = () => {
        setShowSearch(!showSearch)
        setFoundItems([]);
        setInputValue('')
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
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])
    useEffect(() => {
        if (showSearch && inputValue != '') {
            searchItems()
        }
    }, [inputValue]);
    return (
        <div className='lg:hidden'>
            <div className="flex p-4">
                <div className="flex flex-1 place-items-center">
                    <IoMenuSharp className="w-8 h-10 ml-3 cursor-pointer hover:-translate-y-1" onClick={navBar.onOpen} />
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
            <HamburgerNav />
            <div>
                {showSearch ?
                    <div className="h-10 flex"><input placeholder="What are you trying to find?" className="rounded-lg w-full bg-slate-100 pl-5" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                        <span className="relative text-4xl bg-black rounded-lg cursor-pointer" onClick={openSearchHandler}><IoCloseSharp className="text-white" /></span>
                    </div> : ''}
                {foundItems.length !== 0 ?
                    <div className='h-auto pt-2'>
                        <h3 className='font-bold'>Found Items</h3>
                        <ul className="table m-auto">
                            {foundItems.map(data => {
                                return (
                                    <div className='pl-2 sm:w-1/2 lg:w-1/3 sm:float-left p-2'>
                                        <Link className="hover:font-medium" href={`/products/${data.id}`} onClick={() => openSearchHandler()}>-{data.name}</Link>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    : ''}
            </div>
        </div>

    )
}

export default NavBarMobile;