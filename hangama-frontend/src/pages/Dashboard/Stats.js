import { Marketplace } from './Marketplace';
import { Transactions } from './Transactions';

export const Stats = () => (
    <div class="container-fluid pl-0 pr-15">
        <div class="row">
            <div class="col-md-12" id="earnings">
                <div class="row">
                    <div class="col-xl-4 col-md-12 col-lg-6 pr-0 pl-xs-0">
                        <Transactions />
                    </div>
                    <div class="col-xl-4 col-md-12 col-lg-6 pr-0 pl-0">
                        <Marketplace />
                    </div>
                    <div class="col-xl-4 col-md-12 col-lg-6 pl-0 pr-0 pr-xs-0">
                        <Marketplace />
                    </div>
                </div>
            </div>
        </div>
    </div>
)