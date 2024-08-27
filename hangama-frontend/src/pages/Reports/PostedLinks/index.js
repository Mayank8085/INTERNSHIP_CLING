import React from "react";
import { Fragment } from "react";

const PostedLinks = () => {
    return (
        <Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h2 class="main-content-title tx-24 mt-3 mb-0 ml-2">Posted Links</h2>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card card-dashboard-calendar bd1 mb-1 text-center mt-4">
                    <div class="row">
                        <div class="col-sm-12 text-right"><p class="mb-0">0 results</p></div>
                        <div class="col-sm-3 text-left">
                            <label>Campaign</label>
                            <select class="form-control ">
                                <option value="" selected="selected">All</option>
                            </select>
                        </div>
                        <div class="col-sm-3 text-left">
                            <label>Influencer</label>
                            <select class="form-control ">
                                <option value="" selected="selected">All</option>
                            </select>
                        </div>
                        <div class="col-lg-3 text-left mt-3">
                            <button type="button" class="btn btn-primary my-2 btn-icon-text">Apply Now </button>
                        </div>
                        <div class="col-sm-12 mt-4">
                            <p class="no_msg">No data found. Boo! <a href="campaigns-create.php">Create a campaign</a> so you can start interacting with influencers and complete transactions. Then you'll see data here!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PostedLinks;