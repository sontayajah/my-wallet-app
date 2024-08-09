import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CategoryComponent } from './category/category.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'expenses', component: ExpenseComponent },
    // { path: 'income', component: IncomeComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'categories', component: CategoryComponent },
    { path: 'settings', component: SettingsComponent },
];
