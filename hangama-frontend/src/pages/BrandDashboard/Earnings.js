import React from "react";
import styled from "styled-components";
import imgCampaigns from "../../images/Campaigns.png";
import imgOffer from "../../images/offer.png";

const Earnings = () => (
    <div className="row">
        <div className="col-md-12">
            <div className="row">
                <div className="col-xl-4 col-md-12 col-lg-6 pr-0 pl-0">
                    <Card className="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
                        <div className="bb-1">
                            <div className="pt-3 pb-2 pl-40">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4 className="mb-0 heading">Campaigns</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Brand className="row">
                            <div className="col-sm-4 col-4 boot-img">
                                <img src={imgCampaigns} alt="" />
                            </div>
                            <div className="col-sm-8 col-8 text-left">
                                <p>Create your first campaign and pitch influencers of your choice!</p>
                                <a href="" data-toggle="modal" data-target="#exampleModal">
                                    CREATE NEW CAMPAIGN! <i className="angle fe fe-chevron-right" />
                                </a>
                            </div>
                        </Brand>
                    </Card>
                </div>
                <div class="col-xl-4 col-md-12 col-lg-6 pr-0 pl-0">
                    <Card className="card custom-card crypto-card overflow-hidden br-0 br-g-1 mb-xs-5">
                        <div class="bb-1">
                            <div class="pt-3 pb-2 pl-40">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="mb-0 heading">Offers</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Brand className="row">
                            <div class="col-sm-4 col-4 boot-img">
                                <img src={imgOffer} alt="Offers" />
                            </div>
                            <div class="col-sm-8 col-8 text-left">
                                <p>Get started by checking out influencer offers!</p>
                                <a href="offer.php">
                                    VIEW INFLUENCER OFFERS!
                                    <i class="angle fe fe-chevron-right" />
                                </a>
                            </div>
                        </Brand>
                    </Card>
                </div>
                <div class="col-xl-4 col-md-12 col-lg-6 pl-0 pr-0">
                    <Card className="card custom-card crypto-card overflow-hidden br-0 mb-xs-5">
                        <div class="bb-1">
                            <div class="pt-2 pbc-6 pl-40">
                                <div class="row">
                                    <div class="col-sm-12 learnpays">
                                        <h4 class="mb-0 heading display-inline">
                                            Balance
                                            <a href="#" >
                                                <i class="fa fa-question-circle me-1" aria-hidden="true" data-toggle="tooltip" title="Learn more about payments" />
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Brand className="row">
                            <div class="col-sm-4 col-4 pd-0 mt-3">
                                <h6>Total</h6>
                                <p>$500.00USD</p>
                            </div>
                            <div class="col-sm-4 col-4 pd-0 mt-3">
                                <h6>Spent</h6>
                                <p class="green">$350.00USD</p>
                            </div>
                            <div class="col-sm-4 col-4 pd-0 mt-3">
                                <h6>AVAILABLE</h6>
                                <p class="yellow">$150.00USD</p>
                            </div>
                        </Brand>
                    </Card>
                </div>
            </div>
        </div>
    </div>
)

export default Earnings;

const Brand = styled.div`
    height: 149px;
    text-align: center;
    padding: 0 1.5rem;
`;

const Card = styled.div`
    
`;