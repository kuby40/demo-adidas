'use client'
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import WideTile from "../../components/models/WideTile";
import Button from "../../components/UI/Button";
import { useRouter } from "next/navigation";
const CheckoutPage = () => {
    const cart = useCart();
    const router = useRouter()
    let cartTotal = 0;
    let cartQuantity = 0;
    cart.items.forEach(element => {
        cartTotal += element.product.price * element.quantity;
        cartQuantity += element.quantity
    });
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="p-5">
            <h1 className="font-bold text-3xl py-1">Your Bag</h1>
            <h3 className="py-1">TOTAL ({isClient ? cartQuantity : 0} items) <span className="font-bold">$ {isClient ? cartTotal.toFixed(2) : 0}</span></h3>
            <h3 className="py-1">Items in your bag are not reserved — check out now to make them yours.</h3>
            {isClient ? cart.items.map((element, index) => 
                <WideTile key={element.product.id} currentUser={null} id={element.product.id} title={element.product.name} imgURL={element.product.picture} color={element.color} size={element.size} price={element.product.price} indexNumber={index} quantity={element.quantity} />
            ) : ''}
            <div className="mt-5">
                <Button label="Go To Payment" onClick={() => router.push('/demo')} />
            </div>
        </div>
        )
}

export default CheckoutPage;