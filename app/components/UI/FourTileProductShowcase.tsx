"use client";
import { CldImage } from "next-cloudinary";
const FourTileProductShowcase = () => {
  //const data = use();

  return (
    <div className="my-8 flex flex-wrap justify-center w-full">
      <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
        <div className="flex justify-center h-32">
          <CldImage
            alt="3 dudes chilling"
            width="150"
            height="150"
            src="FakeBrand/pictures/result_z5s6cp.png"
            sizes="100vw"
          />
        </div>
        <div className="h-12">
          <h5 className="flex justify-center underline font-bold mx-auto my-auto">
            <p className="hover:text-white hover:bg-black">Title</p>
          </h5>
        </div>
      </div>
      <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
        <div className="flex justify-center h-32">
          <CldImage
            alt="3 dudes chilling"
            width="150"
            height="150"
            src="FakeBrand/pictures/result_z5s6cp.png"
            sizes="100vw"
          />
        </div>
        <div className="h-12">
          <h5 className="flex justify-center underline font-bold">
            <p className="hover:text-white hover:bg-black">Title</p>
          </h5>
        </div>
      </div>
      <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
        <div className="flex justify-center h-32">
          <CldImage
            alt="3 dudes chilling"
            width="150"
            height="150"
            src="FakeBrand/pictures/result_z5s6cp.png"
            sizes="100vw"
          />
        </div>
        <div className="h-12">
          <h5 className="flex justify-center underline font-bold">
            <p className="hover:text-white hover:bg-black">Title</p>
          </h5>
        </div>
      </div>
      <div className="bg-gray-200 w-2/5 m-2 cursor-pointer">
        <div className="flex justify-center h-32">
          <CldImage
            alt="3 dudes chilling"
            width="150"
            height="150"
            src="FakeBrand/pictures/result_z5s6cp.png"
            sizes="100vw"
          />
        </div>
        <div className="h-12">
          <h5 className="flex justify-center underline font-bold">
            <p className="hover:text-white hover:bg-black">Title</p>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FourTileProductShowcase;
