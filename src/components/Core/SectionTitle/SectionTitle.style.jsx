import styled from "styled-components";


const SectionTitleStyle = styled.div`
    h2{
        line-height: 120%;
        font-size: 50px;
        color: #FFFFFF;
        text-shadow: 0 3px 0 #AA73B6;
        font-weight: 800;
        text-transform: uppercase;
    }
    &.text-center{
        text-align: center;
    }
    @media only screen and (max-width: 767px) {
        h2{
            font-size: 40px;
        }
    }
    @media only screen and (max-width: 767px) {
        h2{
            font-size: 32px;
        }
    }
    
`;
export default SectionTitleStyle;
