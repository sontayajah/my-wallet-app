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
}
