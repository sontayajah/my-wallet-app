import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FinanceService } from '../shared/services/finance.service';
import { Category } from '../shared/interfaces';

@Component({
    selector: 'app-transaction-modal',
    standalone: true,
    imports: [NgClass, ReactiveFormsModule],
    templateUrl: './transaction-modal.component.html',
    styleUrl: './transaction-modal.component.css',
})
export class TransactionModalComponent implements OnInit {
    @Input() isAddTransactionModalOpen: boolean = false;
    @Output() isAddTransactionModalOpenChange = new EventEmitter<boolean>();

    isExpense = true;
    isIncome = false;
    addTransactionForm: FormGroup = new FormGroup({});
    formError: {
        title: {
            isError: boolean | undefined;
            message: string | undefined;
        };
        amount: {
            isError: boolean | undefined;
            message: string | undefined;
        };
        type: {
            isError: boolean | undefined;
            message: string | undefined;
        };
    } = {
        title: { isError: undefined, message: undefined },
        amount: { isError: undefined, message: undefined },
        type: { isError: undefined, message: undefined },
    };
    categories: Category[] = [];

    constructor(
        private fb: FormBuilder,
        private financeService: FinanceService,
    ) {}

    ngOnInit(): void {
        this.setDefaultTransactionState();
        this.getCategoriesList();
    }

    setDefaultTransactionState() {
        this.addTransactionForm = this.fb.group({
            title: [undefined, Validators.required],
            amount: [undefined, Validators.required],
            categoryId: [undefined],
            note: [undefined],
            accountId: [undefined],
            type: ['expense', Validators.required],
        });
    }

    onTypeSelect(type: 'expense' | 'income') {
        this.isExpense = type === 'expense';
        this.isIncome = type === 'income';
        this.addTransactionForm.get('type')?.setValue(type);
        this.getCategoriesList(type);
        this.addTransactionForm.get('categoryId')?.setValue(undefined);
    }

    onAddTransactionSubmit() {
        if (!this.addTransactionForm.valid) {
            if (this.addTransactionForm.get('title')?.hasError('required')) {
                this.formError.title.isError = true;
                this.formError.title.message = 'Title is required';
            } else {
                this.formError.title.isError = false;
                this.formError.title.message = '';
            }

            if (this.addTransactionForm.get('amount')?.hasError('required')) {
                this.formError.amount.isError = true;
                this.formError.amount.message = 'Amount is required';
            } else {
                this.formError.amount.isError = false;
                this.formError.amount.message = '';
            }

            if (this.addTransactionForm.get('type')?.hasError('required')) {
                this.formError.type.isError = true;
                this.formError.type.message = 'Type is required';
            } else {
                this.formError.type.isError = false;
                this.formError.type.message = '';
            }

            return;
        }

        // change category id to number
        this.addTransactionForm
            .get('category')
            ?.setValue(Number(this.addTransactionForm.get('category')?.value));

        const result = this.financeService
            .addTransaction(this.addTransactionForm.value)
            .subscribe((transaction) => {
                return transaction;
            });

        if (result) {
            this.isExpense = true;
            this.isIncome = false;
            this.setDefaultTransactionState();
            this.isAddTransactionModalOpenChange.emit(false);

            // reload page
            window.location.reload();
        }
    }

    getCategoriesList(type: 'expense' | 'income' = 'expense') {
        this.financeService.getAllCategory().subscribe((categories) => {
            this.categories = categories.filter(
                (category) => category.type === type,
            );
        });
    }
}
