import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    // guard
    loadChildren:()=> import('./auth/auth.module').then(m =>m.AuthModule),
  },
  {
    path:'dashboard',
    // guard
    loadChildren:()=> import('./dashboard/dashboard.module').then(m =>m.DashboardModule),
  },
  // {
  //   path:'**',
  //   // guard
  //   redirectTo: 'auth',
  // },
  {
    path:'',
    loadChildren:()=> import('./welcome/welcome.module').then(m =>m.WelcomeModule)
  },
  {
    path:'products',
    loadChildren:()=> import('./customer/customer.module').then(m =>m.CustomerModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
