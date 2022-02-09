export type TMattress = {
    name: string;
    price: number;
    reviewRating: number;
    imageFileName: string;
};

export type TMattressKey = keyof TMattress;
