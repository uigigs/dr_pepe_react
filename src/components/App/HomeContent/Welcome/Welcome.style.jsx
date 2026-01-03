import styled from "styled-components";
import welcomeBg from '../../../../assets/images/bg/welcome-bg.png'

const WelcomeStyle = styled.div`
    padding-top: 200px;
    background-image: url(${welcomeBg});
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    margin-top: -90px;
    z-index: 1;
    position: relative;
    .overlay{
        background: linear-gradient(to bottom, rgba(30, 28, 39, 0) 25%, #1E1C27 75%);
        padding-bottom: 50px;
    }
    
    .welcome-right{
        .section-title{
            margin-bottom: 20px;
            max-width: 390px;
        }
        h6{
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #FFF;
            line-height: 177.78%;
        }
        p{
            
        }
    }
    
    
    @media only screen and (max-width: 1200px) {
        padding-top: 180px;
        .overlay{
            padding-bottom: 30px;
        }
    }
    @media only screen and (max-width: 767px) {
        padding-top: 150px;
        .overlay{
            padding-bottom: 0px;
        }
        .welcome-right{
            text-align: center;
            max-width: 500px;
            margin: auto;
            .section-title{
                max-width: 300px;
                margin: auto;
            }
            h6{
                font-size: 16px;
            }
        }
        .welcome-left{
            max-width: 300px;
            margin: auto;
            img{
                width: 100%;
            }
        }
        
    }
    
`;
export default WelcomeStyle;
