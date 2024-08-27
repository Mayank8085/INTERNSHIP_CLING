import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, dispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkActivePage } from "../../store/activePageSlice";



export const SideMenu = () => {
    const { activePage } = useSelector(state => state.activePage);
    console.log(activePage)
    const [page, setPage] = useState(activePage);
    useEffect(() => {
        setPage(activePage)
    }, [activePage])
    return (
        <div className="main-sidebar main-sidebar-sticky side-menu">
            <div className="sidemenu-logo">
                <a className="main-logo" href="#">
                    <img src={require("../../assets/img/brand/logo-light.png")} className="header-brand-img desktop-logo" alt="logo" />
                    <img src={require("../../assets/img/brand/icon-light.png")} className="header-brand-img icon-logo" alt="logo" />
                    <img src={require("../../assets/img/brand/logo.png")} className="header-brand-img desktop-logo theme-logo" alt="logo" />
                    <img src={require("../../assets/img/brand/icon.png")} className="header-brand-img icon-logo theme-logo" alt="logo" />
                </a>
            </div>
            <div className="main-sidebar-body show">
                <ul className="nav open">
                    <li className="nav-item show">
                        <NavLink className={`nav-link ${page === "dashboard" ? "active" : ""}`} to="/dashboard" ><span className="shape1"></span><span className="shape2"></span><i className="ti-home sidemenu-icon"></i><span className="sidemenu-label">Dashboard</span></NavLink>
                    </li>

                    <li className="nav-item show">
                        <NavLink className={`nav-link ${page === "campaigns" ? "active" : ""}`} to="/campaigns" ><span className="shape1"></span><span className="shape1"></span><i className="fe fe-message-square  sidemenu-icon"></i><span className="sidemenu-label">Campaigns</span></NavLink>
                    </li>

                    <li className="nav-item show" onClick={() => setPage("schedule")}>
                        <NavLink className={`nav-link ${page === "schedule" ? "active" : ""}`} to="/schedule" ><span className="shape1"></span><span className="shape1"></span><i className="ti-calendar sidemenu-icon"></i><span className="sidemenu-label">Schedule</span></NavLink>
                    </li>

                    <li className="nav-item show" onClick={() => setPage("schedule")}>
                        <NavLink className={`nav-link ${page === "schedule" ? "active" : ""}`} to="/schedule" ><span className="shape1"></span><span className="shape1"></span><i className="ti-calendar sidemenu-icon"></i><span className="sidemenu-label">Message</span></NavLink>
                    </li>

                    {/* <li className="nav-item" onClick={()=>setPage("referrals")}>
                    <a className="nav-link with-sub" href="#"><span className="shape1"></span><i className="ti-file sidemenu-icon"></i><span className="sidemenu-label">Referrals</span></a>

                </li> */}
                    <Refferal page={page} />

                    {/* <li className="nav-item" onClick={()=>setPage("wallet")}>
                    <a className="nav-link with-sub" href="#"><span className="shape1"></span><i className="ti-wallet sidemenu-icon"></i><span className="sidemenu-label">Wallet</span></a>
                </li> */}
                    <Wallet page={page} />
                    {/* <li className="nav-item" onClick={()=>setPage("interests")}>
                    <a className="nav-link with-sub" href="#"><span className="shape1"></span><i className="ti-face-smile sidemenu-icon"></i><span className="sidemenu-label">Interests</span></a>

                </li> */}
                    <Offer page={page} />
                    <li className="nav-item" onClick={() => setPage("badges")}>
                        <NavLink className={`nav-link ${page === "badges" ? "active" : ""}`} to="/badges" ><span className="shape1"></span><span className="shape1"></span><i className="ti-shopping-cart-full sidemenu-icon"></i><span className="sidemenu-label">Badges</span></NavLink>
                    </li>
                    {/* <Store /> */}
                </ul>
            </div>
        </div>
    )
}

const Store = () => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(x => !x);
    return (
        <li className={classNames("nav-item", { show })}>
            <a className="nav-link with-sub" href="#" onClick={toggle}>
                <span className="shape1"></span>
                <span className="shape2"></span>
                <i className="ti-shopping-cart-full sidemenu-icon"></i>
                <span className="sidemenu-label">Store</span>
                <i className="angle fe fe-chevron-right"></i>
            </a>
            <ul className="nav-sub">
                <li className="nav-sub-item">
                    <a className="nav-sub-link" href="#">Dashboard</a>
                </li>
                <li className="nav-sub-item">
                    <a className="nav-sub-link" href="#">Editor</a>
                </li>
            </ul>
        </li>
    )
}
const Refferal = ({ page }) => {
    const [show, setShow] = useState(false);
    const toggle = () => { setShow(x => !x); };;

    return (
        <li className={classNames("nav-item", { show })}>
            <a className={`nav-link with-sub" ${page === "refer" ? "active" : ""}`} href="javascript:void(0)" onClick={toggle}>
                <span className="shape1"></span>
                <span className="shape2"></span>
                <i className="ti-file sidemenu-icon"></i>
                <span className="sidemenu-label">Refferal</span>
                <i className="angle fe fe-chevron-right"></i>
            </a>
            <ul className="nav-sub">
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/refer-brand">Refer a Brand</NavLink>
                </li>
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/refer-influencer">Refer a Influencer</NavLink>
                </li>
            </ul>
        </li>
    )
}
const Wallet = ({ page }) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(x => !x);
    return (
        <li className={classNames("nav-item", { show })}>
            <a className={`nav-link with-sub" ${page === "wallet" ? "active" : ""}`} href="javascript:void(0)" onClick={toggle}>
                <span className="shape1"></span>
                <span className="shape2"></span>
                <i className="ti-wallet sidemenu-icon"></i>
                <span className="sidemenu-label">Wallet</span>
                <i className="angle fe fe-chevron-right"></i>
            </a>
            <ul className="nav-sub">
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/earning-details">Earning Details</NavLink>
                </li>
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/payment-request">Payment Reques</NavLink>
                </li>
            </ul>
        </li>
    )
}
const Offer = ({ page }) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(x => !x);
    return (
        <li className={classNames("nav-item", { show })}>
            <a className={`nav-link with-sub" ${page === "offer" ? "active" : ""}`} href="#" onClick={toggle}>
                <span className="shape1"></span>
                <span className="shape2"></span>
                <i className="ti-face-smile sidemenu-icon"></i>
                <span className="sidemenu-label">Offer</span>
                <i className="angle fe fe-chevron-right"></i>
            </a>
            <ul className="nav-sub">
                {/* For Influencer */}
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/offer-to-brand">Offer a Brand</NavLink>
                </li>
                {/* For Influencer */}
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/offer-from-hungama">Offer from hungama</NavLink>
                </li>
                {/* For Brand */}
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/offers/influencers-offers">Influencers Offers</NavLink>
                </li>
                {/* For Brand */}
                <li className="nav-sub-item">
                    <NavLink className={`nav-sub-link`} to="/offers/hungama-offers">Hungama Offers</NavLink>
                </li>
            </ul>
        </li>
    )
}