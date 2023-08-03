import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UtilService } from '../shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  public _svcUtil = inject(UtilService);
  public path_base = this._svcUtil.endpoint_base;
  
  constructor(private http: HttpClient) { }

  getServicios() {
    const URL = `${this.path_base}/tipos`;
    return this.http.get<any>(URL);
  }

  getDoctores() {
    const URL = `${this.path_base}/doctores`;
    return this.http.get<any>(URL);
  }

  horarioByDentista(id: number) {
    const URL = `${this.path_base}/horarios/${id}`;
    return this.http.get<any>(URL);
  }

  guardarCita(data: any){
    const URL = `${this.path_base}/cita`;
    return this.http.post<any>(URL, this._svcUtil.objectToFormData(data));
  }

  estadosCitas(id: number, cli: number){
    const URL = `${this.path_base}/estados_citas/${id}/${cli}`;
    return this.http.get<any>(URL);
  }

  citasByDoctor(id: number){
    const URL = `${this.path_base}/pendientes/${id}`;
    return this.http.get<any>(URL);
  }

  atenderCita(data: any){
    const URL = `${this.path_base}/atender`;
    return this.http.post<any>(URL, this._svcUtil.objectToFormData(data));
  }

  cancelarCitaXCli(id: number){
    const URL = `${this.path_base}/cancelar_cita/${id}`;
    return this.http.get<any>(URL);
  }
}
