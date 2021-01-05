import { Address } from './address';
import { Image } from './image';
import { User } from './user';

export interface Post {
    id: string;
    brand: string;
    model: string;
    engine: string;
    hp: string;
    fabrication: Date;
    address: Address;
    description: string;
    pricePerDay: string;
    postCategory: postCategory;
    images: Image[];
    owner: User;
}
