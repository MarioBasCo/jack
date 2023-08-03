import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPageRoutingModule } from './appointments-routing.module';

import { AppointmentsPage } from './appointments.page';
import { HeaderBackComponent } from 'src/app/shared/components/header-back/header-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderBackComponent,
    AppointmentsPageRoutingModule
  ],
  declarations: [AppointmentsPage]
})
export class AppointmentsPageModule {}
