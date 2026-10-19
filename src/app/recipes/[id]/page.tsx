import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipe, recipes } from "@/lib/recipes";
import { Crumbs, cuisineHref } from "@/components/ui";

type Props = { params: Promise<{ id: string }> };

export const generateStaticParams = () => recipes.map((r) => ({ id: r.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRecipe((await params).id);
  return r ? { title: r.title, description: r.summary } : {};
}

export default async function RecipePage({ params }: Props) {
  const r = getRecipe((await params).id);
  if (!r) notFound();
  const diffClass = r.difficulty.toLowerCase();

  return (
    <>
      <Crumbs
        items={[
          ["Home", "/"],
          ["Recipes", "/recipes"],
          [r.cuisine, cuisineHref(r.cuisine)],
          [r.title]
        ]}
      />

      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge-row">
            <span className="hero-cuisine-badge">
              <Link href={cuisineHref(r.cuisine)}>{r.cuisine} Cuisine</Link>
            </span>
            <span className={`tag-difficulty ${diffClass}`}>{r.difficulty}</span>
          </div>

          <h1>{r.title}</h1>
          <p className="lede">{r.summary}</p>

          <dl className="meta">
            <div className="meta-box">
              <dt>Prep & Cook</dt>
              <dd>â±ï¸ {r.minutes} mins</dd>
            </div>
            <div className="meta-box">
              <dt>Yield</dt>
              <dd>ðŸ‘¥ {r.servings} portions</dd>
            </div>
            <div className="meta-box">
              <dt>Difficulty</dt>
              <dd className={`diff-text ${diffClass}`}>{r.difficulty}</dd>
            </div>
            <div className="meta-box">
              <dt>Ingredients</dt>
              <dd>ðŸ¥— {r.ingredients.length} items</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="split">
        <section className="panel">
          <h2>Ingredients ({r.ingredients.length} items)</h2>
          <ul>
            {r.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>Cooking Instructions ({r.steps.length} steps)</h2>
          <ol className="steps">
            {r.steps.map((s, idx) => (
              <li key={idx}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}