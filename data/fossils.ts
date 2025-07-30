export interface Fossil {
  id: string;
  name: string;
  scientificName: string;
  period: string;
  description: string;
  habitat: string;
  size: string;
  location: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'very rare';
  illustration: {
    primaryColor: string;
    secondaryColor: string;
    shape: 'spiral' | 'branching' | 'segmented' | 'circular' | 'elongated';
  };
}

export const fossils: Fossil[] = [
  {
    id: "1",
    name: "Tyrannosaurus Rex Tooth",
    scientificName: "Tyrannosaurus rex",
    period: "Cretaceous",
    description: "Massive serrated tooth from the most famous predator that ever lived",
    habitat: "Forested river plains",
    size: "4-6 inches",
    location: "North America (Montana, USA)",
    rarity: "very rare",
    illustration: {
      primaryColor: "#2C1810",
      secondaryColor: "#8B4513",
      shape: "elongated"
    }
  },
  {
    id: "2",
    name: "Ammonite",
    scientificName: "Dactylioceras commune",
    period: "Jurassic",
    description: "Beautiful spiral-shelled marine cephalopod with intricate suture patterns",
    habitat: "Shallow seas",
    size: "2-8 inches",
    location: "Worldwide (especially Germany & UK)",
    rarity: "common",
    illustration: {
      primaryColor: "#4169E1",
      secondaryColor: "#87CEEB",
      shape: "spiral"
    }
  },
  {
    id: "3",
    name: "Trilobite",
    scientificName: "Calymene blumenbachii",
    period: "Silurian",
    description: "Perfectly preserved compound eyes and exoskeleton segments",
    habitat: "Ocean floor",
    size: "1-4 inches",
    location: "Wales, UK",
    rarity: "uncommon",
    illustration: {
      primaryColor: "#696969",
      secondaryColor: "#A9A9A9",
      shape: "segmented"
    }
  },
  {
    id: "4",
    name: "Archaeopteryx Feather",
    scientificName: "Archaeopteryx lithographica",
    period: "Jurassic",
    description: "First bird-like creature showing the evolutionary link between dinosaurs and birds",
    habitat: "Tropical lagoons",
    size: "2-3 inches",
    location: "Bavaria, Germany",
    rarity: "very rare",
    illustration: {
      primaryColor: "#8B4513",
      secondaryColor: "#DEB887",
      shape: "elongated"
    }
  },
  {
    id: "5",
    name: "Megalodon Tooth",
    scientificName: "Carcharocles megalodon",
    period: "Miocene",
    description: "Enormous tooth from the largest shark that ever lived - up to 60 feet long!",
    habitat: "Open ocean",
    size: "3-7 inches",
    location: "Worldwide coastal areas",
    rarity: "rare",
    illustration: {
      primaryColor: "#000000",
      secondaryColor: "#4A4A4A",
      shape: "elongated"
    }
  },
  {
    id: "6",
    name: "Opalized Belemnite",
    scientificName: "Belemnites australis",
    period: "Cretaceous",
    description: "Squid-like creature preserved in stunning rainbow opal",
    habitat: "Warm seas",
    size: "2-5 inches",
    location: "Coober Pedy, Australia",
    rarity: "very rare",
    illustration: {
      primaryColor: "#FF4500",
      secondaryColor: "#FFD700",
      shape: "elongated"
    }
  },
  {
    id: "7",
    name: "Velociraptor Claw",
    scientificName: "Velociraptor mongoliensis",
    period: "Cretaceous",
    description: "Sickle-shaped killing claw from the famous pack hunter",
    habitat: "Desert environments",
    size: "3-4 inches",
    location: "Gobi Desert, Mongolia",
    rarity: "very rare",
    illustration: {
      primaryColor: "#8B4513",
      secondaryColor: "#CD853F",
      shape: "elongated"
    }
  },
  {
    id: "8",
    name: "Crinoid Garden",
    scientificName: "Pentacrinites fossilis",
    period: "Jurassic",
    description: "Sea lily colony preserved as a beautiful underwater garden",
    habitat: "Deep ocean floor",
    size: "6-24 inches",
    location: "Holzmaden, Germany",
    rarity: "uncommon",
    illustration: {
      primaryColor: "#228B22",
      secondaryColor: "#90EE90",
      shape: "branching"
    }
  },
  {
    id: "9",
    name: "Dickinsonia",
    scientificName: "Dickinsonia costata",
    period: "Ediacaran",
    description: "One of Earth's earliest complex life forms - 550 million years old!",
    habitat: "Ancient seafloor",
    size: "4-8 inches",
    location: "Ediacara Hills, Australia",
    rarity: "very rare",
    illustration: {
      primaryColor: "#9370DB",
      secondaryColor: "#DDA0DD",
      shape: "circular"
    }
  },
  {
    id: "10",
    name: "Brachiosaurus Vertebra",
    scientificName: "Brachiosaurus altithorax",
    period: "Jurassic",
    description: "Massive spine bone from one of the tallest dinosaurs ever",
    habitat: "River floodplains",
    size: "8-16 inches",
    location: "Colorado, USA",
    rarity: "rare",
    illustration: {
      primaryColor: "#D2691E",
      secondaryColor: "#F4A460",
      shape: "circular"
    }
  },
  {
    id: "11",
    name: "Ginkgo Leaf",
    scientificName: "Ginkgo adiantoides",
    period: "Jurassic",
    description: "Perfect leaf impression from ancient ginkgo trees",
    habitat: "Temperate forests",
    size: "2-4 inches",
    location: "Liaoning, China",
    rarity: "common",
    illustration: {
      primaryColor: "#228B22",
      secondaryColor: "#ADFF2F",
      shape: "circular"
    }
  },
  {
    id: "12",
    name: "Amber Spider",
    scientificName: "Nephila clavipes",
    period: "Oligocene",
    description: "Perfectly preserved spider trapped in golden amber",
    habitat: "Tropical forest",
    size: "1-2 inches",
    location: "Dominican Republic",
    rarity: "rare",
    illustration: {
      primaryColor: "#FFB6C1",
      secondaryColor: "#FFA500",
      shape: "circular"
    }
  },
  {
    id: "13",
    name: "Ichthyosaur Paddle",
    scientificName: "Ophthalmosaurus icenicus",
    period: "Jurassic",
    description: "Flipper from dolphin-like marine reptile with huge eyes",
    habitat: "Open ocean",
    size: "12-18 inches",
    location: "Dorset, England",
    rarity: "rare",
    illustration: {
      primaryColor: "#4682B4",
      secondaryColor: "#B0E0E6",
      shape: "elongated"
    }
  },
  {
    id: "14",
    name: "Sauropod Egg",
    scientificName: "Titanosaurus indicus",
    period: "Cretaceous",
    description: "Giant dinosaur egg with visible shell texture",
    habitat: "Nesting grounds",
    size: "6-8 inches",
    location: "Patagonia, Argentina",
    rarity: "uncommon",
    illustration: {
      primaryColor: "#DEB887",
      secondaryColor: "#F5DEB3",
      shape: "circular"
    }
  },
  {
    id: "15",
    name: "Hallucigenia",
    scientificName: "Hallucigenia sparsa",
    period: "Cambrian",
    description: "Bizarre spiky creature from the Cambrian explosion",
    habitat: "Ocean floor",
    size: "0.5-2 inches",
    location: "Burgess Shale, Canada",
    rarity: "very rare",
    illustration: {
      primaryColor: "#FF69B4",
      secondaryColor: "#FFB6C1",
      shape: "elongated"
    }
  }
];

export const getRandomFossil = (): Fossil => {
  const randomIndex = Math.floor(Math.random() * fossils.length);
  return fossils[randomIndex];
};