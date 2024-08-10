import { Transaction } from './transaction';

export interface Account {
    id: number;
    name: string;
    balance: number;
    description: string;
    transactions: Transaction[];
}
