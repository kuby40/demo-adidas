import { Suspense } from "react";
import getCurrentProduct from "../../../actions/getCurrentProduct";
import getCurrentUser from "../../../actions/getCurrentUser";
import Product from "../../../components/models/Product";
import Loading from "./loading";

export default async function ProductLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: {
        productID: string
    }
  }) {
    const currentUser = await getCurrentUser();
    const product = await getCurrentProduct(params.productID)
    if (!product) {
      return <div>PRODUCT DOESN'T EXIST</div>
    }
    return (
      <div>
        {children}
        <Product product={product} currentUser={currentUser}/>
        <Suspense fallback={<Loading/>}>
        </Suspense>
      </div>

    );
  }