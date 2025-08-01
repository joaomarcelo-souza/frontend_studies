import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { projectServiceProvider } from '../services/project/project.provider.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    projectServiceProvider,
  ],
};
