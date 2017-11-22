import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurrencyFormaterDirective } from './directives/currency-formater.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientComponent } from './components/patient/patient.component';
import { WidgetOneComponent } from './widgets/widget-one/widget-one.component';
import { PatientDataService } from './services/patient-data.service';
import { AuthenticationService } from './services/authentication.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patient', component: PatientComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CurrencyFormaterDirective,
    HeaderComponent,
    FooterComponent,
    PatientComponent,
    WidgetOneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, PatientDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
