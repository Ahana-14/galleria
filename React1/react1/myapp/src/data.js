export const artworks = [
  {
    id: 1,
    title: "Sunset Canvas",
    artist: "Priya Sharma",
    price: 89.99,
    image: "https://picsum.photos/400/400?random=1",
    description: "A beautiful sunset painting with warm colors and dramatic sky.",
    category: "Paintings",
    medium: "Acrylic on Canvas",
    dimensions: "36 x 48 inches",
    year: 2023,
    tags: ["Sunset", "Landscape", "Acrylic"],
    isNew: true,
    inStock: true,
    stock: 3
  },
  {
    id: 2,
    title: "Abstract Colors",
    artist: "Rahul Dev",
    price: 75.50,
    image: "https://picsum.photos/400/400?random=2",
    description: "Vibrant abstract artwork with bold color combinations.",
    category: "Paintings",
    medium: "Oil on Canvas",
    dimensions: "24 x 36 inches",
    year: 2023,
    tags: ["Abstract", "Modern", "Oil"],
    isNew: false,
    inStock: true,
    stock: 2
  },
  {
    id: 3,
    title: "Marble Buddha",
    artist: "Maya Patel",
    price: 250.00,
    image: "https://picsum.photos/400/400?random=5",
    description: "Hand-carved marble Buddha statue with intricate details.",
    category: "Sculptures",
    medium: "Marble",
    dimensions: "18 x 12 x 30 inches",
    year: 2023,
    tags: ["Sculpture", "Marble", "Buddha"],
    isNew: true,
    inStock: true,
    stock: 1
  },
  {
    id: 4,
    title: "Handwoven Basket",
    artist: "Arun Kumar",
    price: 45.99,
    image: "https://picsum.photos/400/400?random=9",
    description: "Traditional handwoven basket made from natural fibers.",
    category: "Handicrafts",
    medium: "Natural Fibers",
    dimensions: "12 x 8 x 6 inches",
    year: 2023,
    tags: ["Handicraft", "Natural", "Traditional"],
    isNew: true,
    inStock: true,
    stock: 5
  },
  {
    id: 5,
    title: "Clay Vase",
    artist: "Sarah Johnson",
    price: 55.25,
    image: "https://picsum.photos/400/400?random=13",
    description: "Hand-thrown clay vase with natural earth tones.",
    category: "Pottery",
    medium: "Clay",
    dimensions: "10 x 6 inches",
    year: 2023,
    tags: ["Pottery", "Clay", "Handmade"],
    isNew: false,
    inStock: true,
    stock: 6
  },
  {
    id: 6,
    title: "Beaded Necklace",
    artist: "Anna Rodriguez",
    price: 85.00,
    image: "https://picsum.photos/400/400?random=17",
    description: "Handcrafted beaded necklace with semi-precious stones.",
    category: "Jewelry",
    medium: "Beads & Stones",
    dimensions: "18 inches",
    year: 2023,
    tags: ["Jewelry", "Beads", "Handmade"],
    isNew: true,
    inStock: true,
    stock: 2
  },
  {
    id: 7,
    title: "Landscape Art",
    artist: "David Chen",
    price: 120.00,
    image: "https://picsum.photos/400/400?random=3",
    description: "Peaceful mountain landscape with serene blue tones.",
    category: "Paintings",
    medium: "Watercolor on Paper",
    dimensions: "20 x 30 inches",
    year: 2023,
    tags: ["Landscape", "Watercolor", "Nature"],
    isNew: false,
    inStock: true,
    stock: 4
  },
  {
    id: 8,
    title: "Wooden Horse",
    artist: "Lisa Wang",
    price: 180.25,
    image: "https://picsum.photos/400/400?random=6",
    description: "Handcrafted wooden horse sculpture from reclaimed teak.",
    category: "Sculptures",
    medium: "Teak Wood",
    dimensions: "12 x 8 x 16 inches",
    year: 2023,
    tags: ["Sculpture", "Wood", "Animal"],
    isNew: true,
    inStock: true,
    stock: 2
  }
];

export const categories = [
  "Paintings",
  "Sculptures",
  "Handicrafts",
  "Pottery",
  "Jewelry"
];

export const filters = {
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "Above $200", min: 200, max: Infinity }
  ],
  mediums: [
    "Oil",
    "Acrylic",
    "Watercolor",
    "Marble",
    "Wood",
    "Clay",
    "Beads",
    "Natural Fibers"
  ]
};