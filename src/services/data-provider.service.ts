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
          "Kabupaten"
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
          "Kota"
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
    },
    {
      subjectName:"Letak Geografis Kabupaten/Kota di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/kota",
        "Lintang",
        "Bujur"
      ],
      data:[
        [
          "Kabupaten"
        ],
        [
          "Karimun",
          "1°01 ́58.93 ́ ́LU",
          "103°22 ́32.84 ́ ́BT"
        ],
        [
          "Bintan",
          "1°05 ́03.94 ́ ́LU",
          "104°28 ́56.23 ́ ́BT"
        ],
        [
          "Natuna",
          "3°56 ́28.62 ́ ́LU",
          "108°22 ́38.53 ́ ́BT"
        ],
        [
          "Lingga",
          "0°12 ́36.24 ́ ́LS",
          "104°36 ́18.79 ́ ́BT"
        ],
        [
          "Kep. Anambas",
          "3°12 ́54.00 ́ ́LU",
          "106°13 ́04.80 ́ ́BT"
        ],
        [
          "Kota"
        ],
        [
          "Batam",
          "1°07 ́40.01 ́ ́LU",
          "104°03 ́18.84 ́ ́BT"
        ],
        [
          "Tanjungpinang",
          "0°57 ́56.48 ́ ́LU",
          "104°26 ́27.62 ́ ́BT"
        ],
        [
          "Kepulauan Riau",
          "0°29 ́ LS 04°40 ́LU",
          "103°22 ́ 109°40 ́BT"
        ]
      ]

    },
    {
      subjectName:"Jarak dari Ibukota Kabupaten/Kota ke Ibukota Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/Kota",
        "Luas Daratan (km 2 )",
        "Tinggi Tempat (dpl)"
      ],
      data:[
        [
          "Kabupaten"
        ],
        [
          "Karimun",
          "Tanjung Balai",
          "76"
        ],
        [
          "Bintan",
          "Bintan Buyu",
          "20"
        ],
        [
          "Natuna",
          "Ranai",
          "440"
        ],
        [
          "Lingga",
          "Daik",
          "60"
        ],
        [
          "Kep. Anambas",
          "Tarempa",
          "194"
        ],
        [
          "Kota"
        ],
        [
          "Batam",
          "Batam",
          "40"
        ],
        [
          "Tanjungpinang",
          "Tanjungpinang",
          "0"
        ]
      ]
    },
    {
      subjectName:"Jumlah Pulau Menurut Kabupaten/Kota di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/Kota",
        "Jumlah Nama",
        "Pulau Terluar"
      ],
      data:[
        [
        "Kabupaten"
      ],
      [
        "Karimun",
        "251",
        "1. Pulau Karimun Anak; 2. Pulau Iyu Kecil"
      ],
      [
        "Bintan",
        "240",
        "1.Pulau Sentut; 2. Pulau Berakit; 3. Pulau Bintan; 4. Pulau Malang Berdaun"
      ],
      [
        "Natuna",
        "154",
        "1. Pulau Kepala; 2. Pulau Subi Kecil; 3. Pulau Senoa; 4. Pulau Sekatung; 5. Pulau Sebetul; 6. Pulau Semiun; 7. Pulau Tokong Boro"
      ],
      [
        "Lingga",
        "531",
        "-"
      ],
      [
        "Kep. Anambas",
        "238",
        "1. Pulau Tokong Malang Biru; 2. Pulau Damar; 3. Pulau Mangkai; 4. Pulau Tokong Nanas; 5. Pulau Tokong Berlayar"
      ],
      [
        "Kota"
      ],
      [
        "Batam",
        "373",
        "1. Pulau Nipah; 2. Pulau Pelampong; 3. Pulau Batu Berhenti; 4. Pulau Nongsa"
      ],
      [
        "Tanjungpinang",
        "",
        "-"
      ],
      ["Kepulauan Riau",
      "1 796",
      ""
    ]
    ]

  },
    {
      subjectName:"Nama Gunung dan Ketinggiannya Menurut Kabupaten/Kota di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/Kota",
        "Nama Gunung",
        "Tinggi (m)"
      ],
      data:[
        [
          "Kabupaten"
        ],
      [
        "Karimun",
        "Gunung Jantan",
        "478"
      ],
      [
        "Bintan",
        "Gunung Bintan",
        "380"
      ],
      [
        "Natuna",
        "Gunung Ranai",
        "959"
      ],
      [
        "",
        "Gunung Datuk",
        "510"
      ],
      [
        "",
        "Gunung Tukong",
        "477"
      ],
      [
        "",
        "Gunung Salasih",
        "387"
      ],
      [
        "",
        "Gunung Lintang",
        "610"
      ],
      [
        "Lingga",
        "Gunung Daik",
        "2 721"
      ],
      [
        "",
        "Gunung Sepincan",
        "800"
      ],
      [
        "",
        "Gunung Tanda",
        "343"
      ],
      [
        "",
        "Gunung Lanjut",
        "519"
      ],
      [
        "",
        "Gunung Muncung",
        "415"
      ],
      [
        "Kep. Anambas",
        "Gunung Punjang",
        "433"
      ],
      [
        "",
       "Gunung Kute",
       "232"
     ],
     [
       "",
       "Gunung Pelawan Condong",
       "405"
      ],
      [
        "Kota"
      ],
      [
        "Batam",
        "",
        ""
      ],
      [
        "Tanjungpinang",
        "",
        ""
      ]
    ]
    },
  {
    subjectName:"Rata-rata Suhu Udara, Kelembaban, Tekanan Udara, Kecepatan Angin, Curah Hujan, dan Penyinaran Matahari Menurut Stasiun di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/kota",
        "Stasiun Karimun",
        "Stasiun Ranai",
        "Stasiun Dabo",
        "Stasiun Tarempa",
        "Stasiun Hang Nadim",
        "Stasiun Tanjungpinang"
      ],
      data:[
        [
        "Suhu"
      ],
      [
        "Maksimum",
        "33",
        "35",
        "33",
        "36",
        "35",
        "34"
      ],
      [
        "Minimum",
        "24",
        "21",
        "21",
        "21",
        "22",
        "22"
      ],
      [
        "Rata-rata",
        "29",
        "28",
        "27",
        "28",
        "28",
        "27"
      ],
      [
        "Kelembaban Udara (persen)"
      ],
      [
        "Maksimum",
        "99",
        "100",
        "98",
        "100",
        "100",
        "100"
      ],
      [
        "Minimum",
        "49",
        "51",
        "75",
        "53",
        "47",
        "45"
      ],
      [
        "Rata-rata",
        "82",
        "86",
        "88",
        "",
        "82",
        "83"
      ],
      [
        "Tekanan Udara",
        "1 010",
        "1 010,57",
        "1 010,58",
        "1 009,79",
        "1 011,69",
        "1 010,74"
      ],
      [
        "Kecepatan Angin (knot)",
        "9",
        "4",
        "3",
        "4",
        "5",
        "5"
      ],
      [
        "Curah Hujan (mm 3 )",
        "184",
        "222",
        "265",
        "147",
        "192",
        "287"
      ],
      [
        "Penyinaran Matahari (persen)",
        "55",
        "65",
        "48",
        "54",
        "23",
        "38"
      ],
    ]
  },
  {
    subjectName:"Jumlah Kecamatan dan Desa/Kelurahan Menurut Kabupaten/Kota di Provinsi Kepulauan Riau, 2016",
    column:[
    "Kabupaten/Kota",
    "Kecamatan",
     "Desa",
    "Kelurahan"
    ],
    data:[
      [
        "Kabupaten"
      ],
      [
        "Karimun",
        "12",
        "42",
        "29"
      ],
      [
        "Bintan",
        "10",
        "36",
        "15"
      ],
      [
        "Natuna",
        "15",
        "70",
        "6"
      ],
      [
        "Lingga",
        "10",
        "75",
        "7"
      ],
      [
        "Kep. Anambas",
        "7",
        "52",
        "2"
      ],
      [
        "Kota"
      ],
      [
        "Batam",
        "12",
        "0",
        "64"
      ],
      [
        "Tanjungpinang",
        "4",
        "0",
        "18"
      ],
      [
        "Kepulauan Riau",
        "70",
        "275",
        "141"
      ]
    ]
  },
  {
    subjectName:"Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Partai Politik dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
    column:[
      "Partai Politik",
      "Laki-Laki",
      "Perempuan",
      "Jumlah"
    ],
    data:[
      [
        "Partai Demokrat",
        "6",
        "1",
        "7"
      ],
      [
        "Partai Golkar",
        "6",
        "2",
        "8"
      ],
      [
        "PDI Perjuangan",
        "8",
        "1",
        "9"
      ],
      [
        "Partai Amanat Nasional",
        "1",
        "-",
        "1"
      ],
      [
        "Partai Keadilan Sejahtera",
        "3",
        "1",
        "4"
      ],
      [
        "Partai Persatuan Pembangunan",
        "2",
        "-",
        "2"
      ],
      [
        "Partai Kebangkitan Bangsa",
        "3",
        "-",
        "3"
      ],
      [
        "Partai Hanura",
        "5",
        "-",
        "5"
      ],
      [
        "Partai Gerindra",
        "1",
        "2",
        "3"
      ],
      [
        "Partai Nasdem",
        "2",
        "1",
        "3"
      ],
      [
        "Kepulauan",
        "37",
        "8",
        "45"
      ]
    ]
  },
  {
    subjectName:"Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten/Kota dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
    column:[
      "Kabupaten/Kota",
      "Laki-Laki",
      "Perempuan",
      "Jumlah"
    ],
    data:[
      [
        "Kabupaten"
      ],
      [
        "Karimun",
        "28",
        "2",
        "30"
      ],
      [
        "Bintan",
        "22",
        "3",
        "25"
      ],
      [
        "Natuna",
        "19",
        "1",
        "20"
      ],
      [
        "Lingga",
        "20",
        "0",
        "20"
      ],
      [
        "Kep. Anambas",
        "18",
        "2",
        "20"
      ],
      [
        "Batam",
        "47",
        "3",
        "50"
      ],
      [
        "Tanjungpinang",
        "37",
        "8",
        "45"
      ],
      [
        "Kepulauan Riau",
        "183",
        "19",
        "210"
      ]
    ]
  },
  {
    subjectName:"Jumlah Pegawai Negeri Sipil Menurut Dinas/Instansi dan Jenis Kelamin di Lingkungan Pemerintahan Daerah Provinsi Kepulauan Riau, 2016",
    column:[
      "Dinas/Intansi",
      "Laki-Laki",
      "Perempuan",
      "Jumlah"
    ],
    data:[
      [
        "Sekertaris Daerah",
        "1",
        "0",
        "1"
      ],
      [
        "Asisten Ekonomi dan Pembangunan",
        "1",
        "0",
        "1"
      ],
      [
        "Asisten Pemerintahan dan Kesra",
        "0",
        "1",
        "1"
      ],
      [
        "Asisten Admnistrasi Umum",
        "0",
        "0",
        "0"
      ],
      [
        "Staf Ahli",
        "3",
        "1",
        "4"
      ],
      [
        "Inspektorat Daerah",
        "32",
        "22",
        "54"
      ],
      [
        "Badan Pengelolaan Keuangan dan Kekayaan Daerah",
        "51",
        "44",
        "95"
      ],
      [
        "Badan Penanaman Modal Pelayanan Terpadu Satu Pintu",
        "24",
        "14",
        "38"
      ],
      [
        "Badan Lingkungan Hidup",
        "26",
        "16",
        "42"
      ],
      [
        "Badan Kepegawaian, Pendidikan dan pelatihan",
        "34",
        "27",
        "61"
      ],
      [
        "Badan Perencanaan Pembangunan Daerah",
        "49",
        "37",
        "86"
      ],
      [
        "Sub Jumlah",
        "221",
        "162",
        "383"
      ],
      [
        "Badan Kesbang dan Politik",
        "22",
        "10",
        "32"
      ],
      [
        "Badan Pemberdayaan Masyarakat Desa",
        "23",
        "14",
        "37"
      ],
      [
        "Badan Perpustakaan dan Arsip Daerah",
        "13",
        "40",
        "53"
      ],
      [
        "Badan Penanggulangan Bencana Daerah",
        "17",
        "5",
        "22"
      ],
      [
        "Badan Pengelola Perbatasan",
        "29",
        "12",
        "41"
      ],
      [
        "Badan Pemberdayaan Perempuan dan Perlindungan Anak",
        "5",
        "25",
        "30"
      ],
      [
        "Badan Ketahanan Pangan",
        "20",
        "11",
        "31"
      ],
      [
        "Dinas Pertanian, Kehutanan dan Perternakan",
        "46",
        "21",
        "67"
      ],
      [
        "Dinas Kependudukan dan Catatan Sipil",
        "16",
        "13",
        "29"
      ],
      [
        "Dinas Tenaga Kerja dan Transmigrasi",
        "46",
        "20",
        "66"
      ],
      [
        "Dinas Kesehatan",
        "27",
        "79",
        "106"
      ],
      [
        "Dinas Pekerjaan Umum",
        "62",
        "21",
        "83"
      ],
      [
        "Dinas Perhubungan",
        "45",
        "15",
        "60"
      ],
      [
        "Dinas Kelautan dan Perikanan",
        "65",
        "33",
        "98"
      ],
      [
        "Dinas Pendidikan",
        "69",
        "51",
        "120"
      ],
      [
        "Dinas Pariwisata",
         "24",
        "20",
        "44"
      ],
      [
        "Dinas Kebudayaan",
        "17",
        "15",
        "32"
      ],
      [
        "Dinas Perindustrian dan Perdagangan",
        "35",
        "31",
        "66",
      ],
      [
        "Dinas Pendapatan Daerah",
        "86",
        "78",
        "164"
      ],
      [
        "Dinas Pertambangan dan Energi",
        "32",
        "4",
        "36"
      ],
      [
        "Dinas Sosial",
        "26",
        "18",
        "44"
      ],
      [
        "Dinas Pemuda dan Olahraga",
        "31",
        "10",
        "41"
      ],
      [
        "Dinas Koperasi dan Usaha Kecil Menengah",
        "14",
        "12",
        "26"
      ],
      [
        "Dinas Komunikasi dan Informatika",
        "18",
        "8",
        "26"
      ],
      [
        "Biro Administrasi Perekonomian",
        "9",
        "16",
        "25"
      ],
      [
        "Biro Administrasi Kesejahteraan Rakyat",
        "20",
        "13",
        "33"
      ],
      [
        "Biro Umum",
        "43",
        "25",
        "68"
      ],
      [
        "Biro Hukum",
        "14",
        "13",
        "27"
      ],
      [
        "Biro Administrasi Pemerintahan",
        "22",
        "17",
        "39"
      ],
      [
        "Biro Administrai Pembangunan",
        "27",
        "14",
        "41"
      ],
      [
        "Sub Jumlah",
        "923",
        "664",
        "1",
        "587"
    ],
    [
      "Biro Perlengkapan",
      "17",
      "12",
      "29"
    ],
    [
      "Biro Organisasi",
      "10",
      "11",
      "21"
    ],
    [
      "Biro Humas dan Protokol",
      "27",
      "13",
      "40"
    ],
    [
      "Satuan Polisi Pamong Praja",
      "67",
      "7",
      "74"
    ],
    [
      "Sekretariat Komisi Penyiaran Indonesia Daerah",
      "5",
      "10",
      "15"
    ],
    [
      "Sekretariat KORPRI",
      "10",
      "4",
      "14"
    ],
    [
      "Sekretariat KPU",
      "1",
      "0",
      "1"
    ],
    [
      "Sekretariat DPRD",
      "55",
      "36",
      "91"
    ],
    [
      "Rumah Sakit Umum Daerah Tanjung Uban",
      "63",
      "143",
      "206"
    ],
    [
      "Rumah Sakit Umum Daerah Tanjungpinang",
      "66",
      "166",
      "232"
    ],
    [
      "Kantor Penghubung",
      "8",
      "11",
      "19"
    ],
    [
      "Komisi Pengawasan dan Perlindungan Anak Daerah",
       "1",
       "1",
       "2"
     ],
     [
       "Sub Jumlah",
       "314",
       "414",
       "728"
     ],
     [
       "Jumlah",
       "1474",
       "1240",
       "2714"
     ]
  ]
},
{
  subjectName:"Jumlah Pegawai Negeri Sipil Menurut Pendidikan Tertinggi yang Ditamatkan dan Jenis Kelamin di Lingkungan Pemerintah Daerah Provinsi Kepulauan Riau, 2016",
  column:[
    "Kabupaten/Kota",
    "Laki-Laki",
    "Perempuan"
  ],
  data:[
    [
      "Sampai dengan SD",
      "4",
      "0",
      "4"
    ],
    [
      "SLTP/Sederajat",
      "8",
      "1",
      "9"
    ],
    [
      "SMA/Sederajat",
      "182",
      "83",
      "265"
    ],
    [
      "Diploma I,II",
      "4",
      "2",
      "6"
    ],
    [
      "Diploma III/Sarjana Muda",
      "181",
      "293",
       "474"
     ],
     [
      "Tingkat Sarjana/Doktor/Ph.D",
      "1 095",
      "861",
      "1 956"
    ],
    [
      "Jumlah",
      "1 474",
      "1 240",
      "2 714"
    ]
  ]
}
  ];




  public getData(bab){
    switch(bab){
      case 'bab1':
        return this.dataBab1
    }
  }

}
