'use client'
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import WideTile from "../../components/models/WideTile";
const CheckoutPage = () => {
    const cart = useCart();
    let cartTotal = 0;
    cart.items.forEach(element => {
        cartTotal += element.product.price * element.quantity
    });
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="p-5">
            <h1 className="font-bold text-3xl py-1">Your Bag</h1>
            <h3 className="py-1">TOTAL ({isClient ? cart.items.length : 0} items) <span className="font-bold">$ {isClient ? cartTotal.toFixed(2) : 0}</span></h3>
            <h3 className="py-1">Items in your bag are not reserved — check out now to make them yours.</h3>
            {isClient ? cart.items.map((element, index) => 
                <WideTile key={element.product.id} currentUser={null} id={element.product.id} title={element.product.name} imgURL={element.product.picture} color={element.color} size={element.size} price={element.product.price} indexNumber={index} quantity={element.quantity} />
            ): ''}

        </div>
        )
}

export default CheckoutPage;