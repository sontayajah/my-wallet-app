import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/interfaces';
import { FinanceService } from '../shared/services/finance.service';
import { UtilsService } from '../shared/utils.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-accounts',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
    accounts: Account[] = [];
    expenseCount: number[] = [];
    incomeCount: number[] = [];

    constructor(
        private financeService: FinanceService,
        private utilsService: UtilsService,
    ) {}

    ngOnInit(): void {
        this.financeService.getAccounts().subscribe((accounts) => {
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

    formatCurrency(nunmber: number): string {
        return this.utilsService.formatCurrency(nunmber);
    }
}
