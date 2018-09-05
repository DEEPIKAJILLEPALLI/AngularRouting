import { Address } from './address';
import { Company } from './company';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;

}
