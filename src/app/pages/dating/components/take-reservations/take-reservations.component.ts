import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ReserveService } from 'src/app/services/reserve.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-take-reservations',
  templateUrl: './take-reservations.component.html',
  styleUrls: ['./take-reservations.component.scss'],
})
export class TakeReservationsComponent implements OnInit {
  list: any[] = [];

  public _svcUtil = inject(UtilService);


  constructor(
    private _svcMsg: MessagesService,
    private alertCtrl: AlertController,
    private _svcReserve: ReserveService) { }

  atenderCita(item: any) {
    this.alertCtrl.create({
      header: "Atender Cita",
      message: "¿Desea de atender esta cita?",
      buttons: [
        {
          text: "Sí",
          handler: () => {
            const data = { id_cita: item.id_cita };
            this._svcReserve.atenderCita(data).subscribe(resp => {
              if (resp.estado) {
                this._svcMsg.showToast(resp.mensaje);
                this.cargarDatos();
              }
            });
          }
        },
        { text: "No" }
      ]
    }).then(alertEl => alertEl.present());
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const user = this._svcUtil.get('user_jack');
    this._svcReserve.citasByDoctor(user.dentista_id).subscribe(resp => {
      this.list = resp.data;
    });
  }
}
