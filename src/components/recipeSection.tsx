"use client";
import { FunctionComponent } from "react";
import RecipesCard from "./recipes";
import PuttuPodi from "../../public/image/recipe/unniyappam.jpg";
import { motion } from "framer-motion";
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
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
         className="bg-theme-color text-white rounded-full px-4 py-2">
          view All
        </motion.button>
      </div>
    </section>
  );
};

export default RecipeSection;
