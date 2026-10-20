# Savoria · Recipe Explorer 🍳

A modern, responsive Recipe Explorer web application built with **Next.js 15+ (App Router)**, **React 19**, **TypeScript**, and modern custom CSS.

Browse handcrafted global dishes, filter by regional culinary traditions, search by ingredients, sort by preparation time, and check off cooking steps interactively.

---

## ✨ Features

- **📸 Curated Food Photography**: High-resolution dish photography and visual thumbnails for all recipes.
- **🔍 Instant Search & Multi-Filters**: Instant keyword search across dish names and ingredient lists with URL parameter synchronization.
- **⏱️ Smart Sorting**: Sort recipes by recent addition, quickest preparation time, or alphabetically.
- **🏷️ Regional Cuisines**: Explore dedicated cuisine landing pages (`/cuisines`) and regional hubs (`/cuisines/[cuisine]`) with average preparation times and dish counts.
- **📖 Dynamic Recipe Details**: Rich detail views (`/recipes/[id]`) featuring difficulty ratings, portion sizes, ingredient totals, and related recipe recommendations.
- **✅ Interactive Cooking Checklist**: Client-side interactive checklist allowing home chefs to cross off ingredients as they prep.
- **⚡ Fast Next.js Architecture**: Static Site Generation (SSG) with `generateStaticParams` combined with dynamic server-side filters.
- **🎨 Warm Bistro UI**: Handcrafted responsive design system with smooth card hover zooms, badge pill ribbons, and glassmorphism headers.
- **🚫 Custom 404 Recovery**: Friendly 404 error page with quick links and suggested recipes.

---

## 📁 Project Structure

```
recipe_explorer/
├── src/
│   ├── app/
│   │   ├── cuisines/
│   │   │   ├── [cuisine]/page.tsx   # Regional cuisine hub
│   │   │   └── page.tsx             # Cuisines listing page
│   │   ├── recipes/
│   │   │   ├── [id]/page.tsx        # Recipe detail page with photo & steps
│   │   │   └── page.tsx             # Recipe catalog with hero, search & filters
│   │   ├── favicon.ico
│   │   ├── globals.css              # Global styling, tokens & responsive styles
│   │   ├── layout.tsx               # Root layout with Header and Footer
│   │   ├── not-found.tsx            # Custom 404 error page
│   │   └── page.tsx                 # Root redirect to /recipes
│   ├── components/
│   │   ├── Checklist.tsx            # Interactive ingredient checklist
│   │   └── ui.tsx                   # UI components (Header, Footer, RecipeCard, Crumbs)
│   └── lib/
│       └── recipes.ts               # Recipe datasets, types, and helper utilities
├── public/
│   └── recipes/                     # High-resolution recipe photography
├── next.config.ts                   # Next.js configuration
├── package.json                     # Project dependencies and scripts
└── tsconfig.json                    # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hemangsingh-47/Recipe_Explorer.git
   cd Recipe_Explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the app.

---

## 🛠️ Scripts

- `npm run dev` - Starts the local development server with Turbopack.
- `npm run build` - Generates an optimized production build.
- `npm run start` - Runs the production server.
- `npm run lint` - Runs ESLint code quality checks.

---

## 👨‍💻 Author

Created by **Hemang Singh** ([@hemangsingh-47](https://github.com/hemangsingh-47))

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
