import { TanghuluItem, TanghuluCategory, TanghuluData } from '../types/tanghulu';

const tanghuluItems: TanghuluItem[] = [
  {
    id: 1,
    name: 'Shanzha Pop',
    chineseName: '山楂糖葫芦',
    description: 'The classic and most traditional form of Tanghulu, made with hawthorn fruits coated in a hard sugar shell. The combination of the sweet outer coating and the tart hawthorn creates a perfect balance of flavors.',
    image: '/images/traditional-hawthorn.png',
    ingredients: ['hawthorn fruits', 'sugar', 'water', 'bamboo skewer'],
    origin: 'Northern China',
    popularity: 10,
    sweetness: 6
  },
  {
    id: 2,
    name: 'Grape Fruit Pop',
    chineseName: '葡萄糖葫芦',
    description: 'Small grapes on a stick coated in hardened sugar syrup. The thin crispy sugar shell shatters delightfully when bitten into, revealing the juicy grape inside.',
    image: '/images/grape-tanghulu.png',
    ingredients: ['grapes', 'sugar', 'water', 'bamboo skewer'],
    popularity: 9,
    sweetness: 9
  },
  {
    id: 3,
    name: 'Mixed Fruit Pop',
    chineseName: '水果糖葫芦',
    description: 'A colorful assortment of different fruits on a single skewer, all coated in the signature crispy sugar shell. This variety offers a medley of flavors and textures in one treat.',
    image: '/images/mixed-fruit-tanghulu.png',
    ingredients: ['grapes', 'strawberries', 'kiwi', 'pineapple', 'sugar', 'water', 'bamboo skewer'],
    popularity: 8,
    sweetness: 7
  }
];

// Categorize items
const categorizeItems = (items: TanghuluItem[]): TanghuluData => {
  const categories: {[key in TanghuluCategory]: TanghuluItem[]} = {
    traditional: [],
    modern: [],
    fruit: [],
    special: []
  };
  
  // Categorize based on certain criteria
  items.forEach(item => {
    // Traditional hawthorn tanghulu
    if (item.id === 1) {
      categories.traditional.push(item);
    }
    
    // Fruit-based tanghulu
    if ([2, 3].includes(item.id)) {
      categories.fruit.push(item);
    }
    
    // All items are special varieties for this simplified list
    categories.special.push(item);
  });
  
  return {
    items,
    categories
  };
};

export const getTanghuluData = (): TanghuluData => {
  return categorizeItems(tanghuluItems);
};

export const getTanghuluById = (id: number): TanghuluItem | undefined => {
  return tanghuluItems.find(item => item.id === id);
};

export const getTanghuluByCategory = (category: TanghuluCategory): TanghuluItem[] => {
  const data = categorizeItems(tanghuluItems);
  return data.categories[category] || [];
};

const tanghuluService = {
  getTanghuluData,
  getTanghuluById,
  getTanghuluByCategory
};

export default tanghuluService;
