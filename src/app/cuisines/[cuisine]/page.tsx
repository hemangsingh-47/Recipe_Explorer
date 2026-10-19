import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cuisines, cuisineFromSlug, recipes, slugify, getCuisineMeta } from "@/lib/recipes";
import { RecipeCard, Crumbs, cuisineHref } from "@/components/ui";

type Props = { params: Promise<{ cuisine: string }> };

export const generateStaticParams = () => cuisines.map((c) => ({ cuisine: slugify(c) }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = cuisineFromSlug((await params).cuisine);
  if (!name) return {};
  const meta = getCuisineMeta(name);
  return {
    title: `${name} Cuisine · Savoria`,
    description: meta.description
  };
}

export default async function CuisinePage({ params }: Props) {
  const name = cuisineFromSlug((await params).cuisine);
  if (!name) notFound();

  const meta = getCuisineMeta(name);
  const list = recipes.filter((r) => r.cuisine === name);
  const avg = list.length > 0 ? Math.round(list.reduce((s, r) => s + r.minutes, 0) / list.length) : 0;
  const others = cuisines.filter((c) => c !== name);

  return (
    <>
      <Crumbs items={[["Home", "/"], ["Cuisines", "/cuisines"], [name]]} />

      <div className="cuisine-hero-header">
        <div className="cuisine-hero-badge">{meta.emoji}</div>
        <div className="cuisine-hero-info">
          <h1>{name} Cuisine</h1>
          <p className="hero-sub">{meta.description}</p>
          <div className="cuisine-quick-stats">
            <span className="stat-pill">🍽️ {list.length} {list.length === 1 ? "Recipe" : "Recipes"}</span>
            <span className="stat-pill">⏱️ ~{avg} mins avg prep</span>
          </div>
        </div>
      </div>

      <div className="cuisine-recipes-section">
        <h2>{name} Recipes in Savoria</h2>
        <div className="grid">
          {list.map((r) => (
            <RecipeCard key={r.id} r={r} />
          ))}
        </div>
      </div>

      <div className="other-cuisines-section">
        <h2 className="sec">Explore Other Global Cuisines</h2>
        <div className="chips">
          {others.map((c) => {
            const m = getCuisineMeta(c);
            return (
              <Link key={c} href={cuisineHref(c)} className="other-cuisine-chip">
                <span>{m.emoji}</span> {c}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

