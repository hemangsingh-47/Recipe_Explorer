import Link from "next/link";
import type { Metadata } from "next";
import { recipes, cuisines, getCuisineMeta } from "@/lib/recipes";
import { RecipeCard, Crumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "All Recipes Â· Savoria",
  description: "Browse everyday dishes by cuisine, ingredients, and prep time."
};

type Search = { q?: string; sort?: string; cuisine?: string };

export default async function RecipesPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { q = "", sort = "recent", cuisine } = await searchParams;
  const needle = q.trim().toLowerCase();

  let list = recipes.filter(
    (r) =>
      (!cuisine || r.cuisine === cuisine) &&
      (!needle ||
        r.title.toLowerCase().includes(needle) ||
        r.ingredients.some((i) => i.toLowerCase().includes(needle)))
  );

  if (sort === "time") list = [...list].sort((a, b) => a.minutes - b.minutes);
  if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

  const hasFilter = Boolean(q || cuisine || (sort && sort !== "recent"));

  return (
    <>
      <Crumbs items={[["Home", "/"], ["Recipes"]]} />
      <h1>All Recipes</h1>
      <p className="lede">
        Browse everyday home-cooked dishes by regional cuisine, ingredient, and preparation time.
      </p>

      <form className="filters" action="/recipes">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search recipes, ingredients, or spicesâ€¦"
          aria-label="Search recipes"
        />
        {cuisine && <input type="hidden" name="cuisine" value={cuisine} />}
        <select name="sort" defaultValue={sort} aria-label="Sort by">
          <option value="recent">Most recent</option>
          <option value="time">Quickest prep time</option>
          <option value="title">Alphabetical (A to Z)</option>
        </select>
        <button className="btn" type="submit">
          Apply
        </button>
        {hasFilter && (
          <Link href="/recipes" className="btn ghost">
            Reset
          </Link>
        )}
      </form>

      <div className="chips">
        <Link href="/recipes" className={!cuisine ? "on" : ""}>
          All Cuisines ({recipes.length})
        </Link>
        {cuisines.map((c) => {
          const meta = getCuisineMeta(c);
          const isSelected = cuisine === c;
          const href = isSelected ? "/recipes" : `/recipes?cuisine=${encodeURIComponent(c)}`;
          return (
            <Link key={c} href={href} className={isSelected ? "on" : ""}>
              <span>{meta.emoji}</span> {c}
            </Link>
          );
        })}
      </div>

      <div className="grid four">
        {list.map((r) => (
          <RecipeCard key={r.id} r={r} />
        ))}
      </div>
    </>
  );
}