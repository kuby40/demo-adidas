import getCurrentProduct from "../../../actions/getCurrentProduct";
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
    let product = await getCurrentProduct(params.productID)
    if (!product) {
      return <div>PRODUCT DOESN'T EXIST</div>
    }
    return (
      
      <div>
        <Product product={product}/>
        {children}
      </div>

    );
  }