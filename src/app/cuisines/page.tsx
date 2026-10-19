import Link from "next/link";
import { cuisines, recipes, getCuisineMeta } from "@/lib/recipes";
import { Crumbs, cuisineHref } from "@/components/ui";

export const metadata = { title: "Regional Cuisines · Savoria" };

export default function CuisinesPage() {
  return (
    <>
      <Crumbs items={[["Home", "/"], ["Cuisines"]]} />

      <div className="catalog-hero">
        <span className="hero-kicker">🌍 Global Culinary Traditions</span>
        <h1>Regional Cuisines</h1>
        <p className="hero-sub">
          Explore authentic food cultures, signature pantry ingredients, and time-tested cooking methods from around the world.
        </p>
      </div>

      <div className="grid four cuisine-grid">
        {cuisines.map((c) => {
          const list = recipes.filter((r) => r.cuisine === c);
          const n = list.length;
          const meta = getCuisineMeta(c);
          const avgTime = n > 0 ? Math.round(list.reduce((s, r) => s + r.minutes, 0) / n) : 0;

          return (
            <Link key={c} href={cuisineHref(c)} className="cuisine-card">
              <div className="cuisine-header">
                <span className="cuisine-emoji">{meta.emoji}</span>
                <div className="cuisine-title-group">
                  <h3>{c}</h3>
                  <span className="cuisine-sub">Culinary Heritage</span>
                </div>
              </div>
              <p>{meta.description}</p>
              <div className="cuisine-meta">
                <span className="recipe-count-badge">
                  {n} {n === 1 ? "recipe" : "recipes"} · ~{avgTime}m avg
                </span>
                <span className="explore-arrow">Explore →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

