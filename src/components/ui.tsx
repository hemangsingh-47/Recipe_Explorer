import Link from "next/link";
import { Recipe, slugify } from "@/lib/recipes";

export function Header() {
  return (
    <header className="bar">
      <div className="wrap row">
        <Link href="/recipes" className="brand">
          <span className="brand-badge">ðŸ³</span>
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
          <span className="brand-badge mini">ðŸ³</span> Savoria
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
          Â© 2026 Hemang Singh Â· All culinary rights reserved.
        </div>
      </div>
    </footer>
  );
}

export const cuisineHref = (c: string) => `/cuisines/${slugify(c)}`;