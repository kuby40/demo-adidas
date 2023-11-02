import Logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import useNavBar from "../../hooks/useNavBar";

const HamburgerNav: React.FC = () => {
    const navBar = useNavBar()
    return (
        <>
            {navBar.isOpen ?
                <div className="fixed bg-white top-0 w-full h-full z-10">
            <div className="flex p-2 justify-between">
                <Link href={"/"} className="ml-auto mr-auto ">
                <Image
                    src={Logo}
                    alt="logo"
                    width={100}
                    height={0}
                    className="place-items-center m-0 cursor-pointer"
                ></Image>
                </Link>
                <span className="text-4xl cursor-pointer" onClick={navBar.onClose}>X</span>
            </div>
            <div className="border-t-2 border-b-2 p-5 text-lg tracking-widest">
                <div className="font-bold flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>MEN</span><span className="">&gt;</span></Link></div>
                        <div className="font-bold flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>WOMAN</span><span>&gt;</span></Link></div>
                        <div className="font-bold flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>KIDS</span><span>&gt;</span></Link></div>
                        <div className="flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>GIFTS</span><span>&gt;</span></Link></div>
                        <div className="flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>OUTLET</span><span>&gt;</span></Link></div>
                        <div className="flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>SPORTS</span><span>&gt;</span></Link></div>
                        <div className="flex justify-between p-2 cursor-pointer"><Link href={'/demo'}><span>BRANDS</span><span>&gt;</span></Link></div>

            </div>
            <div className="p-5 text-lg">
                <div className="p-2 cursor-pointer">My Account</div>
                <div className="p-2 cursor-pointer">Returns & Exchanges</div>
                <div className="p-2 cursor-pointer">Order Tracker</div>
                <div className="p-2 cursor-pointer">fakeClub</div>
                <div className="p-2 cursor-pointer">Gift Cards</div>
                <div className="p-2 cursor-pointer">Store Locator</div>
                <div className="p-2 cursor-pointer">Mobile Apps</div>
            </div>
                </div>
                : ''}
        </>
    )
}

export default HamburgerNav;