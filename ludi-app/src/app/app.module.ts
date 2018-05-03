import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { navComponent } from './home/navbar.component';
import { footerComponent } from './home/footer.component';
import { NgbdCarouselBasic } from './bootstrapComp/carousel-config';
import { carouselHomeComponent } from './bootstrapComp/carousel-home.component';
import { sectionTwoComponent } from './home/section-two.component';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    footerComponent,
    NgbdCarouselBasic,
    carouselHomeComponent,
    sectionTwoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AngularFontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
