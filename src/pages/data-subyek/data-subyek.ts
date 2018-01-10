import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';

/**
 * Generated class for the DataSubyekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-subyek',
  templateUrl: 'data-subyek.html',
})
export class DataSubyekPage {

  public dataCol : any;
  public dataRow : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataCol = this.navParams.get('data').column;
    this.dataRow = this.navParams.get('data').data;
  }

}
