export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  difficulty: "Easy" | "Medium" | "Hard";
  minutes: number;
  servings: number;
  summary: string;
  tone: string;
  emoji: string;
  image: string;
  rating?: number;
  ingredients: string[];
  steps: { title: string; body: string }[];
};

export type CuisineInfo = {
  name: string;
  emoji: string;
  description: string;
};

export const cuisineMeta: Record<string, { emoji: string; description: string }> = {
  "Asian": { emoji: "🥢", description: "Vibrant stir-fries, fragrant aromatics, and rich umami broths." },
  "Mediterranean": { emoji: "🫒", description: "Sun-ripened produce, cold-pressed olive oils, and wholesome bakes." },
  "European": { emoji: "🌿", description: "Classic oven roasts, garden herbs, and time-tested comfort cooking." },
  "Indian": { emoji: "🌶️", description: "Aromatic whole spices, golden gravies, and slow-tempered dals." },
  "Italian": { emoji: "🍕", description: "Artisanal breads, vine-ripened tomatoes, and rustic regional flavors." },
  "Latin American": { emoji: "🥑", description: "Smoky chipotle chilis, simmered beans, and zesty fresh citrus." },
  "Middle Eastern": { emoji: "🧆", description: "Creamy roasted tahini, warm spices, and vibrant herb salads." },
};

export const recipes: Recipe[] = [
  {
    id: "vegetable-noodles",
    title: "Vegetable Noodles",
    cuisine: "Asian",
    difficulty: "Easy",
    minutes: 20,
    servings: 2,
    tone: "#ea580c",
    emoji: "🍜",
    image: "/recipes/vegetable-noodles.jpg",
    rating: 4.8,
    summary: "Tender wok-tossed ribbons with ginger-tamari glaze, crisp garden vegetables, and toasted sesame.",
    ingredients: [
      "200g wheat noodles or soba",
      "1 tbsp toasted sesame oil",
      "1 small carrot, julienned",
      "1 red bell pepper, thinly sliced",
      "2 cups shredded savoy cabbage",
      "2 scallions, diagonally sliced",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp dark soy sauce",
      "1 tsp freshly grated ginger"
    ],
    steps: [
      { title: "Par-boil the noodles", body: "Cook in salted boiling water until al dente, drain, and toss with half the sesame oil." },
      { title: "Preheat the wok", body: "Heat a wide skillet or wok over medium-high heat with the remaining oil until shimmering." },
      { title: "Flash the aromatics and vegetables", body: "Add ginger, carrot, and pepper; stir-fry briskly for 3 minutes until tender-crisp." },
      { title: "Add greens and sauce", body: "Fold in the cabbage and noodles, then pour in both soy sauces." },
      { title: "Glaze and finish", body: "Toss for 2 minutes until glossy. Finish with scallions and serve hot." }
    ]
  },
  {
    id: "rustic-tomato-galette",
    title: "Rustic Tomato Galette",
    cuisine: "Mediterranean",
    difficulty: "Medium",
    minutes: 45,
    servings: 4,
    tone: "#e11d48",
    emoji: "🍅",
    image: "/recipes/rustic-tomato-galette.jpg",
    rating: 4.9,
    summary: "Flaky golden spelt pastry folded over slow-roasted heirloom tomatoes and herbed ricotta cheese.",
    ingredients: [
      "200g spelt flour",
      "100g cold butter, cubed",
      "4 heirloom tomatoes, sliced",
      "150g fresh ricotta cheese",
      "1 tbsp fresh thyme leaves",
      "1 egg, beaten for glaze",
      "Coarse sea salt and cracked pepper"
    ],
    steps: [
      { title: "Make the dough", body: "Rub butter into flour with a pinch of salt, add 3 tbsp ice water, form into a disc, and chill 20 minutes." },
      { title: "Salt the tomatoes", body: "Layer tomato slices on paper towels with salt to drain excess moisture for 15 minutes." },
      { title: "Assemble the galette", body: "Roll the dough into a rough 30cm circle, spread herbed ricotta, layer tomatoes, and fold pastry edges in." },
      { title: "Bake to golden perfection", body: "Brush crust with beaten egg and bake at 200°C for 35 minutes until crisp and deeply golden." }
    ]
  },
  {
    id: "lemon-herb-roast-chicken",
    title: "Lemon Herb Roast Chicken",
    cuisine: "European",
    difficulty: "Medium",
    minutes: 90,
    servings: 4,
    tone: "#d97706",
    emoji: "🍗",
    image: "/recipes/lemon-herb-roast-chicken.jpg",
    rating: 4.9,
    summary: "Crispy herb-crusted skin infused with crushed garlic, fresh lemon zest, and rosemary sprigs.",
    ingredients: [
      "1 whole chicken (approx. 1.6kg)",
      "1 large lemon, zested and halved",
      "6 garlic cloves, crushed",
      "2 tbsp cold-pressed olive oil",
      "1 tsp cracked black peppercorns",
      "Handful of fresh thyme and rosemary sprigs",
      "1 tbsp flaky sea salt"
    ],
    steps: [
      { title: "Dry and season", body: "Pat the chicken thoroughly dry and rub evenly with olive oil, zest, garlic, salt, and cracked pepper." },
      { title: "Stuff the cavity", body: "Stuff lemon halves and fresh herb sprigs into the cavity, then truss the legs with kitchen twine." },
      { title: "Slow roast", body: "Roast at 200°C for approximately 75 minutes until juices run completely clear and skin is deep amber." },
      { title: "Rest and carve", body: "Allow the roast to rest undisturbed for 15 minutes before carving to retain all flavorful juices." }
    ]
  },
  {
    id: "miso-glazed-eggplant",
    title: "Miso Glazed Eggplant",
    cuisine: "Asian",
    difficulty: "Easy",
    minutes: 25,
    servings: 2,
    tone: "#7c3aed",
    emoji: "🍆",
    image: "/recipes/miso-glazed-eggplant.jpg",
    rating: 4.7,
    summary: "Diamond-scored Japanese eggplant broiled with sweet red miso glaze, mirin, and toasted sesame.",
    ingredients: [
      "2 Japanese eggplants, halved lengthwise",
      "3 tbsp red or awase miso",
      "2 tbsp sweet mirin",
      "1 tbsp neutral oil",
      "1 tbsp raw sugar or maple syrup",
      "1 tsp toasted sesame seeds",
      "1 scallion, finely sliced"
    ],
    steps: [
      { title: "Score the flesh", body: "Cut a deep diamond cross-hatch pattern into each half and brush lightly with neutral oil." },
      { title: "Roast tender", body: "Roast cut-side up at 220°C for 15 minutes until flesh is completely tender and soft." },
      { title: "Glaze and caramelize", body: "Whisk miso, mirin, and sugar together; generously spoon over eggplant and broil 3 minutes until bubbling." },
      { title: "Garnish", body: "Scatter toasted sesame seeds and fresh scallions over the top before plating." }
    ]
  },
  {
    id: "classic-lentil-dhal",
    title: "Classic Lentil Dhal",
    cuisine: "Indian",
    difficulty: "Easy",
    minutes: 35,
    servings: 4,
    tone: "#ca8a04",
    emoji: "🍲",
    image: "/recipes/classic-lentil-dhal.jpg",
    rating: 4.8,
    summary: "Creamy golden split lentils simmered with turmeric and garlic, finished with a sizzling cumin tarka.",
    ingredients: [
      "1 cup yellow split lentils (moong or toor dal)",
      "1 tsp ground turmeric",
      "1 medium onion, finely diced",
      "3 garlic cloves, minced",
      "1 inch ginger piece, grated",
      "1 tsp whole cumin seeds",
      "2 tbsp pure desi ghee or coconut oil",
      "Fresh coriander leaves and lemon wedges"
    ],
    steps: [
      { title: "Simmer the lentils", body: "Cook rinsed lentils with turmeric and 4 cups water for 25 minutes until soft and creamy." },
      { title: "Temper the aromatics", body: "Heat ghee in a pan; fry cumin seeds until fragrant, then saute onions, ginger, and garlic until golden brown." },
      { title: "Combine and sizzle", body: "Pour the sizzling tarka over the bubbling dhal, stir gently, and season with sea salt." },
      { title: "Finish and serve", body: "Garnish with fresh chopped coriander and a squeeze of lemon juice." }
    ]
  },
  {
    id: "sourdough-focaccia",
    title: "Sourdough Focaccia",
    cuisine: "Italian",
    difficulty: "Hard",
    minutes: 60,
    servings: 8,
    tone: "#b45309",
    emoji: "🥖",
    image: "/recipes/sourdough-focaccia.jpg",
    rating: 5.0,
    summary: "Airy high-hydration focaccia with bubbly open crumb, steeped in extra virgin olive oil and garden rosemary.",
    ingredients: [
      "500g strong bread flour",
      "400g lukewarm water",
      "100g active bubbly sourdough starter",
      "10g fine sea salt",
      "80ml extra virgin olive oil",
      "Flaky Maldon sea salt and fresh rosemary"
    ],
    steps: [
      { title: "Mix and autolyse", body: "Combine flour, water, active starter, and salt into a wet dough. Rest covered for 30 minutes." },
      { title: "Stretch and fold", body: "Perform four sets of gentle stretch-and-folds, spaced 30 minutes apart to build dough structure." },
      { title: "Pan fermentation and dimple", body: "Transfer into an oiled baking pan, let proof until pillowy, then dimple deeply with oiled fingertips." },
      { title: "Bake until blistered", body: "Scatter flaky salt and rosemary sprigs; bake at 230°C for 25 minutes until crust is blistered and golden." }
    ]
  },
  {
    id: "smoky-black-bean-soup",
    title: "Smoky Black Bean Soup",
    cuisine: "Latin American",
    difficulty: "Easy",
    minutes: 30,
    servings: 4,
    tone: "#be123c",
    emoji: "🥣",
    image: "/recipes/smoky-black-bean-soup.jpg",
    rating: 4.6,
    summary: "Hearty simmered black turtle beans in a savory chipotle-cumin broth, topped with avocado and lime.",
    ingredients: [
      "2 cans black beans, rinsed and drained",
      "1 chipotle pepper in adobo sauce, minced",
      "1 red onion, finely diced",
      "3 garlic cloves, crushed",
      "1 tsp ground cumin and Mexican oregano",
      "3 cups rich vegetable stock",
      "Fresh lime juice, cilantro, and avocado slices"
    ],
    steps: [
      { title: "Soften the base", body: "Sauté chopped onion and garlic in olive oil with cumin and oregano for 5 minutes until soft." },
      { title: "Simmer with chipotle", body: "Add black beans, minced chipotle with adobo sauce, and vegetable stock; simmer gently for 20 minutes." },
      { title: "Blend and balance", body: "Immersion-blend half the soup for a thick velvety texture, stir back in, and season with lime and salt." },
      { title: "Garnish and serve", body: "Ladle into warm bowls and top with fresh diced avocado, chopped cilantro, and lime wedges." }
    ]
  },
  {
    id: "sesame-tahini-noodles",
    title: "Sesame Tahini Noodles",
    cuisine: "Middle Eastern",
    difficulty: "Easy",
    minutes: 15,
    servings: 2,
    tone: "#0d9488",
    emoji: "🥢",
    image: "/recipes/sesame-tahini-noodles.jpg",
    rating: 4.7,
    summary: "Chilled ribbon noodles tossed in a silky roasted tahini sauce, crisp ribbon cucumbers, and Aleppo chili flakes.",
    ingredients: [
      "200g wheat or ramen noodles",
      "3 tbsp creamy roasted tahini",
      "1 tbsp low-sodium soy sauce",
      "1 tbsp fresh lemon juice",
      "1 tsp toasted chili oil or Aleppo flakes",
      "1 crisp Persian cucumber, thinly sliced",
      "Toasted sesame seeds and cilantro"
    ],
    steps: [
      { title: "Cook and chill", body: "Boil noodles until just tender, drain immediately, and rinse under cold running water." },
      { title: "Whisk the tahini sauce", body: "Whisk together tahini, soy sauce, lemon juice, chili oil, and 3 tbsp ice water until silky and smooth." },
      { title: "Coat and assemble", body: "Toss chilled noodles in the tahini dressing until thoroughly coated." },
      { title: "Plate with crunch", body: "Arrange in bowls and top generously with sliced cucumber, sesame seeds, and fresh cilantro." }
    ]
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    cuisine: "Indian",
    difficulty: "Medium",
    minutes: 40,
    servings: 4,
    tone: "#e0533c",
    emoji: "🧀",
    image: "/recipes/paneer-butter-masala.jpg",
    rating: 4.9,
    summary: "Soft cottage cheese cubes simmered in a velvety, spiced cashew-tomato butter sauce with crushed kasuri methi.",
    ingredients: [
      "250g fresh paneer, cubed",
      "4 ripe tomatoes, puréed",
      "15 whole cashews, soaked and blended to paste",
      "2 tbsp unsalted butter and 1 tbsp oil",
      "1 tsp garam masala and Kashmiri red chili",
      "1/2 cup heavy cream",
      "1 tbsp crushed dried fenugreek leaves (kasuri methi)"
    ],
    steps: [
      { title: "Prepare the gravy base", body: "Melt butter with oil; sauté ginger-garlic paste, then simmer tomato purée until oil separates." },
      { title: "Add cashew cream", body: "Stir in cashew paste, Kashmiri chili, and garam masala; simmer on low until rich and velvety." },
      { title: "Fold in paneer", body: "Add paneer cubes and warm water; gently simmer for 5 minutes so flavors meld without hardening paneer." },
      { title: "Finish with aroma", body: "Swirl in heavy cream and crushed kasuri methi before serving with hot naan or jeera rice." }
    ]
  },
  {
    id: "mediterranean-quinoa-bowl",
    title: "Mediterranean Quinoa Bowl",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    minutes: 20,
    servings: 2,
    tone: "#059669",
    emoji: "🥗",
    image: "/recipes/mediterranean-quinoa-bowl.jpg",
    rating: 4.8,
    summary: "Fluffy seasoned quinoa tossed with Kalamata olives, diced cucumbers, crumbled feta, and lemon-oregano vinaigrette.",
    ingredients: [
      "1 cup cooked fluffy tri-color quinoa",
      "1/2 cup Kalamata olives, pitted and halved",
      "1 English cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "100g Greek feta cheese, crumbled",
      "3 tbsp extra virgin olive oil",
      "1 tbsp lemon juice and 1 tsp dried oregano"
    ],
    steps: [
      { title: "Season the quinoa base", body: "Fluff cooked quinoa with olive oil, lemon juice, dried oregano, and a pinch of salt." },
      { title: "Chop the garden toppings", body: "Slice cucumbers, cherry tomatoes, and Kalamata olives into bite-sized pieces." },
      { title: "Assemble the bowl", body: "Divide quinoa into wide bowls, arrange toppings in colorful sections, and crumble feta over the center." },
      { title: "Drizzle and serve", body: "Finish with a final drizzle of extra virgin olive oil and freshly cracked black pepper." }
    ]
  }
];

export const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "-");
export const getRecipe = (id: string) => recipes.find((r) => r.id === id);
export const cuisines = [...new Set(recipes.map((r) => r.cuisine))];
export const cuisineFromSlug = (slug: string) => cuisines.find((c) => slugify(c) === slug);
export const getCuisineMeta = (c: string) => cuisineMeta[c] || { emoji: "🍽️", description: "Delicious regional dishes." };

/** Score by shared cuisine, similar difficulty, and similar prep time. */
export function relatedTo(r: Recipe, n = 3) {
  return recipes
    .filter((o) => o.id !== r.id)
    .map((o) => ({
      o,
      score:
        (o.cuisine === r.cuisine ? 3 : 0) +
        (o.difficulty === r.difficulty ? 1 : 0) +
        (Math.abs(o.minutes - r.minutes) <= 15 ? 1 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.o);
}

