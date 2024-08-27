import { ChatDropdown } from "./ChatDropdown";
import { FlagDropdown } from "./FlagDropdown";
import { NotificationDropdown } from "./NotificationDropdown";
import { ProfileDropdown } from "./ProfileDropdown";
import { BrowserFullScreen } from "./BrowserFullScreen";

export const HeaderRight = () => (
    <div class="main-header-right">
        <div class="dropdown header-search">
            <a class="nav-link icon header-search">
                <i class="fe fe-search header-icons"></i>
            </a>
        </div>

        <FlagDropdown />
        <BrowserFullScreen />
        <NotificationDropdown />
        <ChatDropdown />
        <ProfileDropdown />

        <button class="navbar-toggler navresponsive-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
        </button>
    </div>
)