import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Transaction } from '../shared/interfaces';
import { FinanceService } from '../shared/services/finance.service';
import { NgClass } from '@angular/common';
import { UtilsService } from '../shared/utils.service';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [LucideAngularModule, NgClass],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
    transactions: Transaction[] = [];

    constructor(
        private financeService: FinanceService,
        private utilsService: UtilsService,
    ) {}

    ngOnInit(): void {
        this.financeService.getTransactions().subscribe((transactions) => {
            this.transactions = transactions;
        });
    }

    formatCurrency(nunmber: number): string {
        return this.utilsService.formatCurrency(nunmber);
    }

    formatDateTime(date: Date): string {
        return this.utilsService.formatDateTime(date);
    }

    //group by date and sort by date in descending order
    groupByDate(transactions: Transaction[]): any {
        const grouped = transactions.reduce(
            (acc: { [key: string]: Transaction[] }, transaction) => {
                const date = new Date(transaction.date).toDateString();
                if (!acc[date]) {
                    acc[date] = [];
                }
                acc[date].push(transaction);
                return acc;
            },
            {},
        );

        return Object.keys(grouped)
            .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
            .reduce((acc: { [key: string]: Transaction[] }, date) => {
                acc[date] = grouped[date];
                return acc;
            }, {});
    }
}
