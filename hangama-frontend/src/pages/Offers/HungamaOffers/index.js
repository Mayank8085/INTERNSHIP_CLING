import React from "react";
import { AdminPanelLayout } from "../../../layouts/admin-panel";
import HungamaOfferCard from "./HungamaOfferCard";


const HungamaOffers = () => {
    return (
        <AdminPanelLayout>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="main-content-title tx-24 mt-3 mb-4 ml-2">Hungama Offers</h2>
                    </div>
                </div>
            </div>
            <div class="container-fluid pd-0 card custom-card br-0">
                <div class="card-body pd-10">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="input-group">
                                <i class="fe fe-search search"></i>
                                <input type="text" class="form-control pl-40 ht-60" placeholder="Filter by name or keyword" />
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="col-sm-3 pull-right mt-3">
                            <div class="d-flex align-items-right text-purple">
                                2433 results &nbsp;
                                <button type="button" class="btn btn-primary btn-icon-text " data-toggle="modal" data-target="#exampleModalLong">
                                    <i class="fe fe-filter me-2"></i>Advanced Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                    <HungamaOfferCard/>
                </div>
            </div>
        </AdminPanelLayout>
    )
}

export default HungamaOffers;