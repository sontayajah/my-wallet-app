import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FinanceService } from '../shared/services/finance.service';
import { UtilsService } from '../shared/utils.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [LucideAngularModule, SidebarComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
    totalAssets: number = 0;
    formattedTotalAssets: string = '';

    constructor(
        private financeService: FinanceService,
        private utilsService: UtilsService,
    ) {}

    ngOnInit() {
        this.financeService.getAccounts().subscribe((transactions) => {
            this.totalAssets = transactions.reduce(
                (acc, transaction) => acc + transaction.balance,
                0,
            );

            this.formattedTotalAssets = this.utilsService.formatCurrency(
                this.totalAssets,
            );
        });
    }
}
