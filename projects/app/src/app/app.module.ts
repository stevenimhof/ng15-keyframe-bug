import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule } from 'lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
