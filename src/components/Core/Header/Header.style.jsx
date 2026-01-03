import styled from "styled-components";


const HeaderStyle = styled.div`
    width: 100%;
    z-index: 99999;
    top: 0;
    left: 0;
    position: fixed;
    transition: all 0.3s ease;

      &.sticky {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(6px);
        .header-inner{
            padding: 12px 0px;
        }
      }
    .header-inner{
        padding: 20px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 160px;
            height: 50px;
            img{
                width: 100%;
            }
        }
        .header-right{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 40px;
            .header-menu{
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 32px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    li{
                        a{
                            text-decoration: none;
                            color: #FFF;
                            font-size: 18px;
                            text-align: center;
                            
                        }
                    }
                }
            }
            .menu-btn{
                border: none;
                outline: none;
                background: none;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    max-width: 30px;
                }
            }
            
        }
    }
    
    .mobile-menu{
        display: none;
    }

    .menu-bg{
        background: #15111F;
        z-index: 99999999;
        max-width: 360px;
        height: 100vh;
        .menu-inner{
            position: relative;
            height: 100vh;
        }
        .menu-close-btn{
            position: absolute;
            left: -65px;
            top: 15px;
            button{
                height: 50px;
                width: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                background: rgba(255, 255, 255,0.15);
                backdrop-filter: blur(5px);
                border: none;
                outline: none;
            }
            
            
        }
        .drawer-body{
            position: relative;
            z-index: 2;
            padding: 20px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
            height: 100%;
        }
        .mobile-menu-list{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                a{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    transition: 0.3s;
                    font-size: 18px;
                    color: #FFF;
                    margin-bottom: 20px;
                    text-decoration: none;
                    &:hover{
                        gap: 6px;
                        color: #AA73B6;
                    }
                }
            }
        }
    }
    
    
    @media only screen and (max-width: 991px) {
        .mobile-menu{
            display: block;
        }
        .mobile-menu-list{
            padding-top: 20px !important;
        }
        &.sticky {
            .header-inner{
                padding: 8px 0px;
            }
        }
        .header-inner{
            padding: 8px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo{
                max-width: 127px;
            }
            .header-right{
                gap: 25px;
            }
        }
        
        .header-menu{
            display: none;
        }
    }
    @media only screen and (max-width: 767px) {
        .menu-bg{
            max-width: 300px !important;
            .drawer-body{
                padding: 20px;
            }
        }
        .header-inner .header-right{
            gap: 8px;
        }
    }
    @media only screen and (max-width: 575px) {
        .header-inner{
          .logo{
            max-width: 110px;
          }
        }   
    }
    
`;
export default HeaderStyle;