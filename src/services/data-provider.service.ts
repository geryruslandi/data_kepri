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
          "1318,21",
          "6 m"
        ],
        [
          "Natuna",
          "2009,04",
          "14 m"
        ],
        [
          "Lingga",
          "2266,77",
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
          "1. Pulau Karimun Anak 2. Pulau Iyu Kecil"
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
    },
    {
      subjectName:"Jumlah Pegawai Negeri Sipil Menurut Golongan Kepangkatan dan Jenis Kelamin di Lingkungan Pemerintah Daerah Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/kote",
        "Laki-Laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "I/A (Juru Muda)",
          "3",
          "0",
          "3"
        ],
        [
          "I/B (Juru Muda Tingkat I)",
          "0",
          "0",
          "0"
        ],
        [
          "I/C (Juru)",
          "7",
          "1",
          "8"
        ],
        [
          "I/D (Juru Tingkat I)",
          "0",
          "0",
          "0"
        ],
        [
          "Golongan I",
          "10",
          "1",
          "11"
        ],
        [
          "II/A (Pengatur Muda)",
          "81",
          "40",
          "121"
        ],
        [
          "II/B (Pengatur Muda Tingkat I)",
          "22",
          "3",
          "25"
        ],
        [
          "II/C (Pengatur)",
          "85",
          "95",
          "180"
        ],
        [
          "II/D (Pengatur Tingkat I)",
          "81",
          "133",
          "214"
        ],
        [
          "Golongan II",
          "269",
          "271",
          "540"
        ],
        [
          "III/A (Penata Muda)",
          "214",
          "295",
          "509"
        ],
        [
          "III/B (Penata Muda Tingkat I)",
          "343",
          "317",
          "660"
        ],
        [
          "III/C (Penata)",
          "170",
          "153",
          "323"
        ],
        [
          "III/D (Penata Tingkat I)",
          "217",
          "127",
          "344"
        ],
        [
          "Golongan III",
          "944",
          "892",
          "1836"
        ],
        [
          "IV/A (Pembina Muda)",
          "86",
          "34",
          "120"
        ],
        [
          "IV/B (Pembina Muda Tingkat I)",
          "119",
          "37",
          "156"
        ],
        [
          "IV/C (Pembina)",
          "21",
          "3",
          "24"
        ],
        [
          "IV/D (Pembina Tingkat I)",
          "25",
          "2",
          "27"
        ],
        [
          "IV/E (Pembina Utama)",
          "0",
          "0",
          "0"
        ],
        [
          "Golongan IV",
          "251",
          "76",
          "327"
        ]
      ]
    },
    {
      subjectName:"Jumlah Pegawai Negeri Sipil Daerah Menurut Kabupaten/Kota dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
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
          "1 876",
          "2 252",
          "4 128"
        ],
        [
          "Bintan",
          "1 775",
          "1 934",
          "3 709"
        ],
        [
          "Natuna",
          "1 766",
          "1 327",
          "3 093"
        ],
        [
          "Lingga",
          "1 389",
          "1 570",
          "2 959"
        ],
        [
          "Kepulauan Anambas",
          "1 061",
          "853",
          "1 914"
        ],
        [
          "Kota"
        ],
        [
          "Batam",
          "2 791",
          "3 588",
          "6 379"
        ],
        [
          "Tanjungpinang",
          "1 499",
          "2 245",
          "3 744"
        ],
        [
          "Jumlah",
          "12 157",
          "13 769",
          "25 926"
        ]
      ]
    }
  ];
  private dataBab2=[
    {
      subjectName:"Jumlah Penduduk dan Laju Pertumbuhan Penduduk Menurut Kabupaten/Kota di Provinsi Kepulauan Riau, 2015-2016",
      column:[
        "Kabupaten/Kota",
        "Jumlah Penduduk 2015",
        "Jumlah Penduduk 2016",
        "Laju Pertumbuhan Penduduk per Tahun 2015-2016"
      ],
      data:[
        [
          "Kabupaten"
        ],
        [
          "Karimun",
          "225 298",
          "227 277",
          "0,88"
        ],
        [
          "Bintan",
          "153 020",
          "54 584",
          "1,02"
        ],
        [
          "Natuna",
          "74 520",
          "75 282",
          "1,02"
        ],
        [
          "Lingga",
          "88 591",
          "88 971",
          "0,43"
        ],
        [
          "Kep. Anambas",
          "40 414",
          "40 921",
          "1,25"
        ],
        [
          "Kota"
        ],
        [
          "Batam",
          "1 188 985",
          "1 236 399",
          "3,99"
        ],
        [
          "Tanjungpinang",
            "202 215",
            "204 735",
            "1,25"
          ],
          [
            "Kepulauan Riau",
            "1 973 043",
            "2 028 169",
            "2,79"
          ]
        ]
    },
    {
      subjectName:"Jumlah Penduduk Menurut Kabupaten/Kota dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/kota",
        "Laki-laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "Kabupaten"
        ],
        [
          "Karimun",
          "115 814",
          "111 463",
          "227 277",
          "104"
        ],
        [
          "Bintan",
          "79 576",
          "75 008",
          "154 584",
          "106"
        ],
        [
          "Natuna",
          "38 826",
          "36 456",
          "75 282",
          "107"
        ],
        [
          "Lingga",
          "45 365",
          "43 606",
          "88 971",
          "104"
        ],
        [
          "Kep. Anambas",
          "21 097",
          "19 824",
          "40 921",
          "106"
        ],
        [
          "Kota"
        ],
        [
          "Batam",
          "631 338",
          "605 061",
          "1 236 399",
          "104"
        ],
        [
          "Tanjungpinang",
          "103 495",
          "101 240",
          "204 735",
          "102"
        ],
        [
          "Kepulauan Riau",
          "1 035 511",
          "992 658",
          "2 028 169",
          "104"
        ]
      ]
    },
    {
      subjectName:"Distribusi dan Kepadatan Penduduk Menurut Kabupaten/Kota di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/Kota",
        "Persentase Penduduk (%)",
        "Kepadatan Penduduk per km 2"
      ],
      data:[
        [
          "Kabupaten"
        ],
        [
          "Karimun",
          "11,21",
          "249,00"
        ],
        [
          "Bintan",
          "7,62",
          "117,27"
        ],
        [
          "Natuna",
          "3,71",
          "37,47"
        ],
        [
          "Lingga",
          "4,39",
          "39,25"
        ],
        [
          "Kep. Anambas",
          "2,02",
          "69,34"
        ],
        [
          "Kota"
        ],
        [
          "Batam",
          "60,96",
          "1 287,58"
        ],
        [
          "Tanjungpinang",
          "10,09",
          "1 416,26"
        ],
        [
          "Kepulauan Riau",
          "100",
          "247,29"
        ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Menurut Kelompok Umur dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kelompok Umur",
        "Jumlah",
        "Laki-laki",
        "Perempuan"
      ],
      data:[
        [
          "0‒4",
          "111 464",
          "107 632",
          "219 096"
        ],
        [
          "5‒9",
          "109 091",
          "103 855",
          "212 946"
        ],
        [
          "10‒14",
          "97 729",
          "92 598",
          "190 327"
        ],
        [
          "15‒19",
          "69 739",
          "62 112",
          "136 851"
        ],
        [
          "20‒24",
          "67 404",
          "72 899",
          "140 303"
        ],
        [
          "25‒29",
          "95 986",
          "105 773",
          "201 759"
        ],
        [
          "30‒34",
          "111 026",
          "112 546",
           "223 572"
         ],
         [
          "35‒39",
          "107578",
          "101 317",
          "208 895"
        ],
        [
          "40‒44",
          "87 877",
          "76 261",
          "164 138"
        ],
        [
          "45‒49",
          "63 786",
          "50 891",
          "114 677"
        ],
        [
          "50‒54",
          "42 940",
          "34 367",
          "77 307"
        ],
        [
          "55‒59",
          "28 586",
          "25 334",
          "53 920"
        ],
        [
          "60‒64",
          "18 897",
          "17 729",
          "36 626"
        ],
        [
          "65+",
          "23 408",
          "24 344",
          "47 752"
        ],
        [
          "Jumlah",
          "1 035 511",
          "992 658",
          "2 028 169"
        ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas Menurut Kabupaten/Kota dan Jenis Kegiatan Selama Seminggu yang Lalu di Provinsi Kepulauan Riau, 2015",
      column:[
        "Kabupaten/Kota",
        "Bekerja",
        "Pengangguran Terbuka",
        "Jumlah",
        "Bukan Angkatan Kerja",
        "Jumlah"
      ],
      data:[
        [
        "Kabupaten"
      ],
      [
        "Karimun",
        "86 673",
        "5 229",
        "91 902",
        "63 235",
        "155 137"
      ],
      [
        "Bintan",
        "61 843",
        "4 572",
        "66 415",
        "39 284",
        "105 699"
      ],
      [
        "Natuna",
        "28 815",
        "3 397",
        "32 212",
        "17 711",
        "49 923"
      ],
      [
        "Lingga",
        "37 652",
        "1 574",
        "39 226",
        "23 436",
        "62 662"
      ],
      [
        "Kep. Anambas",
        "17 366",
        "1 184",
        "18 550",
        "8 600",
        "27 150"
      ],
      [
        "Kota"
      ],
      [
        "Batam",
        "524 046",
        "33 992",
        "558 038",
        "269 153",
        "827 191"
      ],
      [
        "Tanjungpinang",
        "80 275",
        "5 370",
        "85 645",
        "57 482",
        "143 127"
      ],
      [
        "Kepulauan Riau",
        "836 670",
        "55 318",
        "891 988",
        "478 901",
        "1 370 889"
      ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas Menurut Jenis Kegiatan Selama Seminggu yang Lalu dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kelompok",
        "Laki-laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "Angkatan Kerja",
          "610 020",
          "321 415",
          "931 435"
        ],
        [
          "Bekerja",
          "564 015",
          "295 798",
          "859 813"
        ],
        [
          "Pengangguran",
          "46 005",
          "25 617",
          "71 622"
        ],
        [
          "Bukan Angkatan Kerja",
          "110 798",
          "370 539",
          "481 337"
        ],
        [
          "Sekolah",
          "62 879",
          "60 429",
          "123 308"
        ],
        [
          "Mengurus Rumah",
          "30 720",
          "300 961",
          "331 681"
        ],
        [
          "Lainnya",
          "17 199",
          "9 149",
          "27 140"
        ],
        [
          "Jumlah",
          "1 035 511",
          "992 658",
          "2 028 169"
        ],
        [
          "Tingkat Partisipasi Angkatan Kerja",
          "84,63",
          "46,45",
          "65,93"
        ],
        [
          "Tingkat Pengangguran",
          "7,54",
          "7,97",
          "7,69"
        ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas Menurut Pendidikan Tertinggi yang Ditamatkan dan Jenis Kegiatan Selama Seminggu yang Lalu di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kabupaten/Kota",
        "Bekerja",
        "Pengangguran Terbuka",
        "Jumlah",
        "Bukan Angkatan Kerja"
      ],
      data:[
        [
          "Tidak/Belum Pernah Sekolah",
          "4 705",
          "-",
          "4 705",
          "16 584"
        ],
        [
          "Tidak/Belum Tamat SD",
          "89 904",
          "3 693",
          "88 597",
          "57 643"
        ],
        [
          "Sekolah Dasar",
          "130 334",
          "12 829",
          "143 163",
          "91 795"
        ],
        [
          "Sekolah Menengah Pertama",
          "133 638",
          "5 502",
          "139 140",
          "159 425"
        ],
        [
          "Sekolah Menengah Atas",
          "229 176",
          "36 806",
          "265 982",
          "102 061"
        ],
        [
          "Diploma I/II/III/Akademi",
          "41 287",
          "-",
          "41 287",
          "8 209"
        ],
        [
          "Universitas",
          "99 229",
          "3 735",
          "102 964",
          "4 713"
        ],
        [
          "Jumlah",
          "859 813",
          "71 622",
          "931 435",
          "481 337"
        ]
      ]
      },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Kelompok Umur dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kelompok Umur",
        "Laki-laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "15−24",
          "57 826",
          "45 065",
          "102 891"
        ],
        [
          "25−30 107 134 53 515 160 649"
        ],
        [
          "31−34 80 948 46 845 127 793"
        ],
        [
          "35−44 173 342 89 049 262 391"
        ],
        [
          "45−54 100 255 44 947 145 202"
        ],
        [
          "55−59 23 080 9 436 32 516"
        ],
        [
          "60−64 12 004 4 213 16 217"
        ],
        [
          "65+ 9 426 2 728 12 154"
        ],
        [
          "Jumlah 564 015 295 798 859 813"
        ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Lapangan Pekerjaan Utama dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Lapangan Pekerjaan Utama",
        "Laki-laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "Pertanian, Kehutanan, Perburuan, dan Perikanan",
          "91 827",
          "11 116",
          "102 943",
        ],
        [
          "Pertambangan dan Penggalian",
          "14 398",
          "867",
          "15 265"
        ],
        [
          "Industri Pengolahan",
          "93 093",
          "50 912",
          "144 005"
        ],
        [
          "Listrik, Gas, dan Air",
          "2 945",
          "-",
          "2 945"
        ],
        [
          "Bangunan",
          "50 603",
           "4 093",
          "54 696"
        ],
        [
          "Perdagangan Besar, Eceran, Rumah Makan, dan Hotel",
          "115 793",
          "109 612",
          "225 405"
        ],
        [
          "Angkutan, Pergudangan, dan Komunikasi",
          "49 732",
          "7 906",
          "57 638"
        ],
        [
          "Keuangan, Asuransi, Usaha Persewaan Bangunan, Tanah, dan Jasa Perusahaan",
          "22 191",
          "2 110",
          "24 301"
        ],
        [
          "Jasa Kemasyarakatan, Sosial, dan Perorangan",
          "123 433",
          "109 182",
          "232 615"
        ],
        [
          "Jumlah",
          "564 015",
          "295 798",
          "859 813"
        ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Jumlah Jam Kerja Seluruhnya dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Kelompok Umur",
        "Laki-Laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "0",
          "6 793",
          "2 964",
          "9 757"
         ],
         [
          "1−14",
          "6 810",
          "13 017",
          "19 827"
        ],
        [
          "15−24",
          "17 267",
          "28 928",
          "46 195"
        ],
        [
          "25−34",
          "31 358",
          "40 461",
          "71 819"
        ],
        [
          "35−40",
          "142 134",
          "62 107",
          "204 241"
        ],
        [
          "41+",
          "359 653",
          "148 321",
          "507 974"
        ],
        [
          "60−64",
          "12 004",
          "4 213",
          "16 217"
        ],
        [
          "65+",
          "9 426",
          "2 728",
          "12 154"
        ],
        [
          "Jumlah",
          "564 015",
          "295 798",
          "859 813"
        ]
      ]
    },
    {
      subjectName:"Jumlah Penduduk Berumur 15 Tahun ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Status Pekerjaan Utama dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Status Pekerjaan Utama",
        "Laki-laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "Berusaha sendiri",
          "122 299",
          "40 636",
          "162 935"
        ],
        [
          "Berusaha dibantu buruh tidak tetap/buruh tak dibayar",
          "36 669",
          "18 149",
          "54 818"
        ],
        [
          "Berusaha dibantu buruh tetap/buruh dibayar",
          "15 844",
          "4 905",
          "20 749"
        ],
        [
          "Buruh/Karyawan/Pegawai",
          "356 530",
          "191 896",
          "548 426"
        ],
        [
          "Pekerja bebas",
          "21 819",
          "4 191",
          "26 010"
        ],
        [
          "Pekerja keluarga/tak dibayar",
          "10 85",
          "36 021",
          "46 875"
        ],
        [
          "Jumlah",
          "564 015",
          "295 798",
          "859 813"
        ]
      ]
    },
    {
      subjectName:"Jumlah Pencari Kerja Terdaftar Menurut Tingkat Pendidikan Tertinggi yang Ditamatkan dan Jenis Kelamin di Provinsi Kepulauan Riau, 2016",
      column:[
        "Pendidikan Tertinggi yang Ditamatkan",
        "Laki-laki",
        "Perempuan",
        "Jumlah"
      ],
      data:[
        [
          "Tidak/Belum Pernah Sekolah",
          "-",
          "-",
          "-"
        ],
        [
          "Tidak/Belum Tamat SD",
          "-",
          "-",
          "-"
        ],
        [
          "Sekolah Dasar",
          "782",
          "27",
          "809"
        ],
        [
          "Sekolah Menengah Pertama",
          "730",
          "61",
          "791"
        ],
        [
          "Sekolah Menengah Atas",
          "4 058",
          "2 037",
          "6 095"
        ],
        [
          "Diploma I/II/III/Akademi",
          "269",
          "370",
          "639"
        ],
        [
          "Universitas",
          "698",
          "722",
          "1 420"
        ],
        [
          "Jumlah",
          "6 537",
          "3 217",
          "9 754"
        ]
      ]
    },
    {
      subjectName:"",
      column:[
        "Jenis Kelamin dan Kelompok Umur Sekolah",
        "Partisipasi Sekolah Tidak/Belum Pernah Sekolah Masih Sekolah Tidak Sekolah Lagi"
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
