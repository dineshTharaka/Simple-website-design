import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaneComponent } from './pane/pane.component';
import { AddComponent } from './add/add.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Txt1Component } from './txt1/txt1.component';
import { RateComponent } from './rate/rate.component';
import { Add1Component } from './add1/add1.component';
import { Add2Component } from './add2/add2.component';
import { Txt2Component } from './txt2/txt2.component';
import { ProgressComponent } from './progress/progress.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PaneComponent,
    AddComponent,
    LogoComponent,
    SearchComponent,
    NavComponent,
    CarouselComponent,
    Txt1Component,
    RateComponent,
    Add1Component,
    Add2Component,
    Txt2Component,
    ProgressComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
