import { CldImage } from "next-cloudinary";
const SmallTile = (props: {
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  imgURL: string;
}) => {
  return (
    <div className="w-60 h-60 mx-1 max-w-xs overflow-hidden bg-gray-200">
      {/* <CldImage
        alt={props.imgAlt}
        width={props.imgWidth}
        height={props.imgHeight}
        src={props.imgURL}
      /> */}
    </div>
  );
};

export default SmallTile;
