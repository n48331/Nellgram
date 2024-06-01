import Image from "next/image";
import { FunctionComponent } from "react";
import PuttuPodi from "../../public/image/puttupodi.jpeg";
import Link from "next/link";

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
            At Nellgram, we&apos;re dedicated to crafting the tastiest and most authentic Kerala culinary delights. Our products are meticulously crafted using traditional methods and the highest quality ingredients, ensuring a truly genuine taste experience. With a legacy of over 30 years, we take pride in serving the Mangalore and Malabar regions with the essence of Kerala&apos;s rich culinary heritage. From our kitchen to your table, experience the real flavors of Kerala with Nellgram.
          </p>
          <Link href={'/quality'}>
          <button className="flex gap-1 items-center mt-8">
            <span>See More</span>
            <span className='rounded-full border-2 md:bg-white border-black px-2 hover:bg-[#229107]'>
              {">"}
            </span>
          </button>
          </Link>
        </div>
      </div>{" "}
    </section>
  );
};

export default ProcessAndQuality;
