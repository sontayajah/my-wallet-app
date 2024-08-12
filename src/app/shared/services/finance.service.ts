import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Category, Transaction, TransactionForm } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class FinanceService {
    private apiUrl = 'http://localhost:5129/api';

    constructor(private http: HttpClient) {}

    getAllTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(`${this.apiUrl}/transaction`);
    }

    getAllExpenses(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(
            `${this.apiUrl}/transaction/expense`,
        );
    }

    getAllIncome(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(
            `${this.apiUrl}/transaction/income`,
        );
    }

    getAllCategory(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.apiUrl}/category`);
    }

    getAllAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(`${this.apiUrl}/account`);
    }

    addTransaction(transaction: TransactionForm): Observable<Transaction> {
        return this.http.post<Transaction>(
            `${this.apiUrl}/transaction`,
            transaction,
        );
    }
}
