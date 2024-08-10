import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
    ArrowDownIcon,
    ArrowLeftRightIcon,
    ArrowUpIcon,
    ChartColumnStackedIcon,
    EllipsisVerticalIcon,
    LayoutDashboardIcon,
    LucideAngularModule,
    MenuIcon,
    PlusIcon,
    SettingsIcon,
    ShoppingCartIcon,
    WalletIcon,
    XIcon,
    ArrowUpAZIcon,
    ArrowDownZAIcon,
} from 'lucide-angular';
import {
    provideHttpClient,
    withFetch,
    withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(),
        importProvidersFrom(
            LucideAngularModule.pick({
                LayoutDashboardIcon,
                WalletIcon,
                ArrowLeftRightIcon,
                ChartColumnStackedIcon,
                SettingsIcon,
                MenuIcon,
                XIcon,
                PlusIcon,
                ShoppingCartIcon,
                EllipsisVerticalIcon,
                ArrowUpIcon,
                ArrowDownIcon,
                ArrowUpAZIcon,
                ArrowDownZAIcon,
            }),
        ),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
    ],
};
