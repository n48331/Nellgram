import { motion } from "framer-motion"
import Image from "next/image";
import { FunctionComponent } from "react";

interface ProductCardProps {
  title: string;
  image: string | any;
  alt: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  title,
  image,
  alt,
}) => {
  return (
    <motion.div className="w-72 h-74 relative"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
      <div className="h-[75%] w-[75%] h-max-[94px] w-max-[93px] mx-auto rounded-xl relative overflow-hidden top-[10px]">
        <Image
          src={image}
          alt={alt}
          width={200}
          height={200}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-[100%]  h-[30%]  bg-card-title-bg rounded-lg  text-center font-medium text-xl flex items-center justify-center bottom-0 shadow-md">
        <p>{title}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
