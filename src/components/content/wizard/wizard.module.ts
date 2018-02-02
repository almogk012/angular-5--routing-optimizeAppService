import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardStepOneComponent } from './wizard-step-one/wizard-step-one.component';
import { WizardStepSecondComponent } from './wizard-step-second/wizard-step-second.component';
import { WizardStepThirdComponent } from './wizard-step-third/wizard-step-third.component';
import { WizardComponent } from './wizard.component';
import { RouterModule } from '@angular/router';
import { WizardRoutes } from './wizard.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(WizardRoutes)
    ],
    declarations: [
        WizardComponent,
        WizardStepOneComponent,
        WizardStepSecondComponent,
        WizardStepThirdComponent
    ],
    exports:[
        WizardComponent,
        WizardStepOneComponent,
        WizardStepSecondComponent,
        WizardStepThirdComponent,
        RouterModule
    ]
})
export class WizardModule { }