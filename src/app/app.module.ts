import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomBsRadioComponent } from './shared/custom-bs-radio/custom-bs-radio.component';
import { CustomRadioComponent } from './shared/custom-radio/custom-radio.component';
import { NormalRadioComponent } from './shared/normal-radio/normal-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CustomBsRadioComponent,
    CustomRadioComponent,
    NormalRadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
