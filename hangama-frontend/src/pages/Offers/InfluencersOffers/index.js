import React from "react";
import styled from "styled-components";
import { AdminPanelLayout } from "../../../layouts/admin-panel";

const InfluencersOffers = () => {
    return (
        <AdminPanelLayout>
            <div class="container-fluid pd-0">
                <div class="row">
                    <div class="col-sm-6">
                        <h2 class="main-content-title tx-24 mt-3 mb-0 ml-2">Influencers Offers</h2>
                    </div>
                    <div class="col-sm-6 pull-right">
                        <div class="justify-content-center pull-right mt-2 mb-0 mr-3 mt-xs-20 ">
                            <a href="offer.php" class="btn btn-primary my-2 btn-icon-text">
                                <i class="fe fe-download-cloud me-2"></i> Discover Offers
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 mt-1">
                        <Features>
                            <li class="card custom-card"><h4>Pitched</h4>
                                <a href="#"><span>0</span></a>
                            </li>
                            <li class="card custom-card"><h4>Accepted</h4>
                                <a href="#"><span>0</span></a>
                            </li>
                            <li class="card custom-card"><h4>Declined</h4>
                                <a href="#"><span>0</span></a>
                            </li>
                            <li class="card custom-card"><h4>Completed</h4>
                                <a href="#"><span>0</span></a>
                            </li>
                            <li class="card custom-card"><h4>Need Action</h4>
                                <a href="#"><span>0</span></a>
                            </li>
                        </Features>
                    </div>
                </div>
            </div>
            <div class="container-fluid pd-0 card custom-card br-0">
                <div class="card-body pd-10">
                    <div class="row">
                        <div class="col-md-9 col-lg-9 col-xl-9">
                            <div class="input-group">
                                <i class="fe fe-search search" />
                                <input type="text" class="form-control pl-40 ht-60" placeholder="Filter by name or keyword" />
                                <span class="" />
                            </div>
                        </div>
                        <div class="col-sm-3 pull-right">
                            <span>0 results</span>
                            <button type="button" class="btn btn-primary btn-icon-text my-2 me-2 ml-4" data-toggle="modal" data-target="#exampleModalLong">
                                <i class="fe fe-filter me-2"></i>Advanced Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-4 col-md-12 col-sm-12">
                        <div class="card card-dashboard-calendar bd1 mb-1 text-center mt-4">
                            <img src="assets/img/sallybot_transparent_110px_square.png" class="imgbg mb-4" />
                            <h3>Let's get you some offers!</h3>
                            <p>You don't have any offers started yet. Let's change that! Head over to the discover offers page so you can pitch some influencers.</p>
                            <a href="offer.php" class="btn primary btn-primary btn-lg btn-block" style={{ background: "#2a76f4;" }}>Launch Campaign Wizard</a>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    )
}

export default InfluencersOffers;

const Features = styled.ul`
    margin: 0px;
    padding: 0 !important;
    border-bottom: 2px solid #2a76f4;
    li {
        width: 19.7%;
        display: inline-block;
        border-radius: 0;
        text-align: center;
        padding: 26px 0px;
        margin-bottom: 0;
        min-height: 104px;
        max-height: 100%;
        box-shadow: 0 10px 30px 0 rgb(24 28 33 / 5%);
        &:not(:last-child) {
            margin-right: 2px;
        }
        h4 {
            font-size: 16px;
            margin-bottom: 0;
            color: #000;
        }
        a {
            font-size: 20px;
            color: #000;
            margin-bottom: 0;
            span {
                font-weight: bold;
                font-size: 30px;
                color: #2a76f4;
            }
        }
    }
`;