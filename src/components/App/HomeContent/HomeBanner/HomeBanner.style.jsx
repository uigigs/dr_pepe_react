import styled from "styled-components";
import bannerBg from '../../../../assets/images/bg/home-banner-bg.png'
import texture from '../../../../assets/images/bg/texture.png'


const HomeBannerStyle = styled.div`
    background: url(${bannerBg});
    background-size: cover 75%;
    background-position: top center;
    background-repeat: no-repeat;
    position: relative;
    .banner-texture{
        background: url(${texture});
        background-size: 100% 75%;
        background-position: top center;
        background-repeat: no-repeat;
        position: relative;
        .overlay{
            background: linear-gradient(to bottom, rgba(30, 28, 39, 0) 25%, #1E1C27 75%);
            padding-top: 250px;
            padding-bottom: 20px;
        }
    } 
    
    .banner-content{
        text-align: center;
        max-width: 700px;
        margin: auto;
        color: #FFFFFF;
        position: relative;
        z-index: 11;
        h1{
            line-height: 114.28%;
            font-size: 70px;
            color: #FFFFFF;
            -webkit-text-stroke: 1px #AA73B6;
            text-shadow: 0 5px 0 #AA73B6;
            font-weight: 800;
            text-transform: uppercase;
            
        }
        p{
            font-size: 24px;
            color: #FFFFFF;
            margin-top: 20px;
            margin-bottom: 40px;
            font-weight: 500;
            line-height: 200%;
        }
    }
    .banner-progress{
        margin-bottom: 50px;
    }
    .progress-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 5px;
        h6{
            font-size: 24px;
            color: #FFFFFF;
            font-weight: 500; 
            &.left{
               text-align: left;
            }
            &.right{
               text-align: right;
            }
            span{
                color: #AA73B6;   
            }
        }
    }
    .progress-bar{
        width: 100%;
        height: 20px;
        background: #473C70;
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid rgba(170, 115, 182, 0.50);
        padding: 8px;
        height: 35px;
        border-radius: 50px;
        .progress-fill{
            background: #8DF6FF;
            height: 100%;
            border-radius: 50px;
        }
    } 
    
    .banner-timer{
        h5{
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        h2{
            font-size: 40px;
            margin-bottom: 40px;
            font-weight: 700;
            strong{
                color: rgba(255, 255, 255, 0.2);
                margin: 0px 15px 0px 8px;
            }
            span{
                font-size: 24px;
            }
        }
    }
    .banner-btn{
           width: 200px;
           height: 60px;
           margin: auto;
           font-size: 18px;
           font-weight: 600;
              
    }
    
    @media only screen and (max-width: 1440px) {
        .banner-texture{
            .overlay{
                padding-top: 180px;
                padding-bottom: 20px;
            }
        } 
        .banner-content {
            p{
                margin-bottom: 20px;
            }
        }
        .banner-progress{
            margin-bottom: 30px;
        }
        .banner-timer {
            h2{
                margin-bottom: 30px;
            }
        }
    }
    
     @media only screen and (max-width: 1201px) {
        .banner-content {
            h1{
                font-size: 60px;
                max-width: 600px;
                margin: auto;
            }
            p{
                font-size: 20px;
            }
        }
        .progress-item {
            h6{
                font-size: 20px;
            }
        }
        .progress-bar{
            padding: 6px 8px;
            height: 30px;
        }
    }
     @media only screen and (max-width: 767px) {
         .banner-texture {
            .overlay{
                padding-top: 130px;
            }
         }
        .banner-content {
            h1{
                font-size: 50px;
                max-width: 500px;
                margin: auto;
            }
            p{
                font-size: 17px;
            }
        }
        .progress-item {
            h6{
                font-size: 17px;
            }
        }
        .banner-timer {
            h5{
                font-size: 16px;
            }
            h2{
                font-size: 32px;
            }
        }
        
        .banner-btn{
            height: 50px;
            width: 160px;
            
        }
    }
    
    @media only screen and (max-width: 575px) {
         .banner-texture {
            .overlay{
                padding-top: 120px;
            }
         }
        .banner-content {
            max-width: 350px;
            h1{
                font-size: 32px;
                max-width: 500px;
                margin: auto;
            }
            p{
                font-size: 14px;
                line-height: 170%;
            }
        }
        .progress-item {
            h6{
                font-size: 14px;
            }
        }
        .banner-timer {
            h5{
                font-size: 14px;
            }
            h2{
                font-size: 24px;
                strong{
                    margin: 0px 8px 0px 4px;
                    text-align: center;
                }
            }
        }
        .progress-bar {
            padding: 4px;
            height: 26px;
        }
    }
    
`;
export default HomeBannerStyle;
