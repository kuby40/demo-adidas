"use client";
import { Product } from "@prisma/client";
import LargeTile from "../../models/LargeTile";

interface LargeTileProps {
  productsList: Product[],
}

const LargeTileProductShowcase: React.FC<LargeTileProps> = ({ 
  productsList,
}) => {
  
  return (
    <div className="my-8 flex flex-wrap justify-center w-full">
      {productsList.map((item) => ( 
        <LargeTile
        key={item.id}
          imgAlt={item.name}
          imgURL={item.picture}
          title={item.name}
          imgHeight={150}
          imgWidth={150}
        />
      ))}
    </div>
  );
};

export default LargeTileProductShowcase;
