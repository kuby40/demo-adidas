"use client";
import { User } from "@prisma/client";
import HeaderBanner from "./HeaderBanner";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
interface HeaderProps {
  currentUser: User;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  
  return (
    <div className="">
      <HeaderBanner />
      <NavBarMobile currentUser={currentUser}/>
      <NavBarDesktop currentUser={currentUser}/>
    </div>
  );
};

export default Header;
