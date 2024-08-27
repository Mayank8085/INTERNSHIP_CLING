import React from "react";
import styled from "styled-components";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import Earnings from "./Earnings";
import imgReferral from "../../images/referral.png";
import imgAvatar1 from "../../images/2.jpg";
import imgAvatar2 from "../../images/5.jpg";

const BrandDashboard = () => {
    return (
        <AdminPanelLayout>
            <Earnings />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9 col-lg-9 col-xl-9 mt-xl-9 dashboard_brand_home">
                        <div className="card card-dashboard-calendar br-0 mb-1 mt-0">
                            <div className="row">
                                <div className="col-sm-9">
                                    <label className=" main-content-label pt-1">Recommended Influencers</label>
                                </div>
                                <div className="col-sm-3 text-right">
                                    <a href="hungama-list.php" class="anker">View All Offers</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 pr-1">
                                <div class="card custom-card our-team br-0 pd-0">
                                    <a href="profile-views-deatils.php">
                                        <div class="card-body">
                                            <div class="picture avatar-lg online ">
                                                <img alt="avatar" class="rounded-circle" src={imgAvatar2} />
                                            </div>
                                            <div class="text-center mt-2 pl-2 pr-2 mb-2">
                                                <h5 class="mb-1" style={{ color: "#000" }}>ADAM IDAHAM</h5>
                                                <a href="profile-views-deatils.php" class="mb-1 anker">2K Reach</a>
                                                <p class="pro-user-desc text-muted mb-1 ">Hey you..Have you ever see people that can help you with your product better than </p>
                                                <br />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 pl-1">
                                <div class="card custom-card our-team br-0 pd-0">
                                    <a href="profile-views-deatils.php">
                                        <div class="card-body">
                                            <div class="picture avatar-lg online text-center">
                                                <img alt="avatar" class="rounded-circle" src={imgAvatar1} />
                                            </div>
                                            <div class="text-center mt-2 pl-2 pr-2 mb-2">
                                                <h5 class="mb-1" style={{ color: "#000" }}>Tyler Greener</h5>
                                                <a href="profile-views-deatils.php" class="mb-1 anker">204K Reach</a>
                                                <p class="pro-user-desc text-muted mb-1 ">I am an inspiring Chef, trying to work my ways up towing my own restaurant!</p>
                                                <br />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-12 col-sm-12 pl-0">
                        <div class="card card-dashboard-calendar br-0 mb-1 text-center mt-0 pt-1 pb-2">
                            <ReferralImage src={imgReferral} class="imgbg mb-2" />
                            <h3>Refer other<br /> brands!</h3>
                            <p>Earn  Hungama Credits 20%  for referring other brands! It's quick and simple!</p>
                            <button type="button" class="btn primary btn-primary btn-lg btn-block pd-0" style={{ background: "#2a76f4" }}>
                                ₹ Earn Hungama Credits
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelLayout >
    )
}

export default BrandDashboard;

const ReferralImage = styled.img`
    background: #fff;
    border-radius: 100%;
    width: 100px;
    margin: 0px auto;
    margin-top: 10px;
    margin-bottom: 0.5rem;
`;