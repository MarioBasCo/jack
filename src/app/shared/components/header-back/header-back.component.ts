import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'header-back',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent  implements OnInit {
  @Input() titulo: string = '';
  
  constructor() { }

  ngOnInit() {}

}
