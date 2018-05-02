import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { navComponent } from './layout/navbar.component';
import { footerComponent } from './layout/footer.component';
import { NgbdCarouselBasic } from './bootstrapComp/carousel-config';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    footerComponent,
    NgbdCarouselBasic
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
