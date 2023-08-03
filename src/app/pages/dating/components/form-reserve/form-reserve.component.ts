import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReserveService } from 'src/app/services/reserve.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { UtilService } from 'src/app/shared/services/util.service';


@Component({
  selector: 'app-form-reserve',
  templateUrl: './form-reserve.component.html',
  styleUrls: ['./form-reserve.component.scss'],
})
export class FormReserveComponent implements OnInit {
  doctores: any[] = [];
  servicios: any[] = [];
  horasDisponibles: any[] = [];
  now = new Date().toISOString();
  cita: FormGroup;
  public _svcUtil = inject(UtilService);
  public _svcMsg = inject(MessagesService);

  constructor(private _svcReserve: ReserveService,
    private fb: FormBuilder) {
    const user = this._svcUtil.get('user_jack');

    this.cita = this.fb.group({
      dentista_id: [null, Validators.required],
      horario_id: [{ value: null, disabled: true }, Validators.required],
      cliente_id: [user.cliente_id, Validators.required],
      tipo_cita_id: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.loadDoctores();
    this.loadServicios();
  }

  loadDoctores() {
    this._svcReserve.getDoctores().subscribe(resp => {
      this.doctores = resp.data;
    });
  }

  loadServicios() {
    this._svcReserve.getServicios().subscribe(resp => {
      this.servicios = resp.data;
    });
  }

  seleccionarDoctor(doctorId: any) {
    //this.doctorSeleccionado = doctorId;
    this.cita.get('horario_id')?.enable(); // Habilitar el campo de fecha y hora.
    this._svcReserve.horarioByDentista(doctorId).subscribe(resp => {
      //console.log(resp);
      this.horasDisponibles = resp.data;
    })
  }

  guardarReserva(){
    const data = this.cita.value;
    this._svcReserve.guardarCita(data).subscribe(resp => {
      if(resp.estado){
        this._svcMsg.showToast(resp.mensaje);
        this.cita.reset();
      } else {
        this._svcMsg.showToast(resp.mensaje, 'danger')
      }
    });
  }
}
