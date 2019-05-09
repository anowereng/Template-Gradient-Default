import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './pages-routing.module';
import { Button } from 'protractor';
import { FormElementComponent } from './form-element/form-element.component';
import { IconThemifyComponent } from './icon-themify/icon-themify.component';
import { LabelBadgeComponent } from './label-badge/label-badge.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    ButtonComponent,
    FormElementComponent,
     IconThemifyComponent ,
     LabelBadgeComponent,
     NotificationsComponent,
     TooltipComponent,
  ],
  providers: []
})
export class PagesModule { }
