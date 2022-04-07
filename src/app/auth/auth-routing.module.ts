import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
},
{
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
}
];

export const AuthRoutingModule = RouterModule.forChild(routes);
