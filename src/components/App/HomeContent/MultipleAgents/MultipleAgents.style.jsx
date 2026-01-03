import styled from "styled-components";


const MultipleAgentsStyle = styled.div`
    .multiple-agents-bg{
        background: #15111F;
        border-radius: 20px;
        padding: 110px 20px 0px 20px;
        .section-title{
            max-width: 520px;
            margin: auto;
        }
    }
    .multiple-agent-content{
        max-width: 800px;
        margin: auto;
        text-align: center;
        p{
            margin-top: 40px;
            position: relative;
            z-index: 1;
        }
        h6{
            font-style: italic;
            font-size: 17px;
            font-weight: 600;
            position: relative;
            z-index: 1;
        }
    }
    .multiple-agent-img{
        margin-top: -30%;
        position: relative;
        z-index: 0;
    }
    .join-btn{
        margin: auto;
        width: 200px;
        height: 60px;
        margin-top: 100px;
        position: relative;
            z-index: 1;
    }
    @media only screen and (max-width: 1200px) {
        .multiple-agents-bg{
            padding-top: 90px;
        }
        .multiple-agent-content {
            p{
                margin-top: 16px;
            }
            h6{
                font-size: 16px;
            }
        }
        .join-btn{
            margin-top: 60px;
        }
    }
    @media only screen and (max-width: 991px) {
        .multiple-agents-bg{
            padding-top: 70px;
        }
        .join-btn{
            margin-top: 40px;
        }
        
    }
    @media only screen and (max-width: 767px) {
        .multiple-agents-bg{
            padding-top: 50px;
        }
        .multiple-agent-content {
            h6{
                font-size: 14px;
            }
        }
        .join-btn{
            margin-top: 30px;
            height: 50px;
            width: 170px;
        }
    }
    
`;
export default MultipleAgentsStyle;
