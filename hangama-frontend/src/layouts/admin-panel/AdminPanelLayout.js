import './dark-style.css';
import './skins.css';
import './sidemenu.css';
import './style.css';
// import './color.css';
// import './default.css';
import './web-fonts/icons.css';
import './web-fonts/font-awesome/font-awesome.min.css';
import './web-fonts/plugin.css';
import {SideMenu} from './SideMenu';
import {Header} from './header';
import {SwitchWrapper} from './SwitchWrapper';

export const AdminPanelLayout = ({children}) => (
    <div class="page">
        <SideMenu />
        <Header />
        <div class="main-content side-content pt-0">{children}</div>
        {/* <SwitchWrapper/> */}
    </div>
)