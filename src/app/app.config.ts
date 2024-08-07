import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
    ArrowLeftRightIcon,
    ChartColumnStackedIcon,
    LayoutDashboardIcon,
    LucideAngularModule,
    SettingsIcon,
    WalletIcon,
} from 'lucide-angular';
import {
    provideHttpClient,
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
            }),
        ),
        provideHttpClient(withInterceptorsFromDi()),
    ],
};
