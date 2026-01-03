import styled from "styled-components";


const BuyDrPepeStyle = styled.div`
    margin-top: 70px;
    margin-bottom: 120px;
    background: rgba(255, 255, 255, 0.04);
    padding: 120px 0px;
    .section-title{
        margin-bottom: 40px;
    }
    .buy-drpepe-left{
        padding-right: 20px;
        h6{
            font-size: 17px;
            margin-bottom: 16px;
        }
        ul{
                list-style: none;
                padding: 0;
                margin: 0;
                li{
                    position: relative;
                    background: #473C70;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 12px;
                    padding: 20px 20px 16px 20px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 10px;
                    line-height: 150%;
                    img{
                        margin-top: 3px;
                    }
                    
                }
            }
        
    }
    .buy-btn{
            height: 60px;
            width: 200px;
        }
    .buy-drpepe-right{
        padding-left: 20px;
        h6{
            margin-bottom: 20px;
            max-width: 500px;
            line-height: 150%;
        }
        ul{
                list-style: none;
                padding: 0;
                margin: 0;
                li{
                    position: relative;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 35px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 10px;
                    line-height: 150%;
                    img{
                        margin-top: 3px;
                    }
                    
                }
            }
    }
    
    @media only screen and (max-width: 1200px) {
        margin-bottom: 100px;
        padding: 100px 0px;
        .section-title{
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width: 991px) {
        margin-top: 60px;
        margin-bottom: 90px;
        padding: 80px 0px;
        .buy-drpepe-right{
            margin: auto;
            max-width: 100%;
            margin-top: 40px;
            padding-left: 0;
        }
        
    }
    @media only screen and (max-width: 767px) {
        margin-top: 50px;
        margin-bottom: 70px;
        padding: 60px 0px;
        .section-title{
            margin-bottom: 20px;
        }
        .buy-drpepe-left{
            .buy-btn{
                height: 50px;
                width: 160px;
            }
        }
        
    }
    
`;
export default BuyDrPepeStyle;
