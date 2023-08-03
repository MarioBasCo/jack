import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {
  @Output() cambioVista = new EventEmitter<boolean>();
  public form: FormGroup;
  public _svcAuth = inject(AuthService);
  public _svcMsg = inject(MessagesService);

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      celular: [''],
      direccion: [''],
      identificacion: ['']
    });
  }

  ngOnInit() {}


  registrarse(){
    const data = this.form.value;
    console.log(data);
    this._svcAuth.registro(data).subscribe(resp => {
      if(resp.estado){
        this._svcMsg.showToast(resp.mensaje);
        this.form.reset();
      }
    })
  }
}
