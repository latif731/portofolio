import { useTranslation } from "react-i18next";

import catering from "../../src/assets/videos/catering.mp4";
// import catering from "../../src/assets/videos/";
// import foo from "../../src/videos/foo.mp4";
import foo from "../../src/assets/videos/foo.mp4";
import grab from "../../src/assets/videos/grab.mp4";
// import grab from "../../src/videos/grab.mp4";
import idexpress from "../../src/assets/videos/idexpress.mp4";
// import idexpress from "../../src/videos/idexpress.mp4";
import shopee from "../../src/assets/videos/shopee.mp4";
// import shopee from "../../src/videos/shopee.mp4";
import cateringService from "../../src/assets/images/cateringService.jpg";
// import cateringService from "../../src/images/cateringService.jpg";
import foogambar from "../../src/assets/images/sriwijaya.png";
// import foogambar from "../../src/images/sriwijaya.png";
import grabgambar from "../../src/assets/images/grab.jpg";
// import grabgambar from "../../src/images/grab.jpg";
import idgambar from "../../src/assets/images/idexpress.png";
// import idgambar from "../../src/images/idexpress.png";
import shopeegambar from "../../src/assets/images/shopeegambar.jpg";
// import shopeegambar from "../../src/images/shopeegambar.jpg";
import ojt from "../../src/assets/images/ojt.png"
// import ojt from "../../src/images/ojt.png"
import lion from "../../src/assets/images/lion-1.png"
// import lion from "../../src/images/lion-1.png"
import grabakun from "../../src/assets/images/grabaccount.jpg"
// import grabakun from "../../src/images/grabaccount.jpg"

export const PengalamanKerja = () => {
  const {t} = useTranslation()
  return  [
      {
        id: 1,
        video: `${catering}`,
        // video: `/videos/catering.mp4`,
        thumbnail: `${cateringService}`,
        // thumbnail: `/images/cateringService.jpg`,
        // title: "Catering",
        title:t("Pengalaman Kerja.catering"),
        // type: "Lion Boga",
        type: t("Pengalaman Kerja.type1"),
        // posisi:"catering service staff",
        posisi:t("detail pekerjaan.catering"),
        // perusahaan:"PT Angkasa Aviasi Servis",
        perusahaan:t("detail pekerjaan.pt1"),
        // durasi:"januari 2015 - januari 2018",
        durasi:t("detail pekerjaan.lama1"),
        img:`${lion}`,
        // img:`/images/lion-1.png`,
  //       description: `
  // - sebagai petugas catering service di maskapai hal pertama 
  //   yang saya lakukan adalah memeriksa jadwal penerbangan 
  //   sehingga dapat mengetahui jumlah pesawat dan rute mana saja
  //   yang beroperasi.
  // - memeriksa kelengkapan barang dan makanan yang siap di muat
  //   ke cabin pesawat berdasarkan route penerbangan.
  // - barang yang di maksud adalah tisu, napkin, plastik tea spon,
  //   paper cup, plastik cup, roll tissue, dan air mineral 
  //   sedangkan untuk yang makanan berupa snack dan makanan frozen
  //   yang nantinya akan di massukkan ke dalam trolley galley, 
  //   lalu jumlah barang dan makanan tersebut di tentukan 
  //   dengan berapa landing pesawat tersebut beroperasi.
  // - ketika barang dan makanan sudah di periksa semua
  //   dan lengkap sesuai dengan rute penerbangan, saya bersama
  //   petugas yang lain bersiap menuju ke lapangan untuk menguplift
  //   atau memuat semua barang yang ada di dalam trolley galley
  //   ke dalam pesawat dengan menggunakan truk HTC yang nantinya
  //   makanan dan minuman yang ada di dalam trolley tersebut
  //   akan di gunakan untuk pelayanan oleh pramugari kepada 
  //   penumpang selama pesawat mengudara.
  // - setelah semua sudah selesai termuat ke dalam pesawat 
  //   selanjutnya saya bersama tim yang lain memonitor dan 
  //   dan memeriksa pesawat yang lain mengenai kelengkapan
  //   stok barang yang tersisa di dalam pesawat apakah masih 
  //   cukup atau kurang untuk penerbangan berikutya jika kurang 
  //   maka akan dimuat jika masih cukup tidak perlu di tambah
  //   atau di ganti. 
      
    
  //       `,
      description : t("detail pekerjaan.dekripsi kerja1")
      },
      {
        id: 2,
        video: `${foo}`,
        // video: `/videos/foo.mp4`,
        thumbnail: `${foogambar}`,
        // thumbnail: `/images/sriwijaya.png`,
        title: t("Pengalaman Kerja.foo"),
        type: t("Pengalaman Kerja.type2"),
        posisi:t("detail pekerjaan.siswa"),
        perusahaan:t("detail pekerjaan.pt2"),
        durasi:t("detail pekerjaan.lama2"),
        img:`${ojt}`,
        // img:`/images/ojt.png`,
  //       description: `
  // - sebagai siswa Flight Operation Oficer (FOO) yang melaksanakan 
  //   OJT atau magang di perusahaan sriwijaya, saya diwajibkan
  //   untuk mengikuti peraturan perusahaan selayaknya seperti
  //   karyawan yang bekerja sebagai FOO di sana bekerja 8 jam
  //   dan mengikuti shift kerja di perusahaan tersebut.
  //   saya belajar dan mengikuti arahan karyawan atau senior saya
  //   yang sudah bekerja di perusahaan tersebut.
  // - hal pertama yang saya lakukan adalah mempersiapkan dokumen
  //   penerbangan seperti notam, flight plan, sigmet, windtemp,
  //   yang nantinya akan di serahkan kepada captain atau pilot
  //   sebelum terbang
  // - setelah itu saya melanjutkan untuk memonitor pesawat
  //   yang berangkat dan tiba di bandara melalui flight radar
  // - membuat flight plan dan menghitung loadsheet untuk penerbangan
  //   selanjutnya
  // - membriefing pilot mengenai, cuaca, notam, flight dan 
  //   loadsheet sebelum berangkat atau terbang
  // - flight plan berisi tentang perhitungan bahan bakar berdasarkan 
  //   jarak rute penerbangan dan berat pesawat.
  // - loadsheet berisi tentang menghitung keseimbangan pesawat
  //   berdasarkan jumlah penumpang dan jumlah barang bagasi 
  //   di dalam kompartment.
  // - berkomunikasi dengan pilot melalui radio komunikasi 
  // - membuat scedule penerbangan berdasarkan rute penerbangan
  // - mengajukan slot time ke pihak ATC untuk pelayanan 
  //   komunikasi dan permintaan jadwal antri keberangkatan pesawat.
  //       `,
        description: t("detail pekerjaan.dekripsi kerja2")
      },
      {
        id: 3,
        video: `${grab}`,
        // video: `/videos/grab.mp4`,
        thumbnail: `${grabgambar}`,
        // thumbnail: `/images/grab.jpg`,
        // title: "Grab",
        title: t("Pengalaman Kerja.grab"),
        // type: "Ojek Online",
        type: t("Pengalaman Kerja.type3"),
        // posisi: `Driver Ojek Online`,
        posisi: t("detail pekerjaan.driver"),
        // perusahaan: `PT Grab Indonesia`,
        // perusahaan: `PT Grab Indonesia`,
        perusahaan:t("detail pekerjaan.pt3"),
        img:`${grabakun}`,
        // img:`/images/grabaccount.jpg`,
        // durasi:"agustus 2018 - januari 2021",
        durasi:t("detail pekerjaan.lama3"),
  //       description: `
  //  - saya mendaftar di grab sebagai driver ojek online mulai 
  //   tahun 2018 semenjak saya menjadi siswa FOO di merpati 
  //   training center sampai 2021, selama saya magang di sriwijaya air saya menjadi driver ojek 
  //   online grab di wilayah surabaya, area juanda sedati agung
  //   sidoarjo dan wilayah surabaya kota sebagai pekerjaan sampingan.
  // - bertugas untuk mengantarkan penumpang dan makanan sesuai 
  //   dengan permintaan di aplikasi.  
  // `
        description:t("detail pekerjaan.dekripsi kerja3")
      },
      {
        id: 4,
        video: `${idexpress}`,
        // video: `/videos/idexpress.mp4`,
        thumbnail: `${idgambar}`,
        // thumbnail: `/images/idexpress.png`,
        // title: "ID Express",
        title: t("Pengalaman Kerja.id express"),
        // type: "Kurir",
        type: t("Pengalaman Kerja.type4"),
        // perusahaan:"PT ID Express Logistik Indonesia",
        perusahaan:t("detail pekerjaan.pt4"),
        // posisi:"Kurir Event",
        posisi:t("detail pekerjaan.kurir id"),
        // durasi:"2021 - 2022",
        durasi:t("detail pekerjaan.lama4"),
    //     description: `
    // saya bekerja sebagai kurir di id express mulai masuk 
    // tahun 2021 di TH kantor Mulyosari Surabaya, saya
    // mengantar paket di wilayah atau area sekitar pantai
    // kenjeran dan area ITS (Institut Teknologi Sepuluh Nopember),
    // selanjutnya saya pindah di TH sukodono dan mengirim paket
    // di wilayah kabupaten sidoarjo area Kec. Buduran yaitu 
    // perumahan valencia, perumahan Permata Alam Permai, dan 
    // desa gemurung kurir event adalah kurir yang hanya bekerja
    // jika ada event shopee, lazada, atau Tokopedia
    //     `
        description: t("detail pekerjaan.dekripsi kerja4")
      },
      {
        id: 5,
        video: `${shopee}`,
        // video: `/videos/shopee.mp4`,
        thumbnail: `${shopeegambar}`,
        // thumbnail: `/images/shopeegambar.jpg`,
        // title: "Shopee Express",
        title: t("Pengalaman Kerja.shopee"),
        // type: "Kurir",
        type: t("Pengalaman Kerja.type5"),
        // posisi:"Kurir Mitra",
        posisi:t("detail pekerjaan.kurir shopee"),
        // durasi:"2022 - 2023",
        durasi:t("detail pekerjaan.lama5"),
        // perusahaan:"PT Shopee Express Indonesia",
        perusahaan:t("detail pekerjaan.pt5"),
    //     description: `
    // saya bekerja sebagai kurir di Shopee express mulai masuk 
    // tahun 2022 di TH kantor Kec. Wonoasri Caruban Kab. Madiun, 
    // saya mengantar paket di wilayah atau area Kec. Saradan 
    // desa Bener, Tulung, Klumutan, Sumbersari, Sumberbendo,
    // Klangon, Pajaran. Kurir Reguler atau Mitra adalah bukan 
    // kurir tetap yang tidak di target oleh persahaan dan kurir
    // yang bekerja jika jumlah paket membludak.
    //     `,
        description: t("detail pekerjaan.dekripsi kerja5")
      },
    ];
}
