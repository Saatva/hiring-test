export interface Mattress {
  name: string;
  price: number;
  reviewRating: number;
  imageFileName: string;
}

export interface Mattresses {
  mattresses: Mattress[];
}