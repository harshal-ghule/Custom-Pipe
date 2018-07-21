import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlecasePipe } from './titlecase.pipe';
import { SlicePipe } from './slice.pipe';
import { UpperCasePipe } from './upper-case.pipe';
import { LowerCasePipe } from './lower-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitlecasePipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
