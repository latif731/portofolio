import React from 'react'
import styled from 'styled-components'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

const Profile = () => {
  return (
    <Container id="home">
        <Texts>
            <h4>Halo <span className='green'>Saya</span></h4>
            <h1>Latif Budi Pamungkas</h1>
            {/* <h3>A WEB DEVELOPER</h3> */}
            <p
            style={{
                whiteSpace:"pre-wrap"
            }}
            > 
            Saya memiliki keterampilan dalam membangun aplikasi berupa website<br/>
             berdasarkan design UI/UX,
            dengan pengalaman mengikuti Bootcamp coding, <br/>
            membuat saya mengetahui bagaimana proses 
            membuat website yang sesuai <br/>
            dengan design UI/UX,  
            saya adalah pribadi yang suka belajar hal baru,
            pekerja keras, <br/>
            mampu bekerja dengan tim maupun individu, mengasah keterampilan
            bagi saya <br/>
            adalah suatu hal yang penting agar dapat berguna bagi diri saya dan 
            orang lain <br/>
            termasuk perusahaan. dengan menunjukkan hasil portofolio saya, <br/> 
            saya yakin dapat memberikan kontribusi untuk perusahaan dan client.<br/>
            </p>
            <p
            style={{
                paddingTop:"2rem",
                color: "white",
                fontWeight: "bold"
            }}
            >My Motto :</p>
            <p
            style={{
                fontWeight:"bold",
                // paddingTop:"2rem",
                color: "white"
            }}
            >"I'm not smart, but i'm just a man that know about process and work hard,<br/>
            ever tried, ever failed, no matter, try again, fail again, fail better, Allah <br/> 
            always listening and always beside me, treat everyone kindly and light up the night" 
            </p>       
            <Social>
                <p>Check out my</p>
                <div className='social-icons'>
                    <span><a href='#'><TiSocialInstagram className='ig'/></a></span>
                    <span><a href='#'><TiSocialLinkedin className='linkedin'/></a></span>
                    <span><a href='#'><TiSocialGithub className='github'/></a></span>
                </div>
            </Social>
        </Texts>
        <ProfileContent>
            <img src={"/images/foto.jpg"} alt="" />
        </ProfileContent>
    </Container>
  )
}

export default Profile

const Container = styled.div`
    display: flex;
    padding-top: 8rem;
    /* align-items: center; */
    gap: 2rem;
    z-index:0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto ;
    @media(max-width:840px){
        width: 90%;
        /* padding: 1rem; */
    }
    @media(max-width:640px){
            /* width: 20px; */
            /* display: flex; */
            /* flex-direction: column; */
            /* align-items: center; */
            /* justify-items: center; */
            padding-right: 0;
            padding-left: 30px;
        }
`
const Texts = styled.div`
    flex: 1;
    @media(max-width:700px){
            width: 20px;
        }
    @media(max-width:640px){
            /* width: 20px; */
            display: flex;
            flex-direction: column;
            align-items: center;
            /* justify-items: center; */
        }
    h4{
        padding:1rem 0;
        font-weight: 500;
        color: white;
        .green{
            color: green;
        }
    }
    @media(max-width: 640px){
        h4{
            font-size: 10px;

        }
    }
    h1{
        font-size: 2rem;
        font-family: 'Secular One', sans-serif;
        letter-spacing: 2px;
        color: white
        
    }
    @media(max-width: 640px){
        h1{
            font-size: 10px;
        }
    }
    h3{
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        color: white;
        text-transform: capitalize;
    }
    @media(max-width: 640px){
        h3{
            font-size: 10px;
        }
    }
    p{
        font-weight: 300;
        color:white;
    }
    @media(max-width: 640px){
        p{
            font-size: 10px;
            /* width: 150px; */
            text-align: center;
        }
    }
    
`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            /* display: none; */
            /* width:100px; */
            padding-right: 130px;
        }
    p{
        font-size: 0.9rem;
        @media(max-width:690px){
            width: 20rem;
        }
        @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            display: none;
            /* width:100px; */
        }

    }
    .social-icons{
        display: flex;
        gap: 2rem;
        @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            /* gap: 0; */
            padding-left: 23px;
            /* width:100px; */
        }
        span{
            width: 3rem;
            height: 3rem;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background-color: #01be96;
            position: relative;
            transition: transform 400ms ease;
            &:hover{
                transform: rotate(360deg);
            }
            .ig{
                font-size: 25px;
            }
            .linkedin{
                font-size: 25px;   
            }
            .github{
                font-size: 25px;
            }
        }
        *{
            color: #fff;
            position: absolute;
            top: 25%;
            left: 25%;
            transform: translateY(-50%, -50%);
        }
    }
`
const ProfileContent = styled.div`
    img{
        width: 15rem;
        border-radius: 50%;
        filter: drop-shadow(0px 0px 10px #f04242);
        transition: 400ms;
        /* position:absolute; */
        /* z-index: -2; */
        @media(max-width:700px){
            width: 18rem;
        }
        @media(max-width: 640px){
            display: none;
        }
    }

    :hover{
        transform: translateY(-10px);
    }

`