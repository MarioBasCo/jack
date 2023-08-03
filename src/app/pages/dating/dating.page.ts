import { Component, OnInit, inject } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-dating',
  templateUrl: './dating.page.html',
  styleUrls: ['./dating.page.scss'],
})
export class DatingPage implements OnInit {
  public _svcUtil = inject(UtilService);
  rol_id: number = 0;

  constructor() { 
    const user = this._svcUtil.get('user_jack');
    this.rol_id = user.rol_id;
  }

  ngOnInit() {
  }

}
