import styled from "styled-components";


const SpecificationsStyle = styled.div`
    position: relative;
    z-index: 1;
    .section-title{
        margin-bottom: 40px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            margin-bottom : 12px;
            padding: 25px 20px;
            line-height: 130%;
            font-size: 20px;
            font-weight: 500;
            color: #FFF;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 15px;
            border-radius: 10px;
            background: linear-gradient(
              to right,
              rgba(170, 115, 182, 0.1) 0%,
              rgba(170, 115, 182, 0.01) 50%,
              rgba(170, 115, 182, 0.1) 100%
            );
            .text-left{
                min-width: max-content;
            }
            .text-right{
                text-align: right;
            }
        }
    }
    @media only screen and (max-width: 991px) {
        .section-title{
            margin-bottom: 30px;
        }
        ul{
            li{
                font-size: 18px;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        .section-title{
            margin-bottom: 25px;
        }
        ul{
            li{
                font-size: 15px;
                padding: 20px 15px;
            }
        }
    }
    
`;
export default SpecificationsStyle;
