import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ProfileCaraousel = ({ t, i18n }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <p
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {/* Saya adalah pribadi yang disiplin, bertanggung jawab, dan memiliki semangat kerja tinggi. 
                Terbiasa bekerja dalam tim maupun secara mandiri serta selalu berusaha memberikan hasil terbaik dalam setiap tugas 
                yang diberikan.
                Saya orang yang pekerja keras, teliti, dan mampu bekerja di bawah tekanan. Saya selalu berusaha menjaga kualitas 
                pekerjaan dan menyelesaikan tugas tepat waktu dengan hasil yang maksimal.
                Saya memiliki kemampuan komunikasi yang baik dan mudah beradaptasi dengan lingkungan baru. Saya senang bekerja sama 
                dengan orang lain dan selalu berusaha menciptakan suasana kerja yang positif.
                Saya percaya bahwa kerja keras dan kejujuran adalah kunci kesuksesan. Saya selalu berusaha belajar hal baru untuk 
                meningkatkan kemampuan dan memberikan kontribusi terbaik bagi perusahaan. */}
            {t("profile.general")}
          </p>
        </div>
        <div>
          <p
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {/* Saya memiliki keterampilan dalam membangun aplikasi berupa website<br/>
             berdasarkan design UI/UX,
            dengan pengalaman mengikuti Bootcamp coding, 
            membuat saya mengetahui bagaimana proses 
            membuat website yang sesuai
            dengan design UI/UX,  
            saya adalah pribadi yang suka belajar hal baru,
            pekerja keras,
            mampu bekerja dengan tim maupun individu, mengasah keterampilan
            bagi saya
            adalah suatu hal yang penting agar dapat berguna bagi diri saya dan 
            orang lain
            termasuk perusahaan. dengan menunjukkan hasil portofolio saya,
            saya yakin dapat memberikan kontribusi untuk perusahaan dan client. */}

            {t("profile.it")}
          </p>
        </div>
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  /* border: red 1px solid; */
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
  width: 45rem;
  .slick-slide {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 40px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 12px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: white;
    font-size: 24px;
  }
`;

export default ProfileCaraousel;
