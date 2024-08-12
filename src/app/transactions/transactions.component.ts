import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Transaction } from '../shared/interfaces';
import { FinanceService } from '../shared/services/finance.service';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [LucideAngularModule, NgClass, CurrencyPipe, DatePipe],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
    transactions: Transaction[] = [];

    constructor(private financeService: FinanceService) {}

    ngOnInit(): void {
        this.financeService.getTransactions().subscribe((transactions) => {
            this.transactions = transactions;
        });
    }
}
