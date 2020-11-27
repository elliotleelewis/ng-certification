import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import './polyfills';

declare const window: Window & { ngRef: any };

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window.ngRef) {
      window.ngRef.destroy();
    }
    window.ngRef = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
