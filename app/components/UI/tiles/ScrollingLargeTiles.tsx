'use client'
import { useRef } from 'react';
import { CldImage } from 'next-cloudinary';

const ScrollingLargeTiles = () => {
      const showcaseScrollable = useRef<HTMLDivElement>(null);
    return (
      <div className="mt-10">
        <button
          className="absolute text-8xl right-0 centerScrollButton invisible xl:visible"
          onClick={() => {
            if (showcaseScrollable.current != null) {
              showcaseScrollable.current.scrollBy({
                left: 500,
                behavior: "smooth",
              });
            }
          }}
        >
          ➲
        </button>
        <button
          className="absolute text-8xl rotate-180 centerScrollButton invisible xl:visible"
          onClick={() => {
            if (showcaseScrollable.current != null) {
              showcaseScrollable.current.scrollBy({
                left: -500,
                behavior: "smooth",
              });
            }
          }}
        >
          ➲
        </button>
        <div
          className="flex flex-row overflow-x-auto scrollbar-hide xl:mx-28"
          ref={showcaseScrollable}
        >
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
          <div className="cursor-pointer mx-4">
            <div className="w-96">
              <CldImage
                alt="3 dudes chilling"
                width="2000"
                height="2000"
                src="https://res.cloudinary.com/drscfsenq/image/upload/v1644437760/samples/ecommerce/car-interior-design.jpg"
              ></CldImage>
            </div>
            <div className="uppercase font-bold my-2">Fake Sportwear</div>
            <p className=" font-thin text-sm my-2">
              Iconic sportswear reimagined for any wear. On or Off the pitch.
            </p>
            <div className="flex underline font-bold">
              <p className=" hover:text-white hover:bg-black uppercase my-3">
                Shop Now
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ScrollingLargeTiles;