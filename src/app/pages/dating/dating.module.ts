import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatingPageRoutingModule } from './dating-routing.module';

import { DatingPage } from './dating.page';
import { FormReserveComponent } from './components/form-reserve/form-reserve.component';
import { TakeReservationsComponent } from './components/take-reservations/take-reservations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DatingPageRoutingModule
  ],
  declarations: [DatingPage, FormReserveComponent, TakeReservationsComponent],
})
export class DatingPageModule {}
