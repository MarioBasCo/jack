import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private toast: ToastController) { }

  async showToast(message: string, color: string = "success") {
    let t = await this.toast.create({
      message,
      color,
      duration: 3000
    });
    t.present();
  }

}
