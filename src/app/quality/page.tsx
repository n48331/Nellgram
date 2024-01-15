import Image from "next/image";
import { FunctionComponent } from "react";
import qualityBanner from "../../../public/image/quality/banner.jpg";
import qualityImage from "../../../public/image/noname.png";
interface QuallityPageProps {}

const QuallityPage: FunctionComponent<QuallityPageProps> = () => {
  return (
    <main>
      <div className="h-[30vh] sm:h-[40vh] md:h-[45vh] w-[100vw] relative overflow-hidden">
        <Image
          src={qualityBanner}
          alt={"banner"}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="container p-4 md:py-24">
        <div className="text-xl md:text-4xl font-semibold text-center">
          <h3 className="">Quality and Processing</h3>
        </div>
        <div className="py-4 px-10 md:py-8 md:leading-10 md:text-xl font-medium ">
          <p>
            The production of all Nellgram products takes place at VIDYANAGAR
            OIL ANDFLOUR MILL in Kasaragod. With a legacy spanning over 30
            years, this home grownmill has been serving people around Mangalore
            and Malabar regions for years.Wetake immense pride in bringing to
            you Kerala&apos;s culinary heritage.—the real andauthentic one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center justify-between gap-4 py-4 md:py-10">
            <div>
              <Image
                src={qualityImage}
                alt={"banner"}
                className="object-contain h-full w-full md:max-h-[20rem]"
              />
            </div>
            <div>
              <p>
                At Nellgram, your safety is our top priority, and we follow
                strict procedures to ensurethe quality of our products. We start
                with choosing the best ingredients, test themthoroughly, and
                work in clean, hygienic spaces.
              </p>
            </div>
          </div>
          <p>
            Our team is trained to maintain highstandards, and we check the
            quality of our products at every step. The packaging issecure to
            keep things fresh, and we follow all the rules to make sure our food
            is safe.Your trust matters, and we&apos;re committed to delivering food
            that&apos;s not only deliciousbut also made with your safety in mind.{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default QuallityPage;
