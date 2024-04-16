import ReviewCard from "@/components/review";
import BannnerSection from "@/components/bannerSection";
import ProductSection from "@/components/productSection";
import RecipeSection from "@/components/recipeSection";
import ProcessAndQuality from "@/components/processAndQualitySection";
import CustomerReview from "@/components/customerReviewSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center md:bg-white w-full overflow-hidden">
      <BannnerSection />
      <ProductSection />
      {/* <RecipeSection /> */}
      <ProcessAndQuality />
      <CustomerReview />
    </main>
  );
}
