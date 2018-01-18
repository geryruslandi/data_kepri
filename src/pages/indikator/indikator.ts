import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

/**
 * Generated class for the IndikatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indikator',
  templateUrl: 'indikator.html',
})
export class IndikatorPage {

  dataIndikator : any=[];
  dataIndikatorAll : any=[];
  color :String[] = [
    '#2ecc71',
    '#3498db',
    '#1abc9c',
    '#9b59b6',
    '#e67e22',
    '#f1c40f',
    '#e74c3c',
    '#913D88',
    '#446CB3',
    '#4183D7',
    '#81CFE0',
    '#336E7B',
    '#4ECDC4',
    '#87D37C',
    '#68C3A3'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data)

    var tableData = this.navParams.data.data.data
    var tableCol = this.navParams.data.data.column

    //buat data
    for(var i=0 ; i < tableData.length;i++){

      //jika bukan header
      if(tableData[i].length != 1){
        this.dataIndikatorAll.push({title:tableData[i][0],data:[],color:this.color[Math.floor(Math.random()* this.color.length)]})

        //push data per column
        for(var i2 = 1 ; i2 < tableCol.length ; i2++){
          this.dataIndikatorAll[this.dataIndikatorAll.length-1].data.push({col:tableCol[i2],data:tableData[i][i2]})
        }

      }
    }

    console.log(this.dataIndikatorAll)
    //1 row 2 data
    for(var i = 0 ; i < this.dataIndikatorAll.length;i++){
      if(i%2 == 0){
        console.log(i);
        this.dataIndikator.push([]);
        this.dataIndikator[this.dataIndikator.length-1].push(this.dataIndikatorAll[i])
      }
      else{
        this.dataIndikator[this.dataIndikator.length-1].push(this.dataIndikatorAll[i])
      }
    }
    console.log('dataIndikator')
    console.log(this.dataIndikator)
  }
  // lineChart
 public lineChartData:Array<any> = [
   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
 ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 public lineChartOptions:any = {
   responsive: true
 };
 public lineChartColors:Array<any> = [
   { // grey
     backgroundColor: 'rgba(148,159,177,0.2)',
     borderColor: 'rgba(148,159,177,1)',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   },
   { // dark grey
     backgroundColor: 'rgba(77,83,96,0.2)',
     borderColor: 'rgba(77,83,96,1)',
     pointBackgroundColor: 'rgba(77,83,96,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(77,83,96,1)'
   },
   { // grey
     backgroundColor: 'rgba(148,159,177,0.2)',
     borderColor: 'rgba(148,159,177,1)',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   }
 ];
 public lineChartLegend:boolean = true;
 public lineChartType:string = 'line';

 public randomize():void {
   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
   for (let i = 0; i < this.lineChartData.length; i++) {
     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
     }
   }
   this.lineChartData = _lineChartData;
 }

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }

}
