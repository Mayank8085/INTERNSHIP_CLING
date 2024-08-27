

export const ScheduleCampaignTable = ({setShowModal}) =>{
    return(
        <div class="container-fluid">
                <div class="card card-dashboard-calendar text-center mb-2 ">
                    <table class="table table-responsive table-bordered text-inputs-searching width-cstm text-left mt-2">
                        <thead class="bg-info text-white">
                            <tr>
                                <th width="30px">#</th>
                                <th>Campaign Name</th>
                                <th>Offer Amount</th>
                                <th>Campaign Amount</th>
                                <th>Brand Name</th>
                                <th width="150px">Start Date </th>
                                <th width="150px">End Date  </th>
                                <th>Status</th>
                                <th>Notes</th>
                                <th>Add  Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img alt="avatar" class="rounded-circle mr-2" src={require("../../assets/img/influencer/coco.png")} width="20px;" />Coca Cola Zero Calories</td>
                                <td>200</td>
                                <td>100</td>
                                <td>Coca Cola</td>
                                <td>01/Jan/2022</td>
                                <td>05/Jan/2022</td>
                                <td class="green">Active</td>
                                <td>lorem ipsum</td>
                                <td>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModalLong1" onClick={()=>setShowModal(true)}><i class="fas fa-edit"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img alt="avatar" class="rounded-circle mr-2" src={require("../../assets/img/influencer/burger.png")} width="20px;" />Burger King
                                </td>
                                <td class="text-danger">NA</td>
                                <td>100</td>
                                <td>Burger King</td>
                                <td>09/Jan/2022</td>
                                <td>11/Jan/2022</td>
                                <td class="green">Active</td>
                                <td>lorem ipsum</td>
                                <td>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModalLong1" onClick={()=>setShowModal(true)}><i class="fas fa-edit"></i></button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th><input type="text" class="form-control" placeholder="#" width="30px" /> </th>
                                <th><input type="text" class="form-control" placeholder="Campaign Name" /></th>
                                <th><input type="text" class="form-control" placeholder="Offer Amount" /></th>
                                <th><input type="text" class="form-control" placeholder="Campaign Amount" /></th>
                                <th>
                                    <select class="form-control">
                                        <option value="">Brand Name</option>
                                        <option value="Coca Cola">Coca Cola	</option>
                                        <option value="Burger King">Burger King	</option>
                                        <option value="McDonald's">McDonald's</option>
                                        <option value="KFC">KFC</option>
                                    </select>
                                </th>
                                <th><input type="text" class="form-control" placeholder="Start Date" width="150px" />  </th>
                                <th><input type="text" class="form-control" placeholder="End Date" width="150px" /></th>
                                <th>
                                    <select class="form-control">
                                        <option value="">Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Accepted">Accepted</option>
                                    </select>
                                </th>
                                <th><input type="text" class="form-control" placeholder="Notes" disabled="" /> </th>
                                <th><input type="text" class="form-control" placeholder="Action" disabled="" /> </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
    )
}