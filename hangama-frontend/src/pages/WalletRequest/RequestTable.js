

export const RequestTable = () =>{
    return(
        <div class="container-fluid">
                <div class="card card-dashboard-calendar text-center mb-2 ">
                    <div class="row">
                        <div class="col-sm-9 pull-right"></div>
                        <button class="col-sm-3 btn btn-primary mb-2 pull-right" data-toggle="modal" data-target="#exampleModalLong1">Requested A Payment
                        </button>
                    </div>
                    <table class="table table-bordered text-inputs-searching width-cstm text-left mt-2">
                        <thead class="bg-info text-white">
                            <tr>
                                <th width="30PX">#</th>
                                <th>Requested Id</th>
                                <th>Requested Date</th>
                                <th>Requested Amount </th>
                                <th>Process Status  </th>
                                <th>Transaction id</th>
                                <th>Payment Mode</th>
                                <th>Process Date</th>
                                <th>Process By</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>#23384</td>
                                <td>01/Jan/2022</td>
                                <td>300</td>
                                <td class="green">Process</td>
                                <td>57677</td>
                                <td>Paypal</td>
                                <td>01/Feb/2022</td>
                                <td>Ajay</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>#23384</td>
                                <td>01/Jan/2022</td>
                                <td>300</td>
                                <td class="text-danger">Under Process</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th width="30PX"><input type="text" class="form-control" placeholder="#" /> </th>
                                <th><input type="text" class="form-control" placeholder="Request Id" /></th>
                                <th><input type="text" class="form-control" placeholder="Request Date" /></th>
                                <th><input type="text" class="form-control" placeholder="Request Amount" /></th>
                                <th><input type="text" class="form-control" placeholder="Process Status" /></th>
                                <th><input type="text" class="form-control" placeholder="Transaction id" /></th>
                                <th><input type="text" class="form-control" placeholder="Process Date" /></th>
                                <th><input type="text" class="form-control" placeholder="payment" /></th>
                                <th><input type="text" class="form-control" placeholder="Process By" /></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
    )
}