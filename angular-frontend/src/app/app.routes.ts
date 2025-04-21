import { Routes } from '@angular/router';
import { CatsComponent } from './pages/cats/cats.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
  { path: 'cats', component: CatsComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomePageComponent},
  { path: '**', redirectTo: 'home' },
];