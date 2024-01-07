import { FunctionComponent } from "react";
import productBanner from "../../../public/image/productBanner.jpeg";
import puttuPodi from "../../../public/image/puttipodi2.png";
import Image from "next/image";

interface ProductsPageProps {}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  return (
    <main>
      <div className="h-[20vh] sm:h-[30vh] md:h-[35vh] w-[100vw] relative overflow-hidden">
        <Image
          src={productBanner}
          alt={"banner"}
          className="object-cover h-full w-full"
        />
        <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center text-xl md:text-2xl font-semibold">
          <h3 className="">Products</h3>
        </div>
      </div>
      <div className="py-8 md:py-14 lg:py-20">
        <div className="grid container px-4 text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border-2 rounded-2xl border-[#5707FF]">
            <div className="p-6 md:p-8 lg:p-10">
              <Image
                src={puttuPodi}
                alt={"banner"}
                className="rounded-2xl mx-auto"
              />
              <div className="my-2 font-semibold text-xl md:text-2xl lg:text-4xl">
                Puttu Podi
              </div>
              <div className="text-sm md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
