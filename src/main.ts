import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Definir el módulo raíz
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
