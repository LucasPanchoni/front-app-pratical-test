import { HttpInterceptorProviders } from './http-interceptors/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansListComponent } from './plans/plans-list/plans-list.component';
import { PlansListItemComponent } from './plans/plans-list-item/plans-list-item.component';
import { PlansFormComponent } from './plans/plans-form/plans-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansListComponent,
    PlansListItemComponent,
    PlansFormComponent,
    LoginComponent,
    HomeComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
