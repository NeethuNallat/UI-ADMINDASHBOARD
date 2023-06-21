import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/layout/commonlayout/header/header/header.component';
import { DashboardComponent } from './module/layout/pages/dashboard/dashboard.component';
import { CollectioncardComponent } from './module/layout/pages/collectioncard/collectioncard.component';
import { GraphsectionComponent } from './module/layout/pages/graphsection/graphsection.component';
import { RightsidebarComponent } from './module/layout/pages/rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './module/layout/pages/leftsidebar/leftsidebar.component';
import { FooterComponent } from './module/layout/commonlayout/footer/footer/footer.component';
import { OrdersectionComponent } from './module/layout/pages/ordersection/ordersection.component';
import { SalessectionComponent } from './module/layout/pages/salessection/salessection.component';
import { GalleryComponent } from './module/layout/pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   FooterComponent,
   DashboardComponent,
   LeftsidebarComponent,
   RightsidebarComponent,
   OrdersectionComponent,
   SalessectionComponent,
   GraphsectionComponent,
   CollectioncardComponent,
   GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
