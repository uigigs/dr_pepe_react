import styled from "styled-components";


const LevelsStyle = styled.div`
    padding-top: 120px;
    padding-bottom: 80px;
    .pb-30px{
        padding-bottom: 30px;
    }
    .section-title{
        max-width: 574px;
        margin: auto;
        margin-bottom: 50px;
    }
    .label-card{
        text-align: center;
        padding: 30px;
        background: #1A1323;
        border-radius: 15px;
        overflow: hidden;
        min-height: 100%;
        h4{
            font-size: 24px;
            color: #FFF;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: -15px;
        }
        p{
            font-weight: 500;
            line-height: 170%;
        }
    }
    .label-bottom{
        text-align: center;
        padding-top: 10px;
        max-width: 691px;
        margin: auto;
        p{
            font-weight: 600;
            font-style: italic;
        }
        
    }
    @media only screen and (max-width: 1200px) {
        padding-top: 100px;
        padding-bottom: 60px;
        .section-title{
            margin-bottom: 40px;
        }
    }
    @media only screen and (max-width: 991px) {
        padding-top: 80px;
        padding-bottom: 40px;
        .section-title{
            margin-bottom: 30px;
        }
        .label-bottom{
            padding-top: 0;
        }
    }
    @media only screen and (max-width: 767px) {
        padding-top: 60px;
        .section-title{
            margin-bottom: 25px;
        }
        .label-card{
            p{
                max-width: 300px;
                margin: auto;
            }
        }
    }
    
`;
export default LevelsStyle;
