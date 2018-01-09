import { Injectable} from "@angular/core";
import { AlertController } from 'ionic-angular';

@Injectable()
export class dataProvider{

  private dataBab1 =[
    {
      subjectName:"Luas Daratan dan Tinggi Tempat Menurut Kabupaten/Kota di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/Kota",
        "Luas Daratan (km 2 )",
        "Tinggi Tempat (dpl)"
      ],
      data:[
        [
          "Kabupaten",
          "",
          ""
        ],
        [
          "Karimun",
          "913",
          "5 m"
        ],
        [
          "Bintan",
          "1 318,21",
          "6 m"
        ],
        [
          "Natuna",
          "2 009,04",
          "14 m"
        ],
        [
          "Lingga",
          "2 266,77",
          "6 m"
        ],
        [
          "Kep. Anambas",
          "590",
          "6 m"
        ],
        [
          "Kota",
          "",
          "",
        ],
        [
          "Batam",
          "960",
          "8 m"
        ],
        [
          "Tanjungpinang",
          "145",
          "65 m"
        ],
        [
          "Kepulauan Riau",
          "8201,72",
          "-"
        ]
      ]
    }
  ];

  public getBab1(){
    return this.dataBab1;
  }

}
