import Image from "next/image";
import banner from "../../public/image/banner.svg";
import { PiHandshake } from "react-icons/pi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { FunctionComponent } from "react";
import logo from "../../public/image/nellgram_logo_white.svg";

interface BannnerSectionProps {}

const BannnerSection: FunctionComponent<BannnerSectionProps> = () => {
  return (
    <section className=" justify-center" id="home">
<div className="relative h-[60vh] max-h-[60vh] w-[100vw] flex items-center justify-center">
  <Image
    src={banner}
    alt={"banner"}
    fill={true}
    className="object-cover"
  />
  <Image
    src={logo}
    alt={"logo"}
    width={400}
    className="absolute px-8 py-8"
  />
</div>


      <div className="w-full mx-auto text-center pt-10 md:pt-28 px-8">
        <h1 className="font-semibold text-5xl inline-block py-4 md:py-8">
          Welcome to Nellgram
        </h1>
        <br />
        <h6 className="font-semibold text-2xl inline-block italic">
        Where Every Meal Is a Journey Back Home.
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
        <section className="flex flex-col lg:flex-row lg:justify-around" style={{padding:'4rem 0'}}>
            <div className="text-theme-color flex flex-col items-center justify-center pt-5  mb-4 lg:mb-0 lg:mt-30">
              <PiHandshake className="h-12 w-12" />
              <h6 className="text-xl pt-3">2+</h6>
              <h6>Years Of Trust</h6>
            </div>
            <div className="text-theme-color flex flex-col items-center justify-center  pt-5  mb-4 lg:mb-0 lg:mt-30">
              <FaRegFaceSmile className="h-12 w-12" />
              <h6 className="text-xl  pt-3">15k+</h6>
              <h6>Happy Customers</h6>
            </div>
            <div className="text-theme-color flex flex-col items-center justify-center   pt-5   mb-4 lg:mb-0 lg:mt-30">
              <FaRegCheckCircle className="h-12 w-12" />
              <h6 className="text-xl  pt-3">100%</h6>
              <h6>Quality Products</h6>
            </div>
            <div className="text-theme-color flex flex-col items-center  pt-5  h-50 w-50 justify-center">
              <GoTrophy className="h-12 w-12" />
              <h6 className="text-xl  pt-3">3+</h6>
              <h6>Awards</h6>
            </div>
          </section>
      </div>
    </section>
  );
};

export default BannnerSection;
