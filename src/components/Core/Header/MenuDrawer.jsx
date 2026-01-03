import React, { useRef } from "react";
import { Offcanvas } from "bootstrap";
import menuIcon from '../../../assets/images/icon/menu.png'
import MenuClose from '../../../assets/images/icon/cross.png'
import logoImg from "../../../assets/images/logo/logo.png";
const MenuDrawer = () => {
    const drawerRef = useRef(null);

    const openDrawer = () => {
        const drawer = new Offcanvas(drawerRef.current);
        drawer.show();
    };

    const closeDrawer = () => {
        const drawer = Offcanvas.getInstance(drawerRef.current);
        drawer.hide();
    };

    return (
        <>
            <button className='menu-btn' onClick={openDrawer}><img src={menuIcon} alt="icon" /></button>
            <div
                ref={drawerRef}
                className="offcanvas offcanvas-end menu-bg"
                tabIndex="-1"
            >
                <div className="menu-inner">
                    <div className='menu-bg-graph' />
                    <div className="menu-close-btn">
                        <button className="secondary-btn lg" onClick={closeDrawer}>
                            <img src={MenuClose} alt="icon" />
                            <span className='btn-shape btn-shape1'></span><span className='btn-shape btn-shape2'></span>
                            <span className='btn-shape btn-shape3'></span><span className='btn-shape btn-shape4'></span>
                        </button>
                    </div>

                    <div className="offcanvas-body drawer-body">
                        <div className="">
                            <a href="/" className="logo mobile-menu-logo">
                                <img src={logoImg} alt="logo" />
                            </a>
                            <ul className="mobile-menu-list">
                                <li><a href="#">Presale</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Tokenomics</a></li>
                                <li><a href="#">Whitepaper</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuDrawer;
