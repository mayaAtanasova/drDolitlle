import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AdminService } from './services/admin.service';
import { AdsService } from './services/ads.service';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtModule, JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AdminService,
        AdsService,
        AuthService,
        TokenStorageService,
        UserService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor,
        }
      ]
    }
  }
}
