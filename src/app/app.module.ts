import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './feature/pages/home/home.component';
import { PagesModule } from './feature/pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    CoreModule.forRoot(),
    FontAwesomeModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
