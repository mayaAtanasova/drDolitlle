import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../feature/pages/page-not-found/page-not-found.component';

const routes: Routes = [
//   {
//     path: '**',
//     component: PageNotFoundComponent,
// }
];

export const NotFoundRoutingModule = RouterModule.forChild(routes);
