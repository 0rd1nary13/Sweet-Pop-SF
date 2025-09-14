import { TanghuluItem, TanghuluCategory, TanghuluData } from '../types/tanghulu';

const tanghuluItems: TanghuluItem[] = [
  {
    id: 1,
    name: 'Traditional Hawthorn Tanghulu',
    chineseName: '山楂糖葫芦',
    description: 'The classic and most traditional form of Tanghulu, made with hawthorn fruits coated in a hard sugar shell. The combination of the sweet outer coating and the tart hawthorn creates a perfect balance of flavors.',
    image: '/images/traditional-hawthorn.jpg',
    ingredients: ['hawthorn fruits', 'sugar', 'water', 'bamboo skewer'],
    origin: 'Northern China',
    popularity: 10
  },
  {
    id: 2,
    name: 'Strawberry Tanghulu',
    chineseName: '草莓糖葫芦',
    description: 'A popular modern variation using strawberries instead of traditional hawthorn. The juicy strawberries pair wonderfully with the crisp sugar coating, creating a delightful sweet treat.',
    image: '/images/strawberry-tanghulu.jpg',
    ingredients: ['strawberries', 'sugar', 'water', 'bamboo skewer'],
    popularity: 9
  },
  {
    id: 3,
    name: 'Mixed Fruit Tanghulu',
    chineseName: '水果糖葫芦',
    description: 'A colorful assortment of different fruits on a single skewer, all coated in the signature crispy sugar shell. This variety offers a medley of flavors and textures in one treat.',
    image: '/images/mixed-fruit-tanghulu.jpg',
    ingredients: ['grapes', 'strawberries', 'kiwi', 'pineapple', 'sugar', 'water', 'bamboo skewer'],
    popularity: 8
  },
  {
    id: 4,
    name: 'Grape Tanghulu',
    chineseName: '葡萄糖葫芦',
    description: 'Small grapes on a stick coated in hardened sugar syrup. The thin crispy sugar shell shatters delightfully when bitten into, revealing the juicy grape inside.',
    image: '/images/grape-tanghulu.jpg',
    ingredients: ['grapes', 'sugar', 'water', 'bamboo skewer'],
    popularity: 7
  },
  {
    id: 5,
    name: 'Blueberry Tanghulu',
    chineseName: '蓝莓糖葫芦',
    description: 'Plump blueberries coated in a crystal-clear sugar shell. The small size of blueberries makes this a popular bite-sized version of the traditional treat.',
    image: '/images/blueberry-tanghulu.jpg',
    ingredients: ['blueberries', 'sugar', 'water', 'bamboo skewer'],
    popularity: 6
  },
  {
    id: 6,
    name: 'Chocolate-Dipped Tanghulu',
    chineseName: '巧克力糖葫芦',
    description: 'A modern fusion dessert where traditional sugar-coated fruits are partially dipped in chocolate, creating a delightful contrast of textures and flavors.',
    image: '/images/chocolate-tanghulu.jpg',
    ingredients: ['hawthorn or other fruits', 'sugar', 'water', 'chocolate', 'bamboo skewer'],
    popularity: 8
  },
  {
    id: 7,
    name: 'Cherry Tomato Tanghulu',
    chineseName: '圣女果糖葫芦',
    description: 'Sweet cherry tomatoes coated in hardened sugar syrup. This unusual combination has become trendy in recent years for its unique sweet-savory contrast.',
    image: '/images/tomato-tanghulu.jpg',
    ingredients: ['cherry tomatoes', 'sugar', 'water', 'bamboo skewer'],
    popularity: 5
  },
  {
    id: 8,
    name: 'Mandarin Orange Tanghulu',
    chineseName: '橘子糖葫芦',
    description: 'Small mandarin orange segments coated in a crispy sugar shell. The citrus flavor provides a refreshing twist on the traditional tanghulu.',
    image: '/images/orange-tanghulu.jpg',
    ingredients: ['mandarin oranges', 'sugar', 'water', 'bamboo skewer'],
    popularity: 7
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
    
    // Modern variations
    if ([6, 7].includes(item.id)) {
      categories.modern.push(item);
    }
    
    // Fruit-based tanghulu
    if ([2, 3, 4, 5, 8].includes(item.id)) {
      categories.fruit.push(item);
    }
    
    // Special varieties
    if ([3, 6].includes(item.id)) {
      categories.special.push(item);
    }
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
