import styled from "styled-components";


const DiscoverStyle = styled.div`
    padding-bottom: 120px;
    .discover-images{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            z-index: 0;
            background: #79559b;
            filter: blur(300px);
            width: 60%;
            height: 240px;
            left: 20%;
            top: 20%;
        }
    }
    .discover-img{
        position: relative;
        z-index: 1;
        max-width: 100%;
        width: 100%;
        img{
            width: 100%;
        }
    }
    
    .discover-content{
        margin-top: 56px;
    }
    .discover-left{
        padding-right: 20px;
        .section-title{
            max-width: 450px;
            margin-bottom: 50px;
        }
        h6{
            font-size: 18px;
            margin-bottom: 40px;
            line-height: 160%;
        }
        
    }
    .join-btn{
            height: 60px;
            width: 200px;
        }
    .discover-right{
        padding-left: 10px;
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                position: relative;
                border-radius: 10px;
                overflow: hidden;
                margin-bottom: 18px;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 10px;
                line-height: 160%;
                img{
                    margin-top: 3px;
                }
                
            }
        }
        p{
            margin-top: 20px;
        }
    }
    
    @media only screen and (max-width: 1200px) {
        padding-bottom: 100px;
    }
    @media only screen and (max-width: 991px) {
        padding-bottom: 90px;
        .discover-left {
            .section-title{
                margin-bottom: 20px;
            }
            h6{
                font-size: 16px;
                margin-bottom: 30px;
            }    
        }
        .join-btn{
            margin-top: -70px;
        }
    }
    @media only screen and (max-width: 767px) {
        padding-bottom: 70px;
        .discover-left {
            .section-title{
                margin-bottom: 20px;
            }
            h6{
                font-size: 15px;
                margin-bottom: 20px;
            }    
        }
        .join-btn{
            margin-top: 20px;
            height: 50px;
            width: 170px;
        }
    }
    @media only screen and (max-width: 575px) {
        .discover-img{
            max-width: 300px;
            margin: auto;
            margin-bottom: 30px;
        }
        .discover-content{
            margin-top: 20px;
        }
    }
    
    
`;
export default DiscoverStyle;
