import { Component, OnInit, inject } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
})
export class HeaderHomeComponent implements OnInit {
  public _svcUtil = inject(UtilService);
  private user = this._svcUtil.get('user_jack');
  username: string= `${this.user.nombres} ${this.user.apellidos}`;

  constructor() { }

  ngOnInit() {
    
  }
}
