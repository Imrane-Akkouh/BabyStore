import { Product } from './product.model';

export class User{
    constructor(
        public id: string,
        public email: string, 
        public role: string,
        public products: string[]
        ){}
}