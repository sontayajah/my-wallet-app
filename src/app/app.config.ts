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
    ArrowRightIcon,
    ArrowUpIcon,
    ChartColumnStackedIcon,
    EllipsisVerticalIcon,
    LayoutDashboardIcon,
    LucideAngularModule,
    MenuIcon,
    SettingsIcon,
    ShoppingCartIcon,
    WalletIcon,
    XIcon,
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
                ArrowRightIcon,
                ShoppingCartIcon,
                EllipsisVerticalIcon,
                ArrowUpIcon,
                ArrowDownIcon,
            }),
        ),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
    ],
};
