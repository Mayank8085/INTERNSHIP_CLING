import React from "react";
import { Fragment } from "react";

const CampaignTransactionSummary = () => {
    return (
        <Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h2 class="main-content-title tx-24 mt-3 mb-0 ml-2">Campaign Transaction Summary</h2>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card card-dashboard-calendar br-0 mb-1 text-center mt-4">
                    <div class="row">
                        <div class="col-sm-12 text-left">
                            <h5>Campaign Transaction Summary</h5>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card card-dashboard-calendar bd1 mb-1 text-center mt-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="no_msg">No data found. Boo! <a href="campaigns-create.php">Create a campaign</a> so you can start interacting with influencers and complete transactions. Then you'll see data here!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CampaignTransactionSummary;