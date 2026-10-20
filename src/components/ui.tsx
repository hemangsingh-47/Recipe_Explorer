import Link from "next/link";
import { Recipe, slugify } from "@/lib/recipes";

export function Header() {
  return (
    <header className="bar">
      <div className="wrap row">
        <Link href="/recipes" className="brand">
          <span className="brand-badge">🍳</span>
          <span className="brand-title">
            Savoria<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav>
          <Link href="/recipes" className="nav-link">
            <span>Explore</span> Recipes
          </Link>
          <Link href="/cuisines" className="nav-link">
            <span>Regional</span> Cuisines
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="wrap foot">
      <div className="foot-left">
        <div className="foot-brand">
          <span className="brand-badge mini">🍳</span> Savoria
        </div>
        <p className="foot-desc">
          Handcrafted culinary notebook celebrating diverse global flavors, home kitchen cooking, and mindful meals.
        </p>
      </div>
      <div className="foot-right">
        <div className="foot-links">
          <Link href="/recipes">All Recipes</Link>
          <Link href="/cuisines">Cuisines</Link>
          <a href="https://github.com/hemangsingh-47/Recipe_Explorer" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="foot-copy">
          © {new Date().getFullYear()} Hemang Singh · All culinary rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map(([label, href], i) => (
        <span key={label} className="crumb-item">
          {i > 0 && <span className="sep">›</span>}
          {href ? <Link href={href}>{label}</Link> : <span className="active">{label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function RecipeCard({ r }: { r: Recipe }) {
  const diffClass = r.difficulty.toLowerCase();
  return (
    <Link href={`/recipes/${r.id}`} className="card">
      <div className="thumb">
        {r.image ? (
          <img
            src={r.image}
            alt={r.title}
            className="thumb-img"
            loading="lazy"
          />
        ) : (
          <div
            className="thumb-fallback"
            style={{
              background: `linear-gradient(135deg, ${r.tone}, ${r.tone}cc)`
            }}
          >
            <span className="thumb-initial">{r.title[0]}</span>
            <span className="thumb-emoji">{r.emoji}</span>
          </div>
        )}
        <div className="thumb-overlay"></div>
        <span className="pill time-pill">⏱️ {r.minutes}m</span>
        {r.rating && <span className="pill rating-pill">★ {r.rating}</span>}
      </div>

      <div className="card-body">
        <div className="tags">
          <span className="tag-badge">{r.cuisine}</span>
          <span className={`tag-difficulty ${diffClass}`}>{r.difficulty}</span>
          <span className="servings-tag">👥 {r.servings} serv</span>
        </div>

        <h3>{r.title}</h3>
        <p>{r.summary}</p>

        <div className="card-footer">
          <span className="view-link">View Recipe →</span>
        </div>
      </div>
    </Link>
  );
}

export const cuisineHref = (c: string) => `/cuisines/${slugify(c)}`;

