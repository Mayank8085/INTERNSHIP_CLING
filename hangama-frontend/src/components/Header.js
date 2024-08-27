import { Link } from 'react-router-dom';
import "../assets/css/landing.css";
export const Header = () => (
    <header id="topnav" class="defaultscroll sticky active nav-sticky">
        <div class="container">
            {/* <!-- Logo --> */}
            <div>
                <a class="logo" href="">
                <img src={require("../assets/logo-dark.png")} className="l-dark" alt="" />
                <img src={require("../assets/logo.png")} className="l-light" alt="" />
                </a>
            </div>
            {/* <!-- /Btn --> */}
            <div class="buy-button">
            <Link to="/login"><a href="" class="btn theme-btn cstm">Sign In </a></Link>
                 <a href="" class="btn theme-btn cstm">Sign Up</a>
            </div>
            {/* <!--/Btn -->
            <!-- /Logo --> */}
            <div class="menu-extras">
                <div class="menu-item">
                    {/* <!-- Mobile menu toggle --> */}
                    <a class="navbar-toggle">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    {/* <!-- /mobile menu toggle --> */}
                </div>
            </div>

            <div id="navigation">
                {/* <!-- Navigation Menu --> */}
                <ul class="navigation-menu nav-light">
                    <li><a href="">Home</a></li>
                    <li><a href="#">Brand</a></li>
                    <li><a href="#">Influencers</a></li>
                        <li class="has-submenu">
                        <a href="javascript:void(0)">Our Works</a><span class="menu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="">Live Campaigns</a></li>
                            <li><a href="">Past Campaigns</a></li>
                            <li><a href="#">Showcase</a></li>
                            
                        </ul>
                    </li>
                 
                    <li><a href="categories.php">Categories</a></li>
                    <li><a href="team.php">Team</a></li>
                    <li><a href="contact.php">Contact </a></li>
                </ul>
                {/* <!-- /Navigation Menu --> */}
            </div>
        </div>
        {/* <!-- /container --> */}
    </header>
    // <header id="topnav" className="defaultscroll sticky">
    //     <div className="container">
    //         <div>
    //             <a className="logo" href="#">
    //                 <img src={require("../assets/logo-dark.png")} className="l-dark" alt="" />
    //                 <img src={require("../assets/logo.png")} className="l-light" alt="" />
    //             </a>
    //         </div>
    //         <div className="buy-button">
    //             <Link to="/login" className="btn theme-btn">Login</Link>
    //         </div>
    //         <div className="menu-extras">
    //             <div className="menu-item">
    //                 <a className="navbar-toggle">
    //                     <div className="lines">
    //                         <span></span>
    //                         <span></span>
    //                         <span></span>
    //                     </div>
    //                 </a>
    //             </div>
    //         </div>

    //         <div id="navigation">
    //             <ul className="navigation-menu nav-light">
    //                 <li><a href="#">Home</a></li>
    //                 <li><a href="#">Brands</a></li>
    //                 <li><a href="#">Influencers</a></li>
    //                 <li><a href="#">Categories</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </header>
)