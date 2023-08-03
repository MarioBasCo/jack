import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { SlidesComponent } from './components/slides/slides.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuComponent,
    SlidesComponent,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderHomeComponent]
})
export class HomePageModule {}
