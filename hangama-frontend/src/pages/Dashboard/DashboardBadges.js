import TopInfluencer from "../../assets/img/influencer/1.png";
import HighClouser from "../../assets/img/influencer/13.png";
import Youtube from "../../assets/img/influencer/6.png";
import Amazon from "../../assets/img/influencer/7.png";
import MediumAudio from "../../assets/img/influencer/15.png";
import LinkedIn from "../../assets/img/influencer/10.png";
import Facebook from "../../assets/img/influencer/11.png";
import VeryPopular from "../../assets/img/influencer/14.png";
export const DashboardBadges = () =>{
    return(
        <div class="card custom-card card-dashboard-calendar pb-4 pl-0 pr-0">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <div class="card custom-card card-dashboard-calendar pd-0">
                        <label class="main-content-label mb-2 pt-1">Dashboard Badges</label>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={TopInfluencer} />
                                    <p>Top Influencers</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={HighClouser} />
                                    <p>High Closer </p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={Youtube} />
                                    <p>YouTube </p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={Amazon} />
                                    <p>Amazon </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={MediumAudio} />
                                    <p>Medium Audie </p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={LinkedIn} />
                                    <p>Linkedin </p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={Facebook} />
                                    <p>Facebook </p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="brands">
                                    <img alt="avatar" class="rounded-circle" src={VeryPopular} />
                                    <p>Very Popular </p>
                                </div>
                            </div>
                        </div>
                        <a href="badges.php" class="btn ripple btn-outline-primary btn-rounded text-cente">View All</a>
                    </div>
                </div>
            </div>
    )
}