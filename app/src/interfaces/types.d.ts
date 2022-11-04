export interface Food {
  id?: number;
  name: string;
  kc_100: number;
  kc_portion: number;
  portion: number;
  kc_portion: number;
  category: Category | null;
  created_at?: DateTime;
  updated_at?: DateTime;
}

export interface Category {
  id?: number;
  name: string;
  image?: string;
  slug?: string;
}

export interface Tag {
  id?: number;
  title: string;
  slug?: string;
}

export interface Ingredient {
  food: Food;
  weight: number;
  portion: string;
  unit: string;
}

export interface Recipe {
  id?: number;
  title: string;
  preparation: string;
  image: string;
  link: string;
  portions: number;
  kalories?: number;
  time?: string;
  tags: Tag[] | null;
  ingredients: Ingredient[];
}
