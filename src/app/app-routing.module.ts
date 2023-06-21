import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/layout/pages/dashboard/dashboard.component';
import { GalleryComponent } from './module/layout/pages/gallery/gallery.component';
// import { DashboardComponent } from './module/layout/pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component: DashboardComponent},
  {path:'gallery', component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
