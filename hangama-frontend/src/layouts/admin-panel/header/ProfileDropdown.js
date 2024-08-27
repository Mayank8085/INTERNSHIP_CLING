import { useCallback, useState } from "react"
import classNames from "classnames";
import onClickOutside from "react-onclickoutside";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../../../utils/system";
export const ProfileDropdown = () => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(x => !x);
    return (
        <div class={classNames("dropdown main-profile-menu", { show })}>
            <a class="d-flex" href="#" onClick={toggle}>
                <span class="main-img-user">
                    <img alt="avatar" src={require("../../../assets/img/users/1.jpg")} />
                </span>
            </a>
            <Menu setShow={setShow} />
        </div>
    )
}

const DropdownMenu = ({ setShow }) => {
    const dispatch = useDispatch();
    DropdownMenu.handleClickOutside = () => setShow(false);
    const handleLogout = useCallback(() => {
        dispatch(logout());
        // window.location.href = "/login";
    }, [dispatch]);
    return (
        <div class="dropdown-menu">
            <div class="header-navheading">
                <h6 class="main-notification-title">Sonia Taylor</h6>
                <p class="main-notification-text">Web Designer</p>
            </div>
            <Link class="dropdown-item border-top" to="/profile">
                <i class="fe fe-user"></i> My Profile
            </Link>
            <a class="dropdown-item" href="#">
                <i class="fe fe-edit"></i> Edit Profile
            </a>
            <a class="dropdown-item" href="#">
                <i class="fe fe-settings"></i> Account Settings
            </a>
            <a class="dropdown-item" href="#">
                <i class="fe fe-settings"></i> Support
            </a>
            <a class="dropdown-item" href="#">
                <i class="fe fe-compass"></i> Activity
            </a>
            <a class="dropdown-item" href="#" onClick={handleLogout}>
                <i class="fe fe-power"></i> Sign Out
            </a>
        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => DropdownMenu.handleClickOutside
};

const Menu = onClickOutside(DropdownMenu, clickOutsideConfig);