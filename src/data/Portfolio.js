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
import { useTranslation } from "react-i18next"


export const PortfolioDatas = () => {
    const {t} = useTranslation()
    return [
        {
        id:"1",
        img:`${client}`,
        // img:`/images/wedspotclient.png`,
        title:t("portofolio.title2"),
        type:t("porto menu.web"),
        video:"",
        // desc:"Wedspot adalah aplikasi yang membantu pengguna untuk mendapatkan perencana pernikahan dan WO yang terpercaya sesuai dengan kebutuhan dan budget dari pengguna.",
        desc:t("portofolio.desc1"),
        detail_description: t("portofolio.detail_description1"),
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
        // title:"Wedspot Vendor",
        title:t("portofolio.title3"),
        type:t("porto menu.web"),
        // desc:"wedspot vendor adalah aplikasi yang dapat membantu pengguna untuk lebih mudah memasarkan jasa wo dan perencanaan pernikahan ( wedding planner ) atau venue dengan jaringan yang lebih luas.",
        desc:t("portofolio.desc2"),
    //     detail_description:`
    // - di vendor website wedspot user akan langsung di arahkan
    //   ke halaman utama yaitu login dan register bagi user yang
    //   belum terdaftar di sarankan untuk register terlebih dahulu
    //   dan bagi user yang sudah terdaftar bisa langsung mengisi
    //   form login untuk masuk ke halaman berikutnya.
    
    // - setelah user masuk atau sudah login user akan di arahkan
    //   ke halaman My Store yang mana user di minta untuk melengkapi
    //   data informasi mengenai nama toko dan jenis vendor WO atau
    //   venue, user wajib mengisi Store Header, Store Avatar, Store_name
    //   Contact number, Email, Website, dst.
      
    // - setelah user selesai melengkapi semua data, user dapat
    //   mengakses ke halaman membuat paket di bagaian halaman, mem
    //   buat paket user dapat mengupload gambar paket yang sesuai untuk
    //   di pasarkan, menentukan nominal harga paket, menentukan jumlah
    //   maksimal dan minilmal tamu undangan, menentukan lokasi,
    //   serta memberikan deskripsi mengenai detail pelayanan 
    //   berdasarkan nama paketnya.
    //   note: (user dapat mengakses halaman paket jika user sudah
    //     melengkapi semua data diri nama toko atau nama vendor)
    
    // - setelah semua data sudah terisi baik data diri vendor dan
    //   data detail paket yang sudah di buat maka semua data di simpan
    //   dan akan tampil di web wedspot client sehingga datanya dapat
    //   di lihat oleh client atau customer yang akan memesan paket
    //   yang sudah di buat oleh vendor sebelumnya.
    
    // - akan muncul notifikasi ketika terdapat pesanan dari client
    //   atau customer dan data pesanan atau request akan tersimpan 
    //   di halaman quotations.
    
    // - di halaman quotation, vendor akan merespon dengan mengupload
    //   file pdf yang berisi tentang detail quotation yang akan di
    //   kirim kembali ke client atau customer.
    
    // - halaman paket dan halaman my store dapat di edit sesuai kebutuhan
    
    //     `,
        detail_description:t("portofolio.detail_description2"),
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
} 

