import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes';

import { AppComponent } from './app';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/content/home/home.component';
import { HomeModule } from '../components/content/home/home.module';
import { ContentModule } from '../components/content/content.module';
import { WizardModule } from '../components/content/wizard/wizard.module';

import {config, trackChangeDetection, trackComponents} from 't-count-client-angular/main';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    HomeModule,
    ContentModule,
    WizardModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(appRef: ApplicationRef, ngZone: NgZone, http: HttpClient) {
    config({
      serverUrl: "http://localhost:3001",
      http: http,
    });

    trackComponents(appRef, ngZone);

    trackChangeDetection(appRef, ngZone);
  }
}