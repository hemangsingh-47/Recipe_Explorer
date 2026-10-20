import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="panel narrow not-found-panel">
      <div className="not-found-icon">🍲</div>
      <h1>Recipe Not Found</h1>
      <p className="lede">
        The culinary dish or regional category you are looking for isn’t here or may have moved. Explore our popular tested recipes below:
      </p>

      <div className="actions">
        <Link className="btn" href="/recipes">
          Explore All Recipes
        </Link>
        <Link className="btn ghost" href="/cuisines">
          Browse Cuisines
        </Link>
      </div>

      <div className="not-found-recommendations">
        <h2>Handpicked Dishes You Might Love</h2>
        <div className="grid">
          {recipes.slice(0, 3).map((r) => (
            <RecipeCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

