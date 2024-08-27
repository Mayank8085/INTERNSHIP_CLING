import { useState } from "react"
import classNames from "classnames";
import onClickOutside from "react-onclickoutside";

export const NotificationDropdown = () => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(x => !x);
    return (
        <div class={classNames("dropdown main-header-notification", { show })}>
            <a class="nav-link icon" href="#" onClick={toggle}>
                <i class="fe fe-bell header-icons"></i>
                <span class="badge badge-danger nav-link-badge">4</span>
            </a>
            <Menu setShow={setShow} />
        </div>
    )
}

const DropdownMenu = ({setShow}) => {
    DropdownMenu.handleClickOutside = () => setShow(false);
    return (
        <div class="dropdown-menu">
            <div class="header-navheading">
                <p class="main-notification-text">You have 1 unread notification<span class="badge badge-pill badge-primary ml-3">View all</span></p>
            </div>
            <div class="main-notification-list">
                <div class="media new">
                    <div class="main-img-user online"><img alt="avatar" src={require("../../../assets/img/users/5.jpg")} /></div>
                    <div class="media-body">
                        <p>Congratulate <strong>Olivia James</strong> for New template start</p><span>Oct 15 12:32pm</span>
                    </div>
                </div>
                <div class="media">
                    <div class="main-img-user"><img alt="avatar" src={require("../../../assets/img/users/2.jpg")} /></div>
                    <div class="media-body">
                        <p><strong>Joshua Gray</strong> New Message Received</p><span>Oct 13 02:56am</span>
                    </div>
                </div>
                <div class="media">
                    <div class="main-img-user online"><img alt="avatar" src={require("../../../assets/img/users/3.jpg")} /></div>
                    <div class="media-body">
                        <p><strong>Elizabeth Lewis</strong> added new schedule realease</p><span>Oct 12 10:40pm</span>
                    </div>
                </div>
            </div>
            <div class="dropdown-footer">
                <a href="#">View All Notifications</a>
            </div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => DropdownMenu.handleClickOutside
};

const Menu = onClickOutside(DropdownMenu, clickOutsideConfig);