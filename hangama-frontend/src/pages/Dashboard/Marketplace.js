export const Marketplace = () => (
    <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-0">
        <div class="card custom-card crypto-card overflow-hidden br-0 br-g-1 mb-xs-5 rmv-shadow">
            <div class="bb-1">
                <div class="pt-3 pb-2 pl-40">
                    <div class="row">
                        <div class="col-sm-6">
                            <h4 class="mb-0 heading">Marketplace</h4>
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
                                    All
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row dashboard-top pt-4 pb-4 text-center cmr-0">
                <div class="col-sm-4 col-4 pd-0">
                    <h6 class="text-uppercase">Completed </h6>
                    <p>200</p>
                </div>
                <div class="col-sm-4 col-4 pd-0">
                    <h6>AVAILABLE </h6>
                    <p>21</p>
                </div>
                <div class="col-sm-4 col-4 pd-0">
                    <h6>OPPORTUNITIES</h6>
                    <p>8</p>
                </div>
            </div>
        </div>
    </div>
)