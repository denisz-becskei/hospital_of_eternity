import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-card/home-card/home-card.module').then(m => m.HomeCardModule),
      },
      {
        path: 'aboutus',
        loadChildren: () => import('../aboutus/aboutus.module').then(m => m.AboutusModule),
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterModule),
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
        canActivateChild: [AuthGuard],
      },
      {
        path: 'listing',
        loadChildren: () => import('../listing/list/listing.module').then(m => m.ListingModule),
        canActivateChild: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
