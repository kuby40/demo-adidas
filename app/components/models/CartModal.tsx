"use client";
import { IoMdClose } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import useCartModal from "../../hooks/useCartModal";
import useCart from "../../hooks/useCart";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import SmallTile from "./SmallTile";
interface CartModalProps {
    
}
const CartModal: React.FC<CartModalProps> = () => {
    const router = useRouter();
    const cart = useCart();
    const cartModal = useCartModal();
  const [modalOpen, setModalOpen] = useState(cartModal.isOpen);
  useEffect(() => {
    setModalOpen(cartModal.isOpen);
  }, [cartModal.isOpen]);

  const handleClose = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => {
      cartModal.onClose();
    }, 300);
  }, [cartModal.onClose]);
  if (!cartModal.isOpen) {
    return null;
    }

    const checkoutRoute = () => {
      router.push('/checkout')
      cartModal.onClose();
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
              <div className="text-lg font-semibold">CART</div>
            </div>
            <div className="flex justify-center relative p-6 flex-wrap h-full">
              { cart.items.length != 0 ?
                cart.items.map((element, index) => (
                  <div className="p-5" key={index}>
                        <SmallTile
                            cartLayout={true}
                            currentUser={null}
                            id={element.product.id}
                            title={element.product.name}
                            imgURL={element.product.picture}
                            color={element.color}
                            size={element.size}
                        />
                        <Button small label="Remove" onClick={() => cart.removeItem(index)}></Button>
                  </div>
                ))
               : (
                <div className="flex justify-center">
                  Nothing in your cart
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 p-6">
              <Button label="Checkout" onClick={checkoutRoute}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
