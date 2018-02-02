import { Routes } from "@angular/router";
import { WizardStepOneComponent } from './wizard-step-one/wizard-step-one.component';
import { WizardStepSecondComponent } from './wizard-step-second/wizard-step-second.component';
import { WizardStepThirdComponent } from './wizard-step-third/wizard-step-third.component';

export const WizardRoutes: Routes = [
    { path: 'wizard', redirectTo: 'wizard/step-1', pathMatch: 'full' },
    { path: 'wizard/step-1', component: WizardStepOneComponent },
    { path: 'wizard/step-2', component: WizardStepSecondComponent },
    { path: 'wizard/step-3', component: WizardStepThirdComponent }
];