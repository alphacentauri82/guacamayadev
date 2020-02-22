import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  //{ path: 'home', component: HomeComponent },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
