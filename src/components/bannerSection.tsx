import Image from "next/image";
import banner from "../../public/image/banner.png";
import { PiHandshake } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { FunctionComponent } from "react";

interface BannnerSectionProps {}

const BannnerSection: FunctionComponent<BannnerSectionProps> = () => {
  return (
    <section className=" justify-center" id="home">
      <div className="relative h-[60vh] max-h-[60vh] w-[100vw]">
        <Image
          src={banner}
          alt={"banner"}
          fill={true}
          className="content-end object-cover  "
        />
      </div>

      <div className="w-full mx-auto text-center pt-10 md:pt-28 px-8">
        <h1 className="font-semibold text-5xl inline-block py-4 md:py-8">
          Welcome to Nellgram
        </h1>
        <br />
        <h6 className="font-semibold text-2xl inline-block">
           where every meal is a journey back home.
        </h6>
        <br />
        <br />
        <p className="font-light text-xl overflow-clip mx-auto max-w-screen-md ">
          Nellgram is here to share a piece of Kerala&apos;s heartwarming food
          culture with you in Dubai. Experience the pure goodness of rice
          varieties and breakfast mixes without the worry of artificial
          preservatives.Each and every product we serve carries the essence of
          tradition, offering you a taste of home that&apos;s real, honest, and
          delicious. Your kitchen deserves the best, and we&apos;re here to deliver
          it to your doorstep!
        </p>
        <section className="flex flex-col lg:flex-row lg:justify-around">
            <div className="text-yellow-500 flex flex-col items-center justify-center pt-5  mb-4 lg:mb-0 lg:mt-30">
              <PiHandshake className="h-12 w-12" />
              <h6 className="text-xl pt-3">55</h6>
              <h6>Years Of Trust</h6>
            </div>
            <div className="text-yellow-500 flex flex-col items-center justify-center  pt-5  mb-4 lg:mb-0 lg:mt-30">
              <CiFaceSmile className="h-12 w-12" />
              <h6 className="text-xl  pt-3">150M+</h6>
              <h6>Happy Customers</h6>
            </div>
            <div className="text-yellow-500 flex flex-col items-center justify-center   pt-5   mb-4 lg:mb-0 lg:mt-30">
              <FaRegCheckCircle className="h-12 w-12" />
              <h6 className="text-xl  pt-3">100%</h6>
              <h6>Quality Products</h6>
            </div>
            <div className="text-yellow-500 flex flex-col items-center  pt-5  h-50 w-50 justify-center">
              <GoTrophy className="h-12 w-12" />
              <h6 className="text-xl  pt-3">30++</h6>
              <h6>Awards</h6>
            </div>
          </section>
      </div>
    </section>
  );
};

export default BannnerSection;
