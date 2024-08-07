import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Expense, Income } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class FinanceService {
    private apiUrl = 'https://api.example.com';

    constructor(private http: HttpClient) {}

    getExpenses(): Observable<Expense[]> {
        return this.http.get<Expense[]>(`${this.apiUrl}/expenses`);
    }

    getIncome(): Observable<Income[]> {
        return this.http.get<Income[]>(`${this.apiUrl}/income`);
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
    }

    addExpense(expense: Expense): Observable<Expense> {
        return this.http.post<Expense>(`${this.apiUrl}/expenses`, expense);
    }

    addIncome(income: Income): Observable<Income> {
        return this.http.post<Income>(`${this.apiUrl}/income`, income);
    }

    addAccount(account: Account): Observable<Account> {
        return this.http.post<Account>(`${this.apiUrl}/accounts`, account);
    }

    updateExpense(expense: Expense): Observable<void> {
        return this.http.put<void>(
            `${this.apiUrl}/expenses/${expense.id}`,
            expense,
        );
    }

    updateIncome(income: Income): Observable<void> {
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
