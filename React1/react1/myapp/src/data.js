export const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Priya Sharma",
    price: 45000,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
    description: "A vibrant exploration of color and emotion through abstract forms.",
    category: "Painting",
    medium: "Acrylic on Canvas",
    dimensions: "36 x 48 inches",
    year: 2023,
    tags: ["Abstract", "Modern", "Acrylic"],
    isNew: true,
    inStock: true,
    stock: 1
  },
  {
    id: 2,
    title: "Urban Dreams",
    artist: "Rahul Dev",
    price: 38000,
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d",
    description: "Contemporary interpretation of urban landscapes in twilight.",
    category: "Painting",
    medium: "Oil on Canvas",
    dimensions: "24 x 36 inches",
    year: 2023,
    tags: ["Cityscape", "Contemporary", "Oil"],
    isNew: false,
    inStock: true,
    stock: 2
  },
  {
    id: 3,
    title: "Eternal Dance",
    artist: "Maya Patel",
    price: 52000,
    image: "https://images.unsplash.com/photo-1578321272066-408ea0f3f494",
    description: "Bronze sculpture depicting the fluid motion of classical dance.",
    category: "Sculpture",
    medium: "Bronze",
    dimensions: "18 x 12 x 30 inches",
    year: 2023,
    tags: ["Sculpture", "Bronze", "Classical"],
    isNew: true,
    inStock: true,
    stock: 1
  },
  {
    id: 4,
    title: "Digital Dreams",
    artist: "Arun Kumar",
    price: 29000,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "Digital artwork exploring the intersection of technology and nature.",
    category: "Digital Art",
    medium: "Digital Print on Canvas",
    dimensions: "30 x 40 inches",
    year: 2023,
    tags: ["Digital", "Contemporary", "Limited Edition"],
    isNew: true,
    inStock: true,
    stock: 5
  }
];

export const categories = [
  "Painting",
  "Sculpture",
  "Photography",
  "Digital Art",
  "Mixed Media"
];

export const filters = {
  priceRanges: [
    { label: "Under ₹10,000", min: 0, max: 10000 },
    { label: "₹10,000 - ₹25,000", min: 10000, max: 25000 },
    { label: "₹25,000 - ₹50,000", min: 25000, max: 50000 },
    { label: "Above ₹50,000", min: 50000, max: Infinity }
  ],
  mediums: [
    "Oil",
    "Acrylic",
    "Watercolor",
    "Digital",
    "Bronze",
    "Marble",
    "Photography",
    "Mixed Media"
  ]
};