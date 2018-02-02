import { Routes } from "@angular/router";
import { WizardComponent } from './wizard/wizard.component';
import { HomeComponent } from "./home/home.component";

export const contentRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'wizard', component: WizardComponent }
];