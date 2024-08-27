export const BrowserFullScreen = () => {
    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
    }
    return (
        <div class="dropdown d-md-flex full-screen-link">
            <a class="nav-link icon " href="#" onClick={handleFullscreen}>
                <i class="fe fe-maximize fullscreen-button fullscreen header-icons"></i>
                <i class="fe fe-minimize fullscreen-button exit-fullscreen header-icons"></i>
            </a>
        </div>
    )
}