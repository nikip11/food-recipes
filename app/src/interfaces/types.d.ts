export interface Food {
  id?: number
  title: string
  value100: number
  portion: number
  kc_portion: number
  category: Category | null
}

export interface Category {
  id?: number
  title: string
  image: string
  slug: string
  norder: number
}

export interface Tag {
  id?: number
  title: string
  slug?: string
}

export interface Ingredient {
  food: Food
  weight: number
  portion: string
  unit: string
}

export interface Recipe {
  id?: number
  title: string
  preparation: string
  image: string
  link: string
  portions: number
  kalories?: number
  time?: string
  tags?: Tag[]
  ingredients: Ingredient[]
}