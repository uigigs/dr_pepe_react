import React, {
    useRef,
    forwardRef,
    useImperativeHandle,
    useState
} from "react";
import { Offcanvas } from "bootstrap";
import CopyIcon from '../../../../assets/images/icon/copy.png'
import CheckIcon from '../../../../assets/images/icon/check.png'
import MenuClose from '../../../../assets/images/icon/cross.png'
import depositIcon from '../../../../assets/images/icon/deposit.png'
import withdrawIcon from '../../../../assets/images/icon/withdraw.png'
import ReloadIcon from '../../../../assets/images/icon/reload.png'
import plusIcon from '../../../../assets/images/icon/plus.png'
import minusIcon from '../../../../assets/images/icon/minus.png'
import greenShape1 from '../../../../assets/images/bg/shape2.png'
import greenShape2 from '../../../../assets/images/bg/shape4.png'
import disconnectBtn from '../../../../assets/images/icon/disconnect.png'
import DipositDrawerStyle from "./DipositDrawer.style";

const FULL_ADDRESS = "9F3kA8JxP9LmQwE7R2ZpQ2"; // full wallet address

const formatAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-3)}`;
};

const DipositDrawer = forwardRef((props, ref) => {
    const drawerRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const openDrawer = () => {
        const drawer = new Offcanvas(drawerRef.current);
        drawer.show();
    };

    const closeDrawer = () => {
        const drawer = Offcanvas.getInstance(drawerRef.current);
        drawer.hide();
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(FULL_ADDRESS);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    useImperativeHandle(ref, () => ({
        openDrawer
    }));

    const [isConnectedOpen, setIsConnectedOpen] = useState(false);

    return (
        <DipositDrawerStyle>
            <div
                ref={drawerRef}
                className="offcanvas offcanvas-end diposit-drawer-bg"
                tabIndex="-1"
            >
                <div className="diposit-drawer-inner">
                    <div className='drawer-bg-graph' />
                    <div className='diposit-drawer-graph' />
                    <img src={greenShape1} alt="bg" className='diposit-drawer-shape diposit-drawer-shape1' />
                    <img src={greenShape2} alt="bg" className='diposit-drawer-shape diposit-drawer-shape2' />

                    <div className="diposit-drawer-close-btn">
                        <button className="secondary-btn lg" onClick={closeDrawer}>
                            <img src={MenuClose} alt="icon" />
                            <span className='btn-shape btn-shape1'></span>
                            <span className='btn-shape btn-shape2'></span>
                            <span className='btn-shape btn-shape3'></span>
                            <span className='btn-shape btn-shape4'></span>
                        </button>
                    </div>

                    <div className="offcanvas-body diposit-drawer-body">
                        <div className="terminal-wallet drawer-content">
                            <h2 className="dwerer-title">Terminal Wallet</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="wallet-values">
                                        <h6>Address</h6>
                                        <h3>
                                            {formatAddress(FULL_ADDRESS)} {''}
                                            <a href="#"><img
                                                src={CopyIcon}
                                                alt="icon"
                                                className="copy"
                                                onClick={handleCopy}
                                                style={{ cursor: 'pointer' }}
                                            /></a>
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="wallet-values">
                                        <h6>Balance</h6>
                                        <h3>0.56922 SOL</h3>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="wallet-values">
                                        <h6>Available</h6>
                                        <h3>0.32000 SOL</h3>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="wallet-values">
                                        <h6>In Use</h6>
                                        <h3>0.24922 SOL</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="actions drawer-content">
                            <h2 className="dwerer-title">Actions</h2>
                            <form action="">
                                <label htmlFor="">Deposit SOL</label>
                                <div className="deposit">
                                    <input type="text" placeholder="0.00" />
                                    <button className="primary-btn lg hover-btn">
                                        <span className='btn-shape btn-shape1'></span><span className='btn-shape btn-shape2'></span>
                                        <span className='btn-shape btn-shape3'></span><span className='btn-shape btn-shape4'></span>
                                        <span className="btn-text">
                                            <span>Deposit <img src={depositIcon} alt="icon" /></span>
                                            <span>Deposit <img src={depositIcon} alt="icon" /></span>
                                        </span>
                                    </button>
                                </div>

                                <label htmlFor="">Withdraw SOL</label>
                                <div className="withdrew">
                                    <input type="text" placeholder="0.00" />
                                    <button className="primary-btn lg hover-btn">
                                        <span className='btn-shape btn-shape1'><span className="secont-shape"></span></span><span className='btn-shape btn-shape2'></span>
                                        <span className='btn-shape btn-shape3'></span><span className='btn-shape btn-shape4'></span>
                                        <span className="btn-text">
                                            <span>Withdraw <img src={withdrawIcon} alt="icon" /></span>
                                            <span>Withdraw <img src={withdrawIcon} alt="icon" /></span>
                                        </span>
                                        
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="connected-sol drawer-content">
                            <div
                                className="connected-sol-top"
                                onClick={() => setIsConnectedOpen(prev => !prev)}
                                style={{ cursor: 'pointer' }}
                            >
                                <h2 className="dwerer-title mb-0">Connected SOL Wallet</h2>
                                <span>
                                    <img
                                        src={isConnectedOpen ? minusIcon : plusIcon}
                                        alt="icon"
                                    />
                                </span>
                            </div>

                            <div
                                className={`connected-sol-content ${isConnectedOpen ? 'open' : ''}`}
                                style={{
                                    maxHeight: isConnectedOpen ? '300px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.35s ease',
                                    marginTop: isConnectedOpen ? '12px' : '0'
                                }}
                            >
                                <div className="terminal-wallet drawer-content no-border p-0">
                                    <h2 className="dwerer-title">Terminal Wallet</h2>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="wallet-values">
                                                <h6>Address</h6>
                                                <h3>
                                                    {formatAddress(FULL_ADDRESS)} {''}
                                                    <a href="#"><img
                                                        src={CopyIcon}
                                                        alt="icon"
                                                        className="copy"
                                                        onClick={handleCopy}
                                                        style={{ cursor: 'pointer' }}
                                                    /></a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="wallet-values">
                                                <h6>Balance</h6>
                                                <h3>0.56922 SOL</h3>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <button className="disconnect-btn">
                                                <span><img src={disconnectBtn} alt="icon" /></span>Disconnect
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="state drawer-content">
                            <h2 className="dwerer-title">State</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left">
                                        <h6>Last Action</h6>
                                        <h4>Completed</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="right">
                                        <p className="uppercase">Refresh Balances</p>
                                        <button><img src={ReloadIcon} alt="icon" /></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </DipositDrawerStyle>
    );
});

export default DipositDrawer;
