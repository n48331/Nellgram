"use client";
import { FunctionComponent } from "react";
import ProductCard from "./products";
import PuttuPodi from "../../public/image/puttupodi.jpeg";
import Link from "next/link";
import { motion } from "framer-motion"
interface ProductSectionProps {}

const ProductSection: FunctionComponent<ProductSectionProps> = () => {
  return (
    <section
      className=" flex flex-col justify-around items-center py-28"
      id="products"
    >
      <h4 className="font-semibold text-4xl">Products</h4>
      <div className="flex gap-8 mt-8 px-8 relative w-full justify-center flex-wrap md:flex-nowrap">
        <ProductCard
          title={"PuttuPodi"}
          image={'/image/products/Puttu podi.jpg'}
          alt={"puttu podi image"}
        />
        <ProductCard
          title={"Chilli powder"}
          image={'/image/products/Chilli powder.jpg'}
          alt={"Chilli powder image"}
        />
        <ProductCard
          title={"Jeerakasala"}
          image={'/image/products/Jeerakasala 5kg.jpg'}
          alt={"Jeerakasala 5kg image"}
        />
        
      </div>
      <div className="mt-8 relative">
        <Link href={'/products'}>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-theme-color text-white rounded-full px-4 py-2">
          view All
        </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
