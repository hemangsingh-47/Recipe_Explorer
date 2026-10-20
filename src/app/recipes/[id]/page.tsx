import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipe, recipes, relatedTo } from "@/lib/recipes";
import { RecipeCard, Crumbs, cuisineHref } from "@/components/ui";
import Checklist from "@/components/Checklist";

type Props = { params: Promise<{ id: string }> };

export const generateStaticParams = () => recipes.map((r) => ({ id: r.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRecipe((await params).id);
  return r ? { title: r.title, description: r.summary } : {};
}

export default async function RecipePage({ params }: Props) {
  const r = getRecipe((await params).id);
  if (!r) notFound();
  const related = relatedTo(r);
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
            {r.rating && <span className="hero-rating-badge">★ {r.rating} / 5.0</span>}
          </div>

          <h1>{r.title}</h1>
          <p className="lede">{r.summary}</p>

          <dl className="meta">
            <div className="meta-box">
              <dt>Prep & Cook</dt>
              <dd>⏱️ {r.minutes} mins</dd>
            </div>
            <div className="meta-box">
              <dt>Yield</dt>
              <dd>👥 {r.servings} portions</dd>
            </div>
            <div className="meta-box">
              <dt>Difficulty</dt>
              <dd className={`diff-text ${diffClass}`}>{r.difficulty}</dd>
            </div>
            <div className="meta-box">
              <dt>Ingredients</dt>
              <dd>🥗 {r.ingredients.length} items</dd>
            </div>
          </dl>
        </div>

        <div className="hero-photo-container">
          {r.image ? (
            <div className="photo-card">
              <img
                src={r.image}
                alt={r.title}
                className="hero-photo-img"
              />
              <div className="photo-tag-pill">
                <span>{r.emoji}</span> Handcrafted
              </div>
            </div>
          ) : (
            <div
              className="photo"
              style={{
                background: `linear-gradient(135deg, ${r.tone}, ${r.tone}cc)`
              }}
            >
              <span className="photo-initial">{r.title[0]}</span>
              <span className="photo-emoji">{r.emoji}</span>
            </div>
          )}
        </div>
      </header>

      <div className="split">
        <section className="panel ingredients-panel">
          <div className="panel-header">
            <h2>Ingredients</h2>
            <span className="panel-badge">{r.ingredients.length} total items</span>
          </div>
          <p className="panel-subtitle">Check off ingredients as you prepare them in your kitchen:</p>
          <Checklist items={r.ingredients} />
        </section>

        <section className="panel steps-panel">
          <div className="panel-header">
            <h2>Cooking Instructions</h2>
            <span className="panel-badge">{r.steps.length} sequential steps</span>
          </div>
          <p className="panel-subtitle">Follow these culinary steps for perfect flavor and texture:</p>
          <ol className="steps">
            {r.steps.map((s, idx) => (
              <li key={s.title}>
                <div className="step-content">
                  <div className="step-num-pill">Step {idx + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="related-section">
        <div className="sec-header">
          <h2 className="sec">More Recipes You Might Love</h2>
          <Link href="/recipes" className="see-all-link">
            Browse All {recipes.length} Recipes →
          </Link>
        </div>
        <div className="grid">
          {related.map((x) => (
            <RecipeCard key={x.id} r={x} />
          ))}
        </div>
      </div>
    </>
  );
}

