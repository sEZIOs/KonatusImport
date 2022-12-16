import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './0/_landing_content/register/register.component';
import { LoginComponent } from './0/_landing_content/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
