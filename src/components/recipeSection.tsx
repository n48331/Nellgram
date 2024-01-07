import { FunctionComponent } from "react";
import RecipesCard from "./recipes";
import PuttuPodi from "../../public/image/puttupodi.jpeg";

interface RecipeSectionProps {}

const RecipeSection: FunctionComponent<RecipeSectionProps> = () => {
  return (
    <section
      className="flex flex-col justify-around items-center pb-28"
      id="recipes"
    >
      <h4 className="font-semibold text-4xl">Recipes</h4>
      <div className="flex gap-8 mt-8  px-8 w-full justify-center flex-wrap md:flex-nowrap">
        <RecipesCard
          photo={{
            src: PuttuPodi,
            alt: "sample",
          }}
          title={""}
          description={""}
        />
        <RecipesCard
          photo={{
            src: PuttuPodi,
            alt: "sample",
          }}
          title={""}
          description={""}
        />
        <RecipesCard
          photo={{
            src: PuttuPodi,
            alt: "sample",
          }}
          title={""}
          description={""}
        />
      </div>
      <div className="mt-8">
        <button className="bg-theme-color text-white rounded-full px-4 py-2">
          view All
        </button>
      </div>
    </section>
  );
};

export default RecipeSection;
