import { Routes } from "@angular/router";
import { HomeComponent } from "../components/content/home/home.component";
import { WizardComponent } from "../components/content/wizard/wizard.component";
import { WizardStepOneComponent } from '../components/content/wizard/wizard-step-one/wizard-step-one.component';
import { WizardStepSecondComponent } from '../components/content/wizard/wizard-step-second/wizard-step-second.component';
import { WizardStepThirdComponent } from "../components/content/wizard/wizard-step-third/wizard-step-third.component";

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];