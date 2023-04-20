import { CldImage } from "next-cloudinary";
const SmallTile = (props: {
  title: string;
  imgURL: string;
  gender: string;
  collection: string;
}) => {
  return (
    <div className="mx-1">
      <div className="relative w-60 h-60 max-w-xs overflow-hidden bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute right-3 top-3 w-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <CldImage
          alt={props.title}
          width={300}
          height={300}
          src={props.imgURL}
          className="mx-auto my-auto"
        />
      </div>
      <h2 className="font-semibold">{props.title}</h2>
      <h4 className="font-thin">
        {props.gender} {props.collection}
      </h4>
    </div>
  );
};

export default SmallTile;
