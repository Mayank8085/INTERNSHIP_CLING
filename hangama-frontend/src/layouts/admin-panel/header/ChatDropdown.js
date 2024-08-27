import { useState } from "react"
import classNames from "classnames";
import onClickOutside from "react-onclickoutside";

export const ChatDropdown = () => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(x => !x);
    return (
        <div class={classNames("dropdown main-header-notification",{show})}>
            <a class="nav-link icon" href="#" onClick={toggle}>
                <i class="fe fe-message-square header-icons"></i>
                <span class="badge badge-success nav-link-badge">3</span>
            </a>
            <Menu setShow={setShow} />
        </div>
    )
}

const DropdownMenu = ({ setShow }) => {
    DropdownMenu.handleClickOutside = () => setShow(false);
    return (
        <div class="dropdown-menu">
            <div class="header-navheading">
                <p class="main-notification-text tx-medium text-left"> 3 New messages </p>
            </div>
            <div class="main-notification-list">
                <div class="media new">
                    <div class="main-img-user online"><img alt="avatar" src={require("../../../assets/img/users/10.jpg")} /></div>
                    <div class="media-body">
                        <p>Paul Molive <span>I'm sorry but i'm not sure how...</span></p>
                    </div>
                </div>
                <div class="media">
                    <div class="main-img-user online"><img alt="avatar" src={require("../../../assets/img/users/8.jpg")} /></div>
                    <div class="media-body">
                        <p>Sahar DaryAll<span> set ! Now, time to get to you now......</span></p>
                    </div>
                </div>
                <div class="media">
                    <div class="main-img-user online"><img alt="avatar" src={require("../../../assets/img/users/11.jpg")} /></div>
                    <div class="media-body">
                        <p>Barney Cull</p><span>Here are some products ...</span>
                    </div>
                </div>
            </div>
            <div class="dropdown-footer">
                <a href="#">View All</a>
            </div>
        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => DropdownMenu.handleClickOutside
};

const Menu = onClickOutside(DropdownMenu, clickOutsideConfig);