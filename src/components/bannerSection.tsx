import Image from "next/image";
import banner from "../../public/image/banner.jpeg";
import { FunctionComponent } from "react";

interface BannnerSectionProps {}

const BannnerSection: FunctionComponent<BannnerSectionProps> = () => {
  return (
    <section className=" justify-center" id="home">
      <div className="relative h-[50vh] max-h-[50vh] w-[100vw]">
        <Image
          src={banner}
          alt={"banner"}
          fill={true}
          className="content-end object-cover"
        />
      </div>

      <div className="w-full mx-auto text-center pt-10 md:pt-28 px-8">
        <h4 className="font-semibold text-4xl inline-block py-4 md:py-8">
          Welcome to Nellgram
        </h4>
        <br />
        <h5 className="font-semibold text-xl inline-block">
          Welcome to Nellgram where every meal is a journey back home.
        </h5>
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
      </div>
    </section>
  );
};

export default BannnerSection;
