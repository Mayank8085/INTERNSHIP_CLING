export const Transactions = () => (
    <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5">
        <div class="bb-1">
            <div class="pt-3 pb-2 pl-40">
                <div class="row">
                    <div class="col-sm-6">
                        <h4 class="mb-0 heading">Transactions</h4>
                    </div>
                    <div class="col-sm-6 pull-right dropdown">
                        <select class="form-control select2">
                            <option value="Firefox">
                                Last 30 days
                            </option>
                            <option value="Chrome">
                                Last 60 days
                            </option>
                            <option value="Safari">
                                Last 90 days
                            </option>
                            <option value="Opera">
                                LAll
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row dashboard-top pt-4 pb-4 text-center">
            <div class="col-sm-4 col-4 pd-0">
                <h6>ACTIVE</h6>
                <p>0</p>
            </div>
            <div class="col-sm-4 col-4 pd-0">
                <h6>OPPORTUNITIES</h6>
                <p>0</p>
            </div>
            <div class="col-sm-4 col-4 pd-0">
                <h6>ACCEPTED</h6>
                <p>0</p>
            </div>
        </div>
    </div>
)