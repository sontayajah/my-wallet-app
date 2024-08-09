import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [LucideAngularModule, SidebarComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
    totalAssets: number = 0;

    ngOnInit() {
        // this.financeService.getTransactions().subscribe((transactions) => {
        //     this.totalAssets = transactions.reduce(
        //         (acc, transaction) => acc + transaction.amount,
        //         0,
        //     );
        // });
    }
}
