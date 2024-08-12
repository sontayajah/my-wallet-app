import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/interfaces';
import { FinanceService } from '../shared/services/finance.service';
import { LucideAngularModule } from 'lucide-angular';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-accounts',
    standalone: true,
    imports: [LucideAngularModule, CurrencyPipe],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
    accounts: Account[] = [];
    expenseCount: number[] = [];
    incomeCount: number[] = [];

    constructor(private financeService: FinanceService) {}

    ngOnInit(): void {
        this.financeService.getAllAccounts().subscribe((accounts) => {
            this.accounts = accounts;

            this.expenseCount = this.accounts.map(
                (account) =>
                    account.transactions.filter(
                        (transaction) => transaction.type === 'expense',
                    ).length,
            );

            this.incomeCount = this.accounts.map(
                (account) =>
                    account.transactions.filter(
                        (transaction) => transaction.type === 'income',
                    ).length,
            );
        });
    }
}
