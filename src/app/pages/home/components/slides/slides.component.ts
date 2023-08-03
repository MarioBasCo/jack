import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'slides',
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
