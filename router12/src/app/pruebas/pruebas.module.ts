import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebasRoutingModule } from './pruebas-routing.module';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';


@NgModule({
  declarations: [
    UnoComponent,
    DosComponent
  ],
  imports: [
    CommonModule,
    PruebasRoutingModule
  ]
})
export class PruebasModule { }
