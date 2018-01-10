import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataSubyekPage } from '../data-subyek/data-subyek';

//service
import {dataProvider} from '../../services/data-provider.service';



/**
 * Generated class for the SubyekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subyek',
  templateUrl: 'subyek.html',
})
export class SubyekPage {

  public dataSubyek:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dp : dataProvider) {
    this.dataSubyek = dp.getData(navParams.get('data'));
    console.log(this.dataSubyek);
  }

  public openDataSubyek(index){
    this.navCtrl.push(DataSubyekPage,{
      data:this.dataSubyek[index]
    });
  }

}
