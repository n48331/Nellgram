import Image from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion"
interface RecipesCardProps {
  photo: {
    src: string | any;
    alt: string;
  };
  title: string;
  description: string;
}

const RecipesCard: FunctionComponent<RecipesCardProps> = ({
  photo,
  description,
  title,
}) => {
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-72 h-72 bg-white rounded-lg shadow-md ">
      <div className="h-[50%] mx-auto bg-gray-200 rounded-lg relative overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill={true}
          sizes="(min-width: 1280px) 278px (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          className="object-cover top-0"
        />
      </div>
      <div className="flex flex-col  items-center text-center gap-2 p-4">
        <h4 className="">unniyappam</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </motion.div>
  );
};

export default RecipesCard;
