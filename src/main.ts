import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import './main.scss';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);