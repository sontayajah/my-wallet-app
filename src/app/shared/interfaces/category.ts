export interface Category {
    id: number;
    name: string;
    description?: string;
    type: 'expense' | 'income';
}
