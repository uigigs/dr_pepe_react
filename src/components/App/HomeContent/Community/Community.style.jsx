import styled from "styled-components";


const CommunityStyle = styled.div`
    padding-bottom: 120px;
    .pb-30px{
        padding-bottom: 30px;
    }
    .community-card{
        padding: 40px 40px 35px 40px;
        min-height: 100%;
        background: linear-gradient(to bottom, rgba(170, 115, 182, 0.2) 10%, rgba(170, 115, 182, 0) 100%);
        border-radius: 20px;
        overflow: hidden;
        h2{
            line-height: 125%;
            font-size: 40px;
            color: #FFFFFF;
            text-shadow: 0 3px 0 #AA73B6;
            font-weight: 800;
            text-transform: uppercase;
            max-width: 450px;
            margin-bottom: 40px;
            
        }
        p{
            margin-bottom: 20px;
        }
        ul{
            padding: 0;
            margin: 0;
            list-style: none;
            margin-bottom: 20px;
            li{
                position: relative;
                padding: 20px 20px 15px 20px;
                background: #473C70;
                margin-bottom: 12px;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 10px;
                line-height: 180%;
                border-radius: 10px;
                img{
                    margin-top: 5px;
                }
            }
        }
        
        .community-img{
            margin: auto;
            max-width: 330px;
            width: 100%;
            &-1{
                margin-top: 0px;
            }
            &-2{
                margin-top: 60px;
            }
        }
    }
    .community-btn{
        width: 240px;
        height: 60px;
        margin: auto;
    }
    @media only screen and (max-width: 1200px) {
        padding-bottom: 100px;
    }
    @media only screen and (max-width: 991px) {
        padding-bottom: 80px;
        .community-card {
            .community-img-2{
                margin-top: 20px;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        padding-bottom: 60px;
        .community-card {
            h2{
                font-size: 32px;
                margin-bottom: 25px;
            }
        }
        .community-btn{
            width: 200px;
            height: 50px;
        }
    }
    @media only screen and (max-width: 480px) {
        .community-card{
            padding: 30px 20px;
        }
    }
    
`;
export default CommunityStyle;
