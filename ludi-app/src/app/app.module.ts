import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SlickModule } from 'ngx-slick';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { navComponent } from './home/navbar.component';
import { footerComponent } from './home/footer.component';
import { NgbdCarouselBasic } from './bootstrapComp/carousel-config';
import { carouselHomeComponent } from './bootstrapComp/carousel-home.component';
import { sectionTwoComponent } from './home/section-two.component';
import { sectionThreeComponent } from './home/section-three.component';
import { sectionFourComponent } from './home/section-four.component';
import { sectionFiveComponent } from './home/section-five.component';
import { sectionSixComponent } from './home/section-six.component';
import { sectionSevenComponent } from './home/section-seven.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { prevencionComponent } from './check-ups/prevencion.component';
import { prevencionSectionsComponent } from './check-ups/prevencion-sections.component';
import { prevencionSectionsTwoComponent } from './check-ups/prevencion-sectionesTwo.component';

import { PromocionesBannerComponent } from './promociones/banner.component';
import { PromocionesSectionOneComponent } from './promociones/promociones-section-one.component';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    footerComponent,
    NgbdCarouselBasic,
    carouselHomeComponent,
    sectionTwoComponent,
    sectionThreeComponent,
    sectionFourComponent,
    sectionFiveComponent,
    sectionSixComponent,
    sectionSevenComponent,
    PromocionesComponent,
    HomeComponent,
    PromocionesBannerComponent,
    PromocionesSectionOneComponent,
    prevencionComponent,
    prevencionSectionsComponent,
    prevencionSectionsTwoComponent

  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AngularFontAwesomeModule,
    DragScrollModule,
    AppRoutingModule,
    SlickModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
