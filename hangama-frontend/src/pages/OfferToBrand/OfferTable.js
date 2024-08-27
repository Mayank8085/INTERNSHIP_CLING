
export const OfferTable = ({setShowModal,setShowEditModal}) =>{
    return(
        <div class="container-fluid mt-4">

                <div class="card card-dashboard-calendar text-center mb-2 ">


                    <div class="row">
                        <div class="col-sm-10 pull-right"></div>
                        <button class="col-sm-2 btn btn-primary mb-2 pull-right" data-toggle="modal" data-target="#addoffer" onClick={()=>setShowModal(true)}>Add Offer
                        </button>
                    </div>


                    <table class="table table-bordered text-inputs-searching width-cstm text-left mt-2">
                        <thead class="bg-info text-white">
                            <tr>
                                <th width="30PX">#</th>
                                <th>Offer Title</th>
                                <th>Start Date </th>
                                <th>End Date  </th>
                                <th>Offer Description</th>
                                <th>Status</th>
                                <th width="50PX">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Free Blog Post</td>

                                <td>01/Jan/2022</td>
                                <td>05/Jan/2022</td>
                                <td>Coca Cola</td>
                                <td class="green">Active</td>
                                <td>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModalLong1" onClick={()=>setShowEditModal(true)}><i class="fas fa-edit"></i></button>
                                </td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Video Creation</td>

                                <td>09/Jan/2022</td>
                                <td>11/Jan/2022</td>
                                <td>Burger King</td>
                                <td class="green">Active</td>
                                <td>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModalLong1" onClick={()=>setShowEditModal(true)}><i class="fas fa-edit"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Blog Post's</td>

                                <td>01/Jan/2022</td>
                                <td>05/Jan/2022</td>
                                <td>McDonald's</td>
                                <td class="info">Completed</td>
                                <td>           </td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <th width="30PX"><input type="text" class="form-control" placeholder="#" /> </th>
                                <th><input type="text" class="form-control" placeholder="Offer Tittle" /></th>
                                <th><input type="text" class="form-control" placeholder="Start Date" width="150px" />  </th>
                                <th><input type="text" class="form-control" placeholder="End Date" width="150px" /></th>
                                <th><input type="text" class="form-control" placeholder="Offer Description" width="150px" /></th>
                                <th>
                                    <select class="form-control">
                                        <option value="">Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Accepted">Accepted</option>
                                    </select>
                                </th>
                                <th ><input type="text" class="form-control" placeholder="Action" disabled="" /> </th>


                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
    )
}