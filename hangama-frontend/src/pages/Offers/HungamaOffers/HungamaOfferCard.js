import React from "react";
import styled from "styled-components";
import imgUser2 from "../../../images/2.jpg";

const HungamaOfferCard = () => (
    <div class="col-sm-12 col-md-4 pr-1">
        <a href="humgama-offers-view-list.php">
            <Card className="card custom-card our-team br-0 pd-0">
                <div class="card-body pd-0">
                    <div class="">
                        <img alt="avatar" class="" src={imgUser2} />
                    </div>
                    <div class="text-left pl-3 pr-3 offer_view">
                        <p>
                            <i class="si si-social-twitter twitter" data-bs-toggle="tooltip" title="" data-bs-original-title="si-social-twitter" aria-label="si-social-twitter"></i>
                            <span>Social Engagement on Instagram </span>
                        </p>
                        <span class="story">I will comment. like . save and share to my story</span>
                        <br />
                    </div>
                    <div class="pull-left d-block view-count pl-3 w100 mt-2 mb-2 bo-d">
                        <span>21K Reach</span>
                        <span class="stars-active pl-2"><i class="fa fa-star"></i>&nbsp;5.0</span><span class="views_count">(4)</span>
                        <span class="wish_icon"><i class="si si-heart" data-bs-toggle="tooltip" title="" data-bs-original-title="si-heart" aria-label="si-heart"></i></span>
                    </div>
                    <div class="view-count_footer pl-3 pb-2">
                        <div class="row">
                            <div class="col-sm-7">
                                <img alt="avatar" src={imgUser2} class="img-circle" />
                                <span>Mohamad Hanis</span>
                            </div>
                            <div class="col-sm-5 mt-3">
                                <p><b>Starting at: $60</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </a>
    </div>
)

export default HungamaOfferCard;

const Card = styled.div`
    box-shadow: 0 10px 30px 0 rgb(24 28 33 / 5%);
    padding: 0;
    border-radius: 0;
    margin-bottom: 20px;
    border: 0;
    .card-body {
        img {
            vertical-align: middle;
            border-style: none;
            max-width: 100%;
        }
    }
`;