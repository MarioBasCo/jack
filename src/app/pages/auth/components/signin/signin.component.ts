import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {
  @Output() cambioVista = new EventEmitter<boolean>();
  loginForm: FormGroup;
  public _svcAuth = inject(AuthService);
  public _svcMsg = inject(MessagesService);
  public _svcUtil = inject(UtilService);
  public router = inject(Router);

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      clave: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}


  ingresar() {
    const data = this.loginForm.value;
    console.log(data);
    this._svcAuth.ingreso(data).subscribe(resp => {
      if(resp.estado){
        this._svcMsg.showToast('Inicio de sesión con exito');
        this._svcUtil.set('user_jack', resp.info);
        this.router.navigateByUrl('/home', { replaceUrl: true });
      } else {
        this._svcMsg.showToast('No se pudo iniciar sesion, compruebe sus credenciales');
      }
    });
  }
}
