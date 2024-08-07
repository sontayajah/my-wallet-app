import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../shared/services/finance.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    totalExpense: number = 0;
    totalIncome: number = 0;
    totalProfit: number = 0;

    constructor(private financeService: FinanceService) {}

    ngOnInit(): void {
        // this.financeService.getExpenses().subscribe((expenses) => {
        //     this.totalExpense = expenses.reduce(
        //         (acc, expense) => acc + expense.amount,
        //         0,
        //     );
        //     this.calculateTotalProfit();
        // });
        // this.financeService.getIncome().subscribe((income) => {
        //     this.totalIncome = income.reduce(
        //         (acc, income) => acc + income.amount,
        //         0,
        //     );
        //     this.calculateTotalProfit();
        // });
    }

    calculateTotalProfit(): void {
        this.totalProfit = this.totalIncome - this.totalExpense;
    }
}
