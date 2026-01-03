import styled from "styled-components";
import footerBg from '../../../../assets/images/bg/footer-bg.png'

const FooterStyle = styled.div`
    background: url(${footerBg});
    background-position: top center;
    background-size: cover 70%;
    background-repeat: no-repeat;
    padding-top: 70px;
    margin-top: -50px;
    position: relative;
    z-index: 0;
    .section-title{
        margin-bottom: 30px;
    }
    .footer-left{
        padding-top: 70px;
        .buy-btn{
            width: 240px;
            height: 60px;
            margin-top: 35px;
        }
    }
    .footer-img{
        max-width: 450px;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .coin-img{
            margin-left: -48%;
        }
    }
    
    .footer-social{
        margin-top: -90px;
        padding-bottom: 60px;
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            a{
                height: 70px;
                width: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.15);
                border-radius: 10px;
            }
        }
    }
    
    .footer-bottom{
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 35px 0px;
        .footer-bottom-inner{
            display: flex;
            align-items: center;
            justify-content: space-between;
            ul{
                list-style: none;
                padding: 0;
                margin-bottom: 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 25px;
                li{
                    a{
                        color: #FFF;
                        text-decoration: none;
                        
                    }                    
                }
            }
            .back-to-top{
                color: #FFF;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 10px;
            }
        }
    }
    
    @media only screen and (max-width: 1200px) {
        padding-top: 60px;
        .footer-bottom{
            padding: 25px 0px;
        }
    }
    @media only screen and (max-width: 992px) {
        padding-top: 50px;
        .footer-left{
            text-align: center;
            max-width: 575px;
            margin: auto;
            .section-title{
                margin-bottom: 20px;
            }
            .buy-btn{
                width: 180px;
                height: 50px;
                margin: auto;
                margin-top: 25px;
            }
        }
        .footer-img{
            margin: auto;
            .coin-img{
                max-width: 200px;
            }
        }
        .footer-social {
            margin: auto;
            padding-bottom: 40px;
            ul{
                justify-content: center;
                gap: 20px;
                li{
                    a{
                        height: 60px;
                        width: 60px;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 767px) {
        padding-top: 30px;
        .footer-bottom{
            padding: 15px 0px;
        }
        .footer-bottom-inner{
            flex-direction: column;
            gap: 10px;
        }
    }
    @media only screen and (max-width: 424px) {
        .footer-bottom {
            .footer-bottom-inner{
                ul{
                    gap: 13px;
                }
            }
        }
        
    }
    
`;
export default FooterStyle;
