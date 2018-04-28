import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MiscModule } from './misc/misc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
      MiscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
