import Image from "next/image";
import Link from "next/link";
const LargeTile = (props: {
  id: string
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  imgURL: string;
  title: string;
}) => {
  return (
    <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
      <Link href={`/products/${props.id}`}>
      <div className="flex justify-center h-32">
        <Image className="w-auto h-auto"
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          src={props.imgURL}
        />
      </div>
      <div className="h-12">
        <h5 className="flex justify-center underline font-bold mx-auto my-auto">
          <p className="hover:text-white hover:bg-black">{props.title}</p>
        </h5>
      </div>
      </Link>
    </div>
  );
};

export default LargeTile;
