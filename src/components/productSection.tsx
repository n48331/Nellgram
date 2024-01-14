import { FunctionComponent } from "react";
import ProductCard from "./products";
import PuttuPodi from "../../public/image/puttupodi.jpeg";
import Link from "next/link";

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
          image={PuttuPodi}
          alt={"puttu podi image"}
        />
        <ProductCard
          title={"PuttuPodi"}
          image={PuttuPodi}
          alt={"puttu podi image"}
        />
        <ProductCard
          title={"PuttuPodi"}
          image={PuttuPodi}
          alt={"puttu podi image"}
        />
      </div>
      <div className="mt-8 relative">
        <Link href={'/products'}>
        <button className="bg-theme-color text-white rounded-full px-4 py-2">
          view All
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
