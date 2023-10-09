import "../styles/globals.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import RegisterModal from "./components/models/RegisterModal";
import ToasterProvider from "./context/ToasterProvider";
import LoginModal from "./components/models/LoginModal";
import AuthContext from "./context/AuthContext";
import getCurrentUser from "./actions/getCurrentUser";
import WishlistModal from "./components/models/WishlistModal";
import { Product, User } from "@prisma/client";
import getWishlist from "./actions/getWishList";
import { Suspense } from "react";
import Loading from "./loading";
import CartModal from "./components/models/CartModal"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wishlist: Product[] = await getWishlist();
  const currentUser: User | null = await getCurrentUser();
  return (
    <html>
      <body>
        <AuthContext>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <WishlistModal wishlist={wishlist} currentUser={currentUser!}/>
          <CartModal/>
          <Header currentUser={currentUser!}/>
          <Suspense fallback={<Loading/>}>{children}</Suspense>
          <Footer currentUser={currentUser!}/>
        </AuthContext>
      </body>
    </html>
  );
}
