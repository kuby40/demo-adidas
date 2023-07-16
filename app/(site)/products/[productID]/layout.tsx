import getCurrentProduct from "../../../actions/getCurrentProduct";
import getCurrentUser from "../../../actions/getCurrentUser";
import Product from "../../../components/models/Product";

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
        <Product product={product} currentUser={currentUser}/>
        {children}
      </div>

    );
  }