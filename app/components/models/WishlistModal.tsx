"use client";
import { IoMdClose } from "react-icons/io";
import useWishlistModal from "../../hooks/useWishlistModal";
import { useCallback, useEffect, useState } from "react";
import { Product, User } from "@prisma/client";
import SmallTile from "./SmallTile";
interface WishlistModalProps {
    wishlist: Product[]
    currentUser: User
}
const WishlistModal: React.FC<WishlistModalProps> = ({wishlist, currentUser}) => {
  const wishlistModal = useWishlistModal();
  const [modalOpen, setModalOpen] = useState(wishlistModal.isOpen);
  useEffect(() => {
    setModalOpen(wishlistModal.isOpen);
  }, [wishlistModal.isOpen]);

  const handleClose = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => {
      wishlistModal.onClose();
    }, 300);
  }, [wishlistModal.onClose]);
  if (!wishlistModal.isOpen) {
    return null;
  }
  
  return (
    <div className="flex overflow-y-auto overflow-x-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full
          ${modalOpen ? "translate-y-0" : "translate-y-full"} 
          ${modalOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="translate h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">Your Wishlist</div>
            </div>
            <div className="flex justify-center relative p-6 flex-wrap h-full">
                {currentUser ? 
                wishlist.map((element) => 
                <div className='p-5' onClick={handleClose}>
                  <SmallTile currentUser={currentUser} id={element.id} title={element.name} imgURL={element.picture} gender={element.gender} collection={element.collection}/>
                  </div>
                  )
                 : <div className="flex justify-center">Please Log In to See Your Wishlist</div>}
            </div>
            <div className="flex flex-col gap-2 p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
