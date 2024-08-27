

export const EarningTable = () =>{
    return(
        <div class="container-fluid">
                    <div class="card card-dashboard-calendar text-center mb-2 ">
                        <table class="table-responsive table table-bordered text-inputs-searching width-cstm text-left mt-2">
                            <thead class="bg-info text-white">
                                <tr>
                                    <th width="30PX">#</th>
                                    <th>Campaign Name</th>
                                    <th>Offer Amount</th>
                                    <th>Campaign Amount</th>
                                    <th>Brand Name</th>
                                    <th>Proposed Amount </th>
                                    <th>Procesed Amount  </th>
                                    <th>Remark</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img alt="avatar" class="rounded-circle mr-2" src={require("../../assets/img/influencer/coco.png")} width="20px;" />Coca Cola Zero Calories</td>
                                    <td>200</td>
                                    <td>100</td>
                                    <td>Coca Cola</td>
                                    <td>200</td>
                                    <td>NA</td>
                                    <td>NA</td>
                                    <td class="green">Active</td>

                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td><img alt="avatar" class="rounded-circle mr-2" src={require("../../assets/img/influencer/kfc.png")} width="20px;" />KFC</td>
                                    <td class="text-danger">NA</td>
                                    <td>330</td>
                                    <td>KFC</td>
                                    <td>300</td>
                                    <td>400</td>

                                    <td>Test</td>
                                    <td class="blue">Completed</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th width="30PX"><input type="text" class="form-control" placeholder="#" disabled="" /> </th>
                                    <th><input type="text" class="form-control" placeholder="Campaign Name" /></th>
                                    <th><input type="text" class="form-control" placeholder="Offer Amount" /></th>
                                    <th><input type="text" class="form-control" placeholder="Campaign Amount" /></th>
                                    <th>
                                        <select class="form-control">
                                            <option value="">Brand Name</option>
                                            <option value="Coca Cola">Coca Cola </option>
                                            <option value="Burger King">Burger King </option>
                                            <option value="McDonald's">McDonald's</option>
                                            <option value="KFC">KFC</option>
                                        </select>
                                    </th>
                                    <th><input type="text" class="form-control" placeholder="Proposed Amount " />  </th>
                                    <th><input type="text" class="form-control" placeholder="Process Amount" />  </th>
                                    <th><input type="text" class="form-control" placeholder="Remark" />  </th>

                                    <th>
                                        <select class="form-control">
                                            <option value="">Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Accepted">Accepted</option>
                                        </select>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
    )
}