import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { navComponent } from './layout/navbar.component';
import { footerComponent } from './layout/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    footerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
