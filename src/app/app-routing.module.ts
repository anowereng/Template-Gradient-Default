
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dasboard',
    component: DashboardComponent
  },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  {
    path: '**',
    component: DashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
