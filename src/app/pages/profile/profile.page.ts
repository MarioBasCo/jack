import { Component, OnInit, inject } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  objCliente = {
    id: 1,
    rol_id: 0,
    nombres: '',
    apellidos: '',
    usuario: '',
    direccion: '',
    celular: '',
    identificacion: ''
  }

  public _svcUtil = inject(UtilService);
 
  constructor() { 
    const user = this._svcUtil.get('user_jack');
    this.objCliente = {
      "id": user.id_usuario,
      "rol_id": user.rol_id,
      "usuario": user.usuario,
      "nombres": user.nombres,
      "apellidos": user.apellidos,
      "celular": user?.celular ?? 'No Dispone',
      "direccion": user?.direccion ?? 'No Dispone',
      "identificacion": user?.identificacion ?? 'No Dispone'
  }
  }

  ngOnInit() {
  }

}
