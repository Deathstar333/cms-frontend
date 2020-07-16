import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateSurveyComponent } from './home/create-survey/create-survey.component';
import { ShowAllSurveysComponent } from './home/show-all-surveys/show-all-surveys.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuardService } from './_services/auth-guard.service';


const routes: Routes = [
  { path : "login", component : LoginComponent },
  { path : "home", component : HomeComponent, canActivate : [AuthGuardService], children : [
     { path : "createSurvey", component : CreateSurveyComponent },
     { path : "showAllSurveys", component : ShowAllSurveysComponent },
     { path : "register", component : RegisterComponent }
   ] },
  { path : "", redirectTo : "login", pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
