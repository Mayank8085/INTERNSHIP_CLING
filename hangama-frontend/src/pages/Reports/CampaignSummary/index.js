import React from "react";

const CampaignSummary = () => {
    return (
        <div class="container-fluid ">
            <div class="row">
                <div class="col-sm-6">
                    <h2 class="main-content-title tx-24 mt-3 mb-0 ml-2">Campaign Summary</h2>
                </div>
            </div>
            <div class="row row-sm">
                <div class="col-lg-12 col-md-12 mt-3">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-body">
                            <div class="chartjs-wrapper-demo">
                                <canvas id="chartLine" width="477" height="300" style="display: block; width: 477px; height: 300px;" class="chartjs-render-monitor"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-sm mt-4">
                <div class="col-lg-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div>
                                <div class="table-responsive border">
                                    <table class="table  text-nowrap text-md-nowrap table-striped mg-b-0">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th class="num">Pitches Sent</th>
                                                <th class="num">Pitches Accepted</th>
                                                <th class="num">Transactions Completed</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Week</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                            </tr>
                                            <tr>
                                                <td>Month</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                            </tr>
                                            <tr>
                                                <td>Quarter</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                                <td class="num">0</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignSummary;