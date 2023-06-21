import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { HeaderComponent } from './layout/commonlayout/header/header/header.component';
import { FooterComponent } from './layout/commonlayout/footer/footer/footer.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
   
    FooterComponent,
    DashboardComponent
   
    
   
   
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
