import { Account } from './account';
import { Category } from './category';

export interface Transaction {
    [key: string]: any;
    id: number;
    date: Date;
    title: string;
    amount: number;
    category?: Category;
    note?: string;
    account?: Account;
    type: 'expense' | 'income';
}

export interface TransactionForm {
    [key: string]: any;
    title: string;
    amount: number;
    categoryId?: number;
    note?: string;
    accountId?: number;
    type: 'expense' | 'income';
}
