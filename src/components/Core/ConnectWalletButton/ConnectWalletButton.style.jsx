import styled from "styled-components";

const ConnectWalletButtonStyleWrapper = styled.div`


/*-- wallet connect modal css start --*/
.open {
  background-color: #171E17;
  backdrop-filter: blur(4px);
}
/*-- wallet connect modal css end --*/


  .connect-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 0;
    background: #AA73B6;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    img{
      max-width: 17px;
    }
  }

  .connected-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #AA73B6;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    gap: 0px;
    padding: 0;

    img {
      filter: brightness(0) invert(1);
      max-width: 17px;
    }
  }
  
  @media only screen and (max-width: 575px) {
    .connect-btn{
      height: 45px;
      width: 160px;
    }
    .connected-btn{
      width: 140px;
      height: 45px;
    }
  }
`;

export default ConnectWalletButtonStyleWrapper;
