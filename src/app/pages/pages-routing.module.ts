import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FormElementComponent } from './form-element/form-element.component';
import { IconThemifyComponent } from './icon-themify/icon-themify.component';
import { LabelBadgeComponent } from './label-badge/label-badge.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const authentiacationRoutes: Routes = [

	{ path: 'button', component: ButtonComponent },
	{ path: 'form', component: FormElementComponent },
	{ path: 'icon', component: IconThemifyComponent },
	{ path: 'label', component: LabelBadgeComponent },
	{ path: 'notification', component: NotificationsComponent },
	{ path: 'tooltip', component: TooltipComponent }

];

@NgModule({
	imports: [RouterModule.forChild(authentiacationRoutes)],
	exports: [RouterModule]
})
 export class AuthenticationRoutingModule { }
