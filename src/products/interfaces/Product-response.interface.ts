import { Product } from "../entities";


export interface ProductResponse{

    product?: Product,
    images: string[];
}