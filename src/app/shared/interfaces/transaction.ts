import { Account } from './account';
import { Category } from './category';

export interface Transaction {
    [key: string]: any;
    id: number;
    date: Date;
    title: string;
    amount: number;
    category: Category;
    note: string;
    account: Account;
    type: 'expense' | 'income';
}
