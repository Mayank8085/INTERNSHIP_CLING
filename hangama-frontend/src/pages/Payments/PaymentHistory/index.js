import React from "react";

const PaymentHistory = () => {
    return (
        <>
            <div class="container-fluid pl-0 pr-15">
                <div class="row">
                    <div class="col-md-12" id="earnings">
                        <div class="row cstm-width">
                            <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-xs-0">
                                <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
                                    <div class="bb-1">
                                        <div class="pt-3 pb-2 pl-40">
                                            <div class="row">
                                                <div class="col-sm-12 dropdown text-center">
                                                    <h4 class="mb-0 heading text-uppehcrase">TOTAL REQUEST</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row dashboard-top pt-2 pb-2 text-center">
                                        <div class="col-sm-12 text-center col-4 pd-0">
                                            <p class="yellow">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-0">
                                <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
                                    <div class="bb-1">
                                        <div class="pt-3 pb-2 pl-40">
                                            <div class="row">
                                                <div class="col-sm-12 dropdown text-center">
                                                    <h4 class="mb-0 heading text-uppehcrase">PROCESSED REQUEST</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row dashboard-top pt-2 pb-2 text-center">
                                        <div class="col-sm-12 text-center col-4 pd-0">
                                            <p>7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-0">
                                <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
                                    <div class="bb-1">
                                        <div class="pt-3 pb-2 pl-40">
                                            <div class="row">
                                                <div class="col-sm-12 dropdown text-center">
                                                    <h4 class="mb-0 heading">PROCESSED AMOUNT</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row dashboard-top pt-2 pb-2 text-center">
                                        <div class="col-sm-12 text-center col-4 pd-0">
                                            <p class="yellow">$300 USD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-0">
                                <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
                                    <div class="bb-1">
                                        <div class="pt-3 pb-2 pl-40">
                                            <div class="row">
                                                <div class="col-sm-12 dropdown text-center">
                                                    <h4 class="mb-0 heading text-uppehcrase">UNDER-PROCESS REQUEST</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row dashboard-top pt-2 pb-2 text-center">
                                        <div class="col-sm-12 text-center col-4 pd-0">
                                            <p class="green">$3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-0">
                                <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
                                    <div class="bb-1">
                                        <div class="pt-3 pb-2 pl-40">
                                            <div class="row">
                                                <div class="col-sm-12 dropdown text-center">
                                                    <h4 class="mb-0 heading text-uppehcrase">UNDER-PROCESS AMOUNT</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row dashboard-top pt-2 pb-2 text-center">
                                        <div class="col-sm-12 text-center col-4 pd-0">
                                            <p class="green">$3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <th>Payment Moda</th>
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
        </>
    )
}

export default PaymentHistory;