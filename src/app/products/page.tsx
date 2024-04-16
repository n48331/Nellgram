import { FunctionComponent } from "react";
import productBanner from "../../../public/image/productBanner.jpeg";
import puttuPodi from "../../../public/image/puttipodi2.png";
import Image from "next/image";
import { Card } from "./components/Card";

interface ProductsPageProps { }

const products = [
  {
    name: 'Puttu Podi',
    imgURL: 'Puttu podi.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
  {
    name: 'Pathiri Podi',
    imgURL: 'pathiri podi.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
  {
    name: 'Chilli Powder',
    imgURL: 'Chilli powder.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
  {
    name: 'Rice Powder',
    imgURL: 'Rice powder.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
  {
    name: 'Coriander Powder',
    imgURL: 'coriander powder.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
  {
    name: 'Jeerakasala',
    imgURL: 'Jeerakasala 5kg.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
  {
    name: 'Kashmiri Chilli',
    imgURL: 'kashmiri chilli.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore'
  },
]


const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  return (
    <main>
      <div className="h-[20vh] sm:h-[30vh] md:h-[35vh] w-[100%] relative overflow-hidden">
        <Image
          src={productBanner}
          alt={"banner"}
          className="object-cover h-full w-full"
        />
        <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center text-xl md:text-2xl font-semibold">
          <h3 className="text-4xl uppercase font-bold">Products</h3>
        </div>
      </div>
      <div className="py-8 md:py-14 lg:py-20">
        <div className="grid container px-4 text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <Card key={index} imgURL={item.imgURL} title={item.name} desc={item.desc} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
