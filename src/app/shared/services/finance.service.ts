import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Category, Transaction } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class FinanceService {
    private apiUrl = 'http://localhost:5129/api';

    constructor(private http: HttpClient) {}

    getTransactions(): Observable<Transaction[]> {
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

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(`${this.apiUrl}/account`);
    }

    addExpense(expense: Transaction): Observable<Transaction> {
        return this.http.post<Transaction>(`${this.apiUrl}/expenses`, expense);
    }

    addIncome(income: Transaction): Observable<Transaction> {
        return this.http.post<Transaction>(`${this.apiUrl}/income`, income);
    }

    addAccount(account: Account): Observable<Account> {
        return this.http.post<Account>(`${this.apiUrl}/accounts`, account);
    }

    updateExpense(expense: Transaction): Observable<void> {
        return this.http.put<void>(
            `${this.apiUrl}/expenses/${expense.id}`,
            expense,
        );
    }

    updateIncome(income: Transaction): Observable<void> {
        return this.http.put<void>(
            `${this.apiUrl}/income/${income.id}`,
            income,
        );
    }

    updateAccount(account: Account): Observable<void> {
        return this.http.put<void>(
            `${this.apiUrl}/accounts/${account.id}`,
            account,
        );
    }

    deleteExpense(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/expenses/${id}`);
    }

    deleteIncome(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/income/${id}`);
    }

    deleteAccount(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/accounts/${id}`);
    }
}
