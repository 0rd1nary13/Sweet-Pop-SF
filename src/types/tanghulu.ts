export interface TanghuluItem {
  id: number;
  name: string;
  chineseName: string;
  description: string;
  image: string;
  ingredients: string[];
  origin?: string;
  popularity: number; // 1-10 scale
}

export type TanghuluCategory = 'traditional' | 'modern' | 'fruit' | 'special';

export interface TanghuluData {
  items: TanghuluItem[];
  categories: {
    [key in TanghuluCategory]: TanghuluItem[];
  }
} 