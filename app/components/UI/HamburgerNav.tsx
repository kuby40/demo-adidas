import Logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import useNavBar from "../../hooks/useNavBar";
import disableScroll from 'disable-scroll';
const HamburgerNav: React.FC = () => {
    const navBar = useNavBar()
    const closeNav = () => {
        navBar.onClose();
        disableScroll.off();
    }
    return (
        <div className={`translate duration-500 h-full fixed bg-white top-0 w-full z-10 
                ${navBar.isOpen ? "-translate-x-0" : "-translate-x-full"}
                ${navBar.isOpen ? "opacity-100" : "opacity-0"}`}>
            <div className="flex p-2 justify-between">
                <Link href={"/"} className="ml-auto mr-auto">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        height={0}
                        className="cursor-pointer"
                    ></Image>
                </Link>
                <span className="text-4xl cursor-pointer" onClick={closeNav}>X</span>
            </div>
            <div className="border-t-2 border-b-2 p-5 text-lg tracking-widest">
                <Link href={'/men'} onClick={closeNav}><div className="font-bold flex justify-between p-2 cursor-pointer"><span>MEN</span><span className="">&gt;</span></div></Link>
                <Link href={'/women'} onClick={closeNav}><div className="font-bold flex justify-between p-2 cursor-pointer"><span>WOMAN</span><span>&gt;</span></div></Link>
                <Link href={'/demo'} onClick={closeNav}><div className="font-bold flex justify-between p-2 cursor-pointer"><span>KIDS</span><span>&gt;</span></div></Link>
                <Link href={'/demo'} onClick={closeNav}><div className="flex justify-between p-2 cursor-pointer"><span>GIFTS</span><span>&gt;</span></div></Link >
                <Link href={'/demo'} onClick={closeNav}><div className="flex justify-between p-2 cursor-pointer"><span>OUTLET</span><span>&gt;</span></div></Link >
                <Link href={'/demo'} onClick={closeNav}><div className="flex justify-between p-2 cursor-pointer"><span>SPORTS</span><span>&gt;</span></div></Link >
                <Link href={'/demo'} onClick={closeNav}> <div className="flex justify-between p-2 cursor-pointer"><span>BRANDS</span><span>&gt;</span></div></Link >

            </div>
            <div className="p-5 text-lg">
                <Link href={'/account'} onClick={closeNav}><div className="p-2 cursor-pointer">My Account</div></Link>
                <Link href={'/demo'} onClick={closeNav}><div className="p-2 cursor-pointer">Returns & Exchanges</div></Link>
                <Link href={'/demo'} onClick={closeNav}><div className="p-2 cursor-pointer">Order Tracker</div></Link >
                <Link href={'/demo'} onClick={closeNav}><div className="p-2 cursor-pointer">fakeClub</div></Link >
                <Link href={'/demo'} onClick={closeNav}><div className="p-2 cursor-pointer">Gift Cards</div></Link >
                <Link href={'/demo'} onClick={closeNav}><div className="p-2 cursor-pointer">Store Locator</div></Link >
                <Link href={'/demo'} onClick={closeNav}><div className="p-2 cursor-pointer">Mobile Apps</div></Link >
            </div>
        </div>
    )
}

export default HamburgerNav;