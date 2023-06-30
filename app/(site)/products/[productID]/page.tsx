import { CldImage } from "next-cloudinary";
import getCurrentProduct from "../../../actions/getCurrentProduct";
import Image from "next/image";

interface ProductPageProps {
    params: {
      productID: string;
    },
  }
const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    console.log(params.productID)
    const product = await getCurrentProduct(params.productID);
    
    if (!product) {
        return <div>THIS PRODUCT DOESNT NOT EXIST</div>
    }

    return (
        <div>
            <div>
                <span></span>
                <div>{product?.name}</div>
                <div>$ {product?.price}</div>
                <div><Image src={product?.picture} alt={product?.description.title} width={400} height={400}></Image></div>
            </div>
        </div>
    )
}

export default ProductPage;