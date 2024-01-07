import Image from "next/image";
import { FunctionComponent } from "react";
import PuttuPodi from "../../public/image/puttupodi.jpeg";

interface ProcessAndQualityProps {}

const ProcessAndQuality: FunctionComponent<ProcessAndQualityProps> = () => {
  return (
    <section
      className=" flex flex-col justify-around items-center px-16 pb-28"
      id=""
    >
      <h4 className="font-semibold text-4xl">Process and Quallity</h4>
      <div className="container p-4 grid grid-cols-1 md:grid-cols-2 gap-4 flex-col md:flex-row items-center justify-center w-full mt-8">
        <div className=" bg-gray-200 rounded-lg  relative overflow-hidden">
          <Image
            src={PuttuPodi}
            alt={""}
            className="object-cover h-full w-full md:max-h-[20rem]"
          />
        </div>
        <div className=" ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia
            eum ducimus a explicabo, consequuntur, necessitatibus molestias
            doloribus veritatis ratione aperiam tempora saepe recusandae
            voluptatum facere sit odit doloremque repudiandae.
          </p>
          <button className="flex gap-1 items-center mt-8">
            <span>See More</span>
            <span className="rounded-full border-2 md:bg-primary border-black px-2">
              {">"}
            </span>
          </button>
        </div>
      </div>{" "}
    </section>
  );
};

export default ProcessAndQuality;
