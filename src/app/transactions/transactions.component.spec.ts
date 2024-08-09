import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
    let component: TransactionsComponent;
    let fixture: ComponentFixture<TransactionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TransactionsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TransactionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should format currency', () => {
        expect(component.formatCurrency(100)).toBe('$100.00');
    });

    it('should format date time', () => {
        expect(component.formatDateTime(new Date('2021-01-01T00:00:00'))).toBe(
            '1/1/2021 12:00:00 AM',
        );
    });

    it('should get transactions', () => {
        expect(component.transactions).toEqual([]);
    });
});
