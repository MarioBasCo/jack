import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UtilService } from '../shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _svcUtil = inject(UtilService);
  public path_base = this._svcUtil.endpoint_base;

  constructor(private http: HttpClient) { }

  registro(data: any){
    const URL = this.path_base + "/signup";
    return this.http.post<any>(URL, this._svcUtil.objectToFormData(data));
  }

  ingreso(data: any) {
    const URL = this.path_base + "/login";
    return this.http.post<any>(URL, this._svcUtil.objectToFormData(data));
  }
}
