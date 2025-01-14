import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/global/nav/nav.component';
import { MininavComponent } from './components/global/mininav/mininav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CarouselComponent } from './components/global/home/carousel/carousel.component';
import { BookingsComponent } from './components/global/home/bookings/bookings.component';
import { AboutusComponent } from './components/global/home/aboutus/aboutus.component';
import { WhyChooseUsComponent } from './components/global/home/why-choose-us/why-choose-us.component';
import { GalleryComponent } from './components/global/home/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MininavComponent,
    HomepageComponent,
    CarouselComponent,
    BookingsComponent,
    AboutusComponent,
    WhyChooseUsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
