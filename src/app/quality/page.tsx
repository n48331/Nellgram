import Image from "next/image";
import { FunctionComponent } from "react";
import qualityBanner from "../../../public/image/quality/banner.jpg";
import qualityImage from "../../../public/image/noname.png";
interface QuallityPageProps {}

const QuallityPage: FunctionComponent<QuallityPageProps> = () => {
  return (
    <main className="flex flex-col justify-center md:bg-white w-full overflow-hidden">
      <div className="h-[30vh] sm:h-[40vh] md:h-[45vh] w-[100%] relative overflow-hidden ">
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
          At Nellgram, we&apos;re dedicated to crafting the tastiest and most authentic Kerala culinary delights. Our products are meticulously crafted using traditional methods and the highest quality ingredients, ensuring a truly genuine taste experience. With a legacy of over 30 years, we take pride in serving the Mangalore and Malabar regions with the essence of Kerala&apos;s rich culinary heritage. From our kitchen to your table, experience the real flavors of Kerala with Nellgram.
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
