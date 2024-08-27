import React from "react";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import CampaignFeatures from "./CampaignFeatures";

const BrandCampaingns = () => {
    return (
        <AdminPanelLayout>
            <div className="container-fluid mt-xs-70">
                <div class="row">
                    <div class="col-sm-6">
                        <h3 class="main-content-title tx-24 mt-3 mb-0 ">My Campaigns</h3>
                    </div>
                    <div class="col-sm-6 pull-right">
                        <div class="justify-content-center pull-right mt-2 mb-0">
                            <button type="button" class="btn btn-white btn-icon-text my-2 me-2" data-toggle="modal" data-target="#exampleModalLong1"> <i class="fe fe-filter me-2"></i> Duplicate Campaign </button>
                            <button type="button" class="btn btn-primary my-2 btn-icon-text" data-toggle="modal" data-target="#exampleModal"> <i class="fe fe-filter me-2"></i> + New Campaign  </button>
                        </div>
                    </div>
                </div>
            </div>
            <CampaignFeatures />
            <div class="container-fluid mt-2">
                <div class="row">
                    <div class="card card-dashboard-calendar text-center mb-2 w-100">
                        <table class="table table-bordered text-inputs-searching width-cstm text-left table-responsive mt-2">
                            <thead class="bg-info text-white">
                                <tr>
                                    <th width="30px">#</th>
                                    <th>Campaign Name</th>
                                    <th>Offer Amount</th>
                                    <th>Campaign Amount</th>
                                    <th>Brand Name</th>
                                    <th>Start Date </th>
                                    <th>Cash Value</th>
                                    <th>Product Value</th>
                                    <th>Total Budget</th>
                                    <th>Campaign Type</th>
                                    <th>Status</th>
                                    <th width="90px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img alt="avatar" class="rounded-circle mr-2" src="assets/img/coco.png" width="20px;" />Coca Cola Zero Calories</td>
                                    <td>500</td>
                                    <td>150</td>
                                    <td>Coca Cola</td>
                                    <td>01/Jan/2022</td>
                                    <td>$6</td>
                                    <td>$8</td>
                                    <td>$200</td>
                                    <td>Social Share</td>
                                    <td class="green">Running</td>
                                    <td>
                                        <button class="btn btn-success"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><img alt="avatar" class="rounded-circle mr-2" src="assets/img/burger.png" width="20px;" />Burger King
                                    </td>
                                    <td>400</td>
                                    <td>100</td>
                                    <td>Burger King</td>
                                    <td>09/Jan/2022</td>

                                    <td>$3</td>
                                    <td>$4</td>
                                    <td>$300</td>
                                    <td>Brand Amplify</td>
                                    <td class="text-danger">Draft</td>
                                    <td>
                                        <button class="btn btn-success"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><img alt="avatar" class="rounded-circle mr-2" src="assets/img/mcd.png" width="20px;" />McDonald's</td>     <td>300</td>
                                    <td>100</td>
                                    <td>McDonald's</td>
                                    <td>01/Jan/2022</td>

                                    <td class="text-danger"> Not Applied</td>
                                    <td>$12</td>
                                    <td>$400</td>
                                    <td>Social Review</td>
                                    <td class="green">Completed</td>
                                    <td>
                                        <button class="btn btn-success"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><img alt="avatar" class="rounded-circle mr-2" src="assets/img/kfc.png" width="20px;" />KFC</td>
                                    <td class="text-danger">NA</td>
                                    <td>100</td>
                                    <td>KFC</td>
                                    <td>01/Jan/2022</td>
                                    <td>$7</td>
                                    <td class="text-danger"> Not Applied</td>
                                    <td>$100</td>
                                    <td>Social Engagement</td>
                                    <td>Pitches</td>
                                    <td>
                                        <button class="btn btn-success"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th><input type="text" class="form-control" placeholder="#" width="30px" /></th>
                                    <th><input type="text" class="form-control" placeholder="Campaign Name" /></th>
                                    <th>
                                        <select class="form-control">
                                            <option value="">Brand Name</option>
                                            <option value="Coca Cola">Coca Cola  </option>
                                            <option value="Burger King">Burger King  </option>
                                            <option value="McDonald's">McDonald's</option>
                                            <option value="KFC">KFC</option>
                                        </select>
                                    </th>
                                    <th><input type="text" class="form-control" placeholder="Start Date" />  </th>
                                    <th><input type="text" class="form-control" placeholder="Cass Value" /></th>
                                    <th><input type="text" class="form-control" placeholder="Product Value" /></th>
                                    <th><input type="text" class="form-control" placeholder="Total Budget" /></th>
                                    <th><input type="text" class="form-control" placeholder="Campaign Type" /></th>
                                    <th>
                                        <select class="form-control">
                                            <option value="">Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Accepted">Accepted</option>
                                        </select>
                                    </th>
                                    <th><input type="text" class="form-control" placeholder="Action" disabled="" /> </th>


                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    )
}

export default BrandCampaingns;