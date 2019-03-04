import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './src/app/app.module';
import { environment } from '../environments/environment';

if (environment.production) {
  enableProdMode();
}

window.document.addEventListener('DOMContentLoaded', (): void => {
  platformBrowserDynamic()
    .bootstrapModule<AppModule>(AppModule)
    .catch<void>((err: any): void => {
      console.error(err);
    });
});
