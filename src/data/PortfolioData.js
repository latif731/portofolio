import client from "../../src/assets/images/wedspotclient.png"
import vendor from "../../src/assets/images/wedspotvendor.png"
import figma1 from "../../src/assets/images/wedspotfigma.png"
import figma2 from "../../src/assets/images/musiconfigma.png"
import react from "../../src/assets/images/reactjs.png"
import bootstrap from "../../src/assets/images/reactbootstrap.png"
import axios from "../../src/assets/images/axios.jpg"
import imagegalery from "../../src/assets/images/reactimagegalery.png"
import toastify from "../../src/assets/images/reacttoastify.png"
import reactrouter from "../../src/assets/images/reactrouter.png"
import sass from "../../src/assets/images/sass.png"
import slick from "../../src/assets/images/slick.png"
import css from "../../src/assets/images/css.png"
import vercel from "../../src/assets/images/vercel.png"
import materialui from "../../src/assets/images/materialui.png"
import git from "../../src/assets/images/git.png"
import reacticons from "../../src/assets/images/reacticons.png"
import npm from "../../src/assets/images/npm.png"
import redux from "../../src/assets/images/redux.png"
import moment from "../../src/assets/images/momentjs.png"



export const PortfolioDatas = [
    {
    id:"1",
    img:`${client}`,
    // img:`/images/wedspotclient.png`,
    title:"Wedspot Client",
    type:"website",
    video:"",
    desc:"Wedspot adalah aplikasi yang membantu pengguna untuk mendapatkan perencana pernikahan dan WO yang terpercaya sesuai dengan kebutuhan dan budget dari pengguna.",
    detail_description:`
- user akan langsung di suguhi dengan tampilan halaman 
  utama yang berisi dengan paket atau jasa dari beberapa
  vendor WO atau Venue sehingga user dapat memilih dan 
  menentukan paket sesuai dengan tema pernikahan yang 
  di inginkan

- user juga dapat melihat lebih banyak lagi paket di
  halaman berikutnya yaitu https://wedspot.vercel.app/package 
  sehingga dapat membantu user untuk memilih sesuai keinginan 
  sesuai dengan ketentuan mereka berdasarkan paket, budget,
  lokasi, dan total tamu undangan

- ketika user memilih salah satu paket maka user akan di 
  arahkan ke halaman https://wedspot.vercel.app/vendor/6612bd8d8c8140912cdf439f
  halaman ini menyuguhkan atau menampilkan detail data mengenai
  vendor dan paket apa saja yang di miliki vendor tersebut,
  user dapat melihat paket yang berisi harga, lokasi, 
  rating paket dan jumlah pax atau undangan sesuai dengan 
  nama paket tersebut.

- ketika user memilih salah satu paket yang di miliki oleh
  vendor tersebut maka user akan di arahkan lagi ke halaman
  https://wedspot.vercel.app/package/661392be94f3b21e8dff62d9
  user akan di suguhkan detail dari paket yang di pilih 
  berisi foto atau gambar review paket serta pelayanan
  apa saja yang di dapatkan jika memilih paket tersebut.

- jika user tertarik dengan detail paket yang di pilih, 
  user dapat mengajukan permintaan quotation dengan menekan
  tombol ask for quotation dan akan menampilkan form berisi
  nama pengantin pria dan wanita, tempat tinggal, memilih
  lokasi pernikahan, memilih tanggal pernikahan yang akan di s
  selenggarakan, budget atau anggaran yang sesuai dengan paket, 
  dan berapa banyak jumlah tamu undangan yang ingin di undang, 
  di harapkan user login terlebih dahulu jika ingin mengajukan request 
  quotation karena jika user belum login dan menekan tombol 
  request quotation user akan di arahkan ke halaman 
  login dan register terlebih dahulu.

- setelah user mengisi semua data dengan lengkap dan sesuai
  dengan keinginan user, user dapat mengirim request ke vendor
  lalu data akan di terima oleh vendor lalu user akan menunggu
  response balasan dari vendor untuk proses selanjutnya.

- user dapat melihat data request quotation di halaman profile
  https://wedspot.vercel.app/profile dan user akan
  mendapatkan notifikasi yang berisi request sudah 
  dikirim dan request di response oleh vendor.

- di halaman profile user akan melihat data pribadi,
  notifikasi request quotation dan response vendor, dan data 
  quotation yang di kirim ke vendor dan data inbox quotation
  yang berisi quotation balasan dari vendor.
  note: (halaman profile dapat di akses jika user sudah login)`,
    tools:[
        {
            item:`${react}`
            // item:`/images/reactjs.png`
        },
        {
            item:`${bootstrap}`
            // item:`/images/reactbootstrap.png`
        },
        {
            item:`${axios}`,
            // item:`/images/axios.jpg`
        },
        {
            item:`${imagegalery}`
            // item:`/images/reactimagegalery.png`
        },
        {
            item:`${toastify}`
            // item:`/images/reacttoastify.png`
        },
        {
            item:`${reactrouter}`
            // item:`/images/reactrouter.png`
        },
        {
            item:`${sass}`
            // item:`/images/sass.png`
        },
        {
            item:`${slick}`
            // item:`/images/slick.png`
        },
        {
            item:`${css}`
            // item:`/images/css.png`
        },
        {
            item:`${vercel}`
            // item:`/images/vercel.png`
        },
        {
            item:`${materialui}`
            // item:`/images/materialui.png`
        },
        {
            item:`${git}`
            // item:`/images/git.png`
        },
        {
            item:`${npm}`
            // item:`/images/npm.png`
        },
        {
            item:`${reacticons}`
            // item:`/images/reacticons.png`
        },
        {
            item:`${redux}`
            // item:`/images/redux.png`
        },
        {
            item:`${moment}`
            // item:`/images/momentjs.png`
        },
    ],
    link:"https://wedspot.vercel.app/"
    },
    {
    id:"2",
    img:`${vendor}`,
    // img:`/images/wedspotvendor.png`,
    title:"Wedspot Vendor",
    type:"website",
    desc:"wedspot vendor adalah aplikasi yang dapat membantu pengguna untuk lebih mudah memasarkan jasa wo dan perencanaan pernikahan ( wedding planner ) atau venue dengan jaringan yang lebih luas.",
    detail_description:`
- di vendor website wedspot user akan langsung di arahkan
  ke halaman utama yaitu login dan register bagi user yang
  belum terdaftar di sarankan untuk register terlebih dahulu
  dan bagi user yang sudah terdaftar bisa langsung mengisi
  form login untuk masuk ke halaman berikutnya.

- setelah user masuk atau sudah login user akan di arahkan
  ke halaman My Store yang mana user di minta untuk melengkapi
  data informasi mengenai nama toko dan jenis vendor WO atau
  venue, user wajib mengisi Store Header, Store Avatar, Store_name
  Contact number, Email, Website, dst.
  
- setelah user selesai melengkapi semua data, user dapat
  mengakses ke halaman membuat paket di bagaian halaman, mem
  buat paket user dapat mengupload gambar paket yang sesuai untuk
  di pasarkan, menentukan nominal harga paket, menentukan jumlah
  maksimal dan minilmal tamu undangan, menentukan lokasi,
  serta memberikan deskripsi mengenai detail pelayanan 
  berdasarkan nama paketnya.
  note: (user dapat mengakses halaman paket jika user sudah
	melengkapi semua data diri nama toko atau nama vendor)

- setelah semua data sudah terisi baik data diri vendor dan
  data detail paket yang sudah di buat maka semua data di simpan
  dan akan tampil di web wedspot client sehingga datanya dapat
  di lihat oleh client atau customer yang akan memesan paket
  yang sudah di buat oleh vendor sebelumnya.

- akan muncul notifikasi ketika terdapat pesanan dari client
  atau customer dan data pesanan atau request akan tersimpan 
  di halaman quotations.

- di halaman quotation, vendor akan merespon dengan mengupload
  file pdf yang berisi tentang detail quotation yang akan di
  kirim kembali ke client atau customer.

- halaman paket dan halaman my store dapat di edit sesuai kebutuhan

    `,
    tools:[        {
        item:`${react}`
        // item:`/images/reactjs.png`
    },
    {
        item:`${reacticons}`
        // item:`/images/reacticons.png`
    },
    {
        item:`${axios}`
        // item:`/images/axios.jpg`
    },
    {
        item:`${imagegalery}`
        // item:`/images/reactimagegalery.png`
    },
    {
        item:`${toastify}`
        // item:`/images/reacttoastify.png`
    },
    {
        item:`${reactrouter}`
        // item:`/images/reactrouter.png`
    },
    {
        item:`${sass}`
        // item:`/images/sass.png`
    },
    {
        item:`${slick}`
        // item:`/images/slick.png`
    },
    {
        // item:`/images/css.png`
        item:`${css}`
    },
    {
        item:`${vercel}`
        // item:`/images/vercel.png`
    },
    {
        item:`${materialui}`
        // item:`/images/materialui.png`
    },
    {
        item:`${npm}`
        // item:`/images/npm.png`
    },
    {
        item:`${git}`
        // item:`/images/git.png`
    },
    {
        item:`${redux}`
        // item:`/images/redux.png`
    },
    {
        item:`${moment}`
        // item:`/images/momentjs.png`
    },

],
    link:"https://wedspot-vendor.vercel.app/"
    },
]
