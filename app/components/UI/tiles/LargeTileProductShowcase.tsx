"use client";
import LargeTile from "../../models/LargeTile";
const LargeTileProductShowcase = () => {
  //const data = use();

  return (
    <div className="my-8 flex flex-wrap justify-center w-full">
      <LargeTile
        imgAlt="shoes"
        imgHeight={150}
        imgWidth={150}
        imgURL="https://res.cloudinary.com/drscfsenq/image/upload/v1678300996/FakeBrand/pictures/shoes/result_z5s6cp.png"
        title="Number 1"
      />
      <LargeTile
        imgAlt="shoes"
        imgHeight={150}
        imgWidth={150}
        imgURL="https://res.cloudinary.com/drscfsenq/image/upload/v1678300996/FakeBrand/pictures/shoes/result_z5s6cp.png"
        title="Number 2"
      />
      <LargeTile
        imgAlt="shoes"
        imgHeight={150}
        imgWidth={150}
        imgURL="https://res.cloudinary.com/drscfsenq/image/upload/v1678300996/FakeBrand/pictures/shoes/result_z5s6cp.png"
        title="Number 3"
      />
      <LargeTile
        imgAlt="shoes"
        imgHeight={150}
        imgWidth={150}
        imgURL="https://res.cloudinary.com/drscfsenq/image/upload/v1678300996/FakeBrand/pictures/shoes/result_z5s6cp.png"
        title="Number 4"
      />
    </div>
  );
};

export default LargeTileProductShowcase;
