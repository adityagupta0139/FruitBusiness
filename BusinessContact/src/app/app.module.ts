import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuitComponent } from './components/suit/suit.component';
import { SareeComponent } from './components/saree/saree.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SuitComponent,
    SareeComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
