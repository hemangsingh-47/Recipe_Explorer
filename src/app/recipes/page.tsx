import Link from "next/link";
import type { Metadata } from "next";
import { recipes, cuisines, getCuisineMeta } from "@/lib/recipes";
import { RecipeCard, Crumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "All Recipes",
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

      <div className="catalog-hero">
        <span className="hero-kicker">✨ Handcrafted Culinary Collection</span>
        <h1>Explore Delicious Recipes</h1>
        <p className="hero-sub">
          Master time-tested regional dishes, quick weeknight meals, and artisanal bakes from global kitchens.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <strong>{recipes.length}</strong>
            <span>Curated Dishes</span>
          </div>
          <div className="stat-sep">•</div>
          <div className="stat-item">
            <strong>{cuisines.length}</strong>
            <span>World Cuisines</span>
          </div>
          <div className="stat-sep">•</div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>Tested Steps</span>
          </div>
        </div>
      </div>

      <div className="search-filter-card">
        <form className="filters" action="/recipes">
          <div className="input-wrap">
            <span className="input-icon">🔍</span>
            <input
              name="q"
              defaultValue={q}
              placeholder="Search recipes, ingredients, or spices…"
              aria-label="Search recipes"
            />
          </div>
          {cuisine && <input type="hidden" name="cuisine" value={cuisine} />}
          <select name="sort" defaultValue={sort} aria-label="Sort by">
            <option value="recent">Sort: Most recent</option>
            <option value="time">Sort: Quickest prep time</option>
            <option value="title">Sort: Alphabetical (A to Z)</option>
          </select>
          <button className="btn" type="submit">
            Apply Filters
          </button>
          {hasFilter && (
            <Link href="/recipes" className="btn ghost" style={{ textDecoration: "none" }}>
              Reset
            </Link>
          )}
        </form>

        <div className="chips-section">
          <span className="chips-label">Cuisines:</span>
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
        </div>
      </div>

      <div className="results-header">
        <p className="count">
          Showing <strong>{list.length}</strong> of {recipes.length} recipes
          {cuisine && <span> in <em>{cuisine}</em></span>}
          {q && <span> matching “<em>{q}</em>”</span>}
        </p>
      </div>

      {list.length > 0 ? (
        <div className="grid four">
          {list.map((r) => (
            <RecipeCard key={r.id} r={r} />
          ))}
        </div>
      ) : (
        <div className="panel empty-panel">
          <p className="empty-emoji">🔍</p>
          <h3>No matching recipes found</h3>
          <p className="lede" style={{ margin: "0 auto 20px" }}>
            No recipes matched your search for “{q}”{cuisine ? ` in ${cuisine} cuisine` : ""}. Try a different keyword or reset filters.
          </p>
          <Link href="/recipes" className="btn">
            Clear all filters
          </Link>
        </div>
      )}
    </>
  );
}

