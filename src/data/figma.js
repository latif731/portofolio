// import wedspot from "../../src/images/wedspotfigmadesign.png"
import wedspot from "../../src/assets/images/wedspotfigmadesign.png"
// import musicon from "../../src/images/musicon.png"
import musicon from "../../src/assets/images/musicon.png"
// import vendor from "../../src/images/figmavendor.png"
import vendor from "../../src/assets/images/figmavendor.png"
// import figma1 from  "../../src/images/wedspotfigma.png"
import figma1 from  "../../src/assets/images/wedspotfigma.png"
// import figma2 from "../../src/images/musiconfigma.png"
import figma2 from "../../src/assets/images/musiconfigma.png"
import { useTranslation } from "react-i18next"

export const figmaDatas =  () => {
const {t} = useTranslation()
    return [
        {
            id:"1",
            // titleHeader:"Wedspot",
            titleHeader:t("portofolio.title5"),
            imageUrl:`${figma1}`,
            // imageUrl:`/images/wedspotfigma.png`,
            // desc:"lorem ipsum",
            imageData:[
                {
                    id:"1",
                    // title:"Wedspot Clinet",
                    title:t("portofolio.title2"),
                    img:`${wedspot}`
                    // img:`/images/wedspotfigmadesign.png`
                },
                {
                    id:"2",
                    title:t("portofolio.title3"),
                    img:`${vendor}`
                    // img:`/images/figmavendor.png`
                },
        ]
        },
        {
            id:"2",
            // titleHeader:"Musicon",
            titleHeader:t("portofolio.title6"),
            imageUrl:`${figma2}`,
            // imageUrl:`/images/musiconfigma.png`,
            // desc:"lorem ipsum",
            imageData:[
                {
                    id:"1",
                    title:t("portofolio.title7"),
                    img:`${musicon}`
                    // img:`/images/musicon.png`
                },
        ]
        }
    
    ]
}
