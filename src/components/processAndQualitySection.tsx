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
            Nellgram is here to share a piece of South Indian&apos;s heartwarming food culture with you all over UAE. Experience the pure goodness of rice varieties and breakfast mixes without the worry of artificial preservatives. Each and every product we serve carries the essence of tradition, offering you a taste of home that&apos;s real, honest, and delicious. Your kitchen deserves the best, and we&apos;re here to deliver it to your doorstep!
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
