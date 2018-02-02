import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { WizardModule } from './wizard/wizard.module';
import { RouterModule } from '@angular/router';
import { contentRoutes } from './content.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WizardModule,
    ReactiveFormsModule,
    RouterModule.forRoot(contentRoutes, { useHash: true })
  ],
  declarations: [ContentComponent],
  exports:[
    ContentComponent,
    RouterModule
  ]
})
export class ContentModule { }