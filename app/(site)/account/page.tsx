"use client";
import ScrollingSmallTiles from "../../components/UI/tiles/ScrollingSmallTiles";
import { User, Product } from "@prisma/client";
import { useState } from "react";
import Account from "../../components/UI/account/Account"

interface UserPageProps {
  currentUser: User;
  productsShowcase: Product[];
}
const AccountPage: React.FC<UserPageProps> = ({ currentUser, productsShowcase }) => {
  const [orderOrAccount, setOrderOrAccount] = useState("order");
  const orders = <div className="">
    <h1 className="flex justify-center font-bold pt-4">Orders</h1>
    <div className="flex items-center justify-center h-96 underline">You Have no Orders</div>
  </div>;
  const account = <Account currentUser={currentUser}/>
  return (
    <div>
      <div>
        <h1 className="text-3xl font-black ml-4">Hi {currentUser.name}</h1>
      </div>
      <div className="">
        <ul className="flex justify-center">
          <li
            className={
              "p-3 hover:border-b-4 hover:border-gray-500 " +
              (orderOrAccount === "order" ? "border-b-4 border-black" : "")
            }
          >
            <button onClick={() => setOrderOrAccount("order")}>ORDERS</button>
          </li>
          <li
            className={
              "p-3 hover:border-b-4 hover:border-gray-500 " +
              (orderOrAccount === "account" ? "border-b-4 border-black" : "")
            }
          >
            <button onClick={() => setOrderOrAccount("account")}>
              ACCOUNT
            </button>
          </li>
        </ul>
      </div>
      <div className="h-full bg-gray-200">
        {orderOrAccount === "order" ? orders : account}
      </div>
      <div className="bg-slate-100">
        <h2 className="text-lg font-bold p-3">PRODUCTS TO CHECK OUT!</h2>
        <h4 className="pl-3">
          We’ve collected some of our favorite products based on customers
          preferences and purchases.
        </h4>
        <ScrollingSmallTiles productsList={productsShowcase} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default AccountPage;
