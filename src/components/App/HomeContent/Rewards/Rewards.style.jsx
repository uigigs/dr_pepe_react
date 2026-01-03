import styled from "styled-components";


const RewardsStyle = styled.div`
    background: rgba(170, 115, 182, 0.08);
    padding: 120px 0px 86px 0px;
    
    .rewards-img{
        max-width: 575px;
        width: 100%;
        margin-right: auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .blur-shape{
            position: absolute;
            z-index: 0;
        }
        img{
            width: 100%;
            position: relative;
            z-index: 1;
        }
    }
    .rewards-right{
        padding-left: 20px;
        .section-title{
            margin-right: 30px;
        }
        h6{
            font-size: 18px;
            line-height: 130%;
            margin-bottom: 30px;
            
        }
        ul{
            list-style: none;
            padding: 0;
            margin: 0px 0px 30px 0px;
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
            margin-bottom: 15px;
            span{
                color: #8DF6FF;
            }
        } 
    }
    .rewards-btn{
        height: 60px;
        width: 200px;
        margin-top: 40px;
    }
    @media only screen and (max-width: 1200px) {
        padding: 100px 0px 70px 0px;
    }
    @media only screen and (max-width: 991px) {
        padding: 80px 0px 20px 0px;
        .rewards-img {
            img{
                max-width: 400px;
                margin: auto;
                margin-top: 40px;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        padding: 60px 0px 20px 0px;
        .rewards-btn{
            height: 50px;
            width: 160px;
        }
    }
    
`;
export default RewardsStyle;
