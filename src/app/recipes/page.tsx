import Link from "next/link";
import type { Metadata } from "next";
import { recipes } from "@/lib/recipes";
import { RecipeCard, Crumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "All Recipes Â· Savoria",
  description: "Browse everyday dishes by cuisine, ingredients, and prep time."
};

type Search = { q?: string };

export default async function RecipesPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { q = "" } = await searchParams;
  const needle = q.trim().toLowerCase();

  let list = recipes.filter(
    (r) =>
      !needle ||
      r.title.toLowerCase().includes(needle) ||
      r.ingredients.some((i) => i.toLowerCase().includes(needle))
  );

  return (
    <>
      <Crumbs items={[["Home", "/"], ["Recipes"]]} />
      <h1>All Recipes</h1>
      <p className="lede">
        Browse everyday home-cooked dishes by regional cuisine, ingredient, and preparation time.
      </p>

      <form className="filters" action="/recipes">
        <div className="input-wrap">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search recipes, ingredients, or spicesâ€¦"
            aria-label="Search recipes"
          />
        </div>
        <button className="btn" type="submit">
          Search
        </button>
        {q && (
          <Link href="/recipes" className="btn ghost">
            Reset
          </Link>
        )}
      </form>

      <div className="grid four">
        {list.map((r) => (
          <RecipeCard key={r.id} r={r} />
        ))}
      </div>
    </>
  );
}