import React, { useEffect, useState } from "react";
import HeaderStyle from "./Header.style";
import logoImg from "../../../assets/images/logo/logo.png";
import MenuDrawer from "./MenuDrawer";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderStyle className={sticky ? "sticky" : ""}>
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <a href="/" className="logo">
              <img src={logoImg} alt="logo" />
            </a>
          </div>

          <div className="header-right">
            <div className="header-menu">
              <ul>
                <li><a href="#">Presale</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Tokenomics</a></li>
                <li><a href="#">Whitepaper</a></li>
              </ul>
            </div>

            <ConnectWalletButton />
            <div className="mobile-menu">
              <MenuDrawer />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
