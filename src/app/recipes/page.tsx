import Link from "next/link";
import type { Metadata } from "next";
import { recipes } from "@/lib/recipes";
import { RecipeCard, Crumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "All Recipes Â· Savoria",
  description: "Browse everyday dishes by cuisine, ingredients, and prep time."
};

export default function RecipesPage() {
  return (
    <>
      <Crumbs items={[["Home", "/"], ["Recipes"]]} />
      <h1>All Recipes</h1>
      <p className="lede">
        Browse everyday home-cooked dishes by regional cuisine, ingredient, and preparation time.
      </p>
      <div className="grid four">
        {recipes.map((r) => (
          <RecipeCard key={r.id} r={r} />
        ))}
      </div>
    </>
  );
}