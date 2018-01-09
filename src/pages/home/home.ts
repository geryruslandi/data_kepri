import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { SubyekPage } from '../subyek/subyek';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public openPage(bab){
    switch(bab){
      case 'bab1':
        this.navCtrl.push(SubyekPage,{
          data:bab
        });
        break;
    }


  }

}
