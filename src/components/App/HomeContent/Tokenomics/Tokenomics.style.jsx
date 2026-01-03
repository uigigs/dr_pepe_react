import styled from "styled-components";


const TokenomicsStyle = styled.div`
    padding: 120px 0px;
    .section-title{
        max-width: 520px;
        margin-bottom: 40px;
    }
    
    .tokenomics-left{
        h6{
            font-size: 18px;
            margin-bottom: 25px;
        }
        
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            margin-bottom: 50px;
            li{
                display: flex;
                align-items: end;
                justify-content: space-between;
                gap: 16px;
                padding-left: 50px;
                position: relative;
                font-size: 18px;
                line-height: 140%;
                margin-bottom: 20px;
                .list-icon{
                    position: absolute;
                    left: 0;
                    top: -6px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    height: 40px;
                    width: 40px;
                }
            }
        }
        ol{
            list-style: none;
            padding: 0;
            margin: 0;
            margin-bottom: 50px;
            li{
                position: relative;
                font-size: 18px;
                line-height: 140%;
                margin-bottom: 20px;
            }
        }
    }
    
    
    .tokenomics-right{
        padding-left: 20px;
        p{
            margin-bottom: 0;
        }
        .tokenomics-img{
            max-width: 530px;
            width: 100%;
            margin-left: auto;
            margin-bottom: 50px;
            img{
                width: 100%;
            }
        }
    }
    @media only screen and (max-width: 1200px) {
        padding: 100px 0px;
         .tokenomics-left {
            ul, ol{
                li{
                    font-size: 16px;
                }
            }
        }
    }
    @media only screen and (max-width: 991px) {
        padding: 80px 0px;
        .tokenomics-right {
            padding-left: 0;
            .tokenomics-img{
                margin: auto;
                max-width: 400px;
                margin-bottom: 20px;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        padding: 60px 0px;
        .section-title{
            margin-bottom: 30px;
        }
        .tokenomics-left {
            h6{
                margin-bottom: 15px;
            }
            ol{
                li{
                    font-size: 15px;
                }
            }
            ul{
                li{
                    font-size: 15px;
                    padding-left: 45px;
                }
            }
        }
    }
    
`;
export default TokenomicsStyle;
