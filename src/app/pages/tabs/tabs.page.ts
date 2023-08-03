import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.enable(true, 'first-menu');
    this.menuCtrl.open('first-menu');
  }

  ionViewWillLeave(){
    this.menuCtrl.isEnabled('first-menu').then(
      () => {
        this.menuCtrl.close('first-menu');
      }
    ).catch(

    );
  }
}
