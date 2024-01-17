import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Program } from './app/Program';


platformBrowserDynamic().bootstrapModule(Program)
  .catch(err => console.error(err));
