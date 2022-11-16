import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { ChaveComponent } from './chave.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ChaveComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
  ],
  exports: [ChaveComponent],
  providers: [],
  bootstrap: []
})
export class ChaveModule { }
