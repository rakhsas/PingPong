import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SigninComponent
  },
  // {
  //   path: '',
  //   component: ContainersComponent,
  //   canActivate: [AuthGuardService],
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
