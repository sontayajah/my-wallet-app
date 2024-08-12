import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/interfaces';
import { FinanceService } from '../shared/services/finance.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
    categories: Category[] = [];

    constructor(private financeService: FinanceService) {}

    ngOnInit(): void {
        this.financeService.getAllCategory().subscribe((categories) => {
            this.categories = categories;
        });
    }
}
