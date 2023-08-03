import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { UtilService } from '../../services/util.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IonicModule, NgIf, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  public _svcUtil = inject(UtilService);
  rol_id: number = 0;


  constructor(private alertCtrl: AlertController) { 
    const user = this._svcUtil.get('user_jack');
    this.rol_id = user.rol_id;
  }

  ngOnInit() {}

  cerrarSesion() {
    this.alertCtrl.create({
      header: "Cerrar Sesión",
      message: "¿Desea de Cerrar Sesión?",
      buttons: [
        {
          text: "Sí 👋",
          handler: () => {
            localStorage.clear();            
            location.href = '/auth';
          }
        },
        { text: "No ✋" }
      ]
    }).then(alertEl => alertEl.present());
  }
}
