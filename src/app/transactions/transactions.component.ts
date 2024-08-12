import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Transaction } from '../shared/interfaces';
import { FinanceService } from '../shared/services/finance.service';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { TransactionModalComponent } from '../transaction-modal/transaction-modal.component';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [
        LucideAngularModule,
        NgClass,
        CurrencyPipe,
        DatePipe,
        TransactionModalComponent,
    ],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
    transactions: Transaction[] = [];
    isAddTransactionModalOpen = false;

    constructor(private financeService: FinanceService) {}

    ngOnInit(): void {
        this.financeService.getAllTransactions().subscribe((transactions) => {
            this.transactions = transactions;
        });
    }
}
