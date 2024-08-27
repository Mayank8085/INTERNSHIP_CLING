import { useSelector } from "react-redux"


export const PaymentInfo = ({ setPaymentModal }) => {
    const user = useSelector((state) => state?.commonReducer?.influencerDetails)
    
    return (
        <div class="card card-dashboard-calendar br-0 text-left pd-0 mt-2">
            <table class="table-striped table-myaccount">
                <thead class="bg-theme">
                    <tr>
                        <th>Payment Information</th>
                        <th class="pull-right text-right">
                            <button data-toggle="modal" data-target="#payinformation" class="btn btn-white btn-icon-text" onClick={() => setPaymentModal(true)}><i class="fe fe-edit me-2"></i> Edit</button>
                            {/* </a> */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Beneficiary name</td>
                        <td>{user?.acc_name}</td>
                    </tr>
                    <tr>
                        <td>Bank name</td>
                        <td>{user?.bank_name}</td>
                    </tr>
                    <tr>
                        <td>Account No.</td>
                        <td>{user?.acc_no}</td>
                    </tr>

                    <tr>
                        <td>IFSC code</td>
                        <td>{user?. ifs_code}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}