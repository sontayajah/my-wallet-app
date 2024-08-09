import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../shared/services/finance.service';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../shared/interfaces';

@Component({
    standalone: true,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [LucideAngularModule, FormsModule],
})
export class DashboardComponent implements OnInit {
    totalExpense: number = 0;
    totalIncome: number = 0;
    totalProfit: number = 0;
    transactions: Transaction[] = [];
    expenses: Transaction[] = [];
    totalTransactions: number = 0;
    selectedDateRange: string = 'all';

    constructor(private financeService: FinanceService) {}

    ngOnInit(): void {
        this.financeService.getTransactions().subscribe((transactions) => {
            this.transactions = transactions;
        });

        this.financeService.getAllExpenses().subscribe((expenses) => {
            this.expenses = expenses;
            this.totalExpense = expenses.reduce(
                (acc, expense) => acc + expense.amount,
                0,
            );
        });

        this.financeService.getAllIncome().subscribe((income) => {
            this.totalIncome = income.reduce(
                (acc, income) => acc + income.amount,
                0,
            );

            this.calculateTotalProfit();
            this.calculateTotalTransactions();
        });
    }

    calculateTotalProfit(): void {
        this.totalProfit = this.totalIncome - this.totalExpense;
    }

    calculateTotalTransactions(): void {
        this.totalTransactions = this.transactions.length;
    }

    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    }
}
