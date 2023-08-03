import { Component, OnInit, inject } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  selectId: string = '1';
  cliid: number = 0;
  data: any[] = [];
  public _svcUtil = inject(UtilService);
  public _svcMsg = inject(MessagesService);
  
  constructor(private _svcReserve: ReserveService) { 
    const user = this._svcUtil.get('user_jack');
    this.cliid = user.cliente_id;
  }

  ngOnInit() {
    this.initInfo();
  }

  initInfo() {
    this._svcReserve.estadosCitas(1, this.cliid).subscribe(resp => {
      this.data = resp.data;
    });
  }

  onChange(event: any) {
    this.selectId = event.target.value;
    const id = parseInt(this.selectId);
    this._svcReserve.estadosCitas(id, this.cliid).subscribe(resp => {
      this.data = resp.data;
    });
  }


  cancelacionCita(item:any){
    this._svcReserve.cancelarCitaXCli(item.id_cita).subscribe(resp=> {
      if(resp.estado){
        this._svcMsg.showToast(resp.mensaje);        
      } else {
        this._svcMsg.showToast(resp.mensaje, 'danger');
      }
    })
  }
}
