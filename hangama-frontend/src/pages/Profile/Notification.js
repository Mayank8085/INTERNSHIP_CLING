

export const Notification = ({setNotificationModal}) =>{
    return(
        <div class="card card-dashboard-calendar br-0 text-left pd-0 mt-2">
                            <table class="table-striped table-myaccount">
                                <thead class="bg-theme">
                                    <tr>
                                        <th>Notification Preferences</th>
                                        <th class="pull-right text-right">
                                            <button data-toggle="modal" data-target="#notification" class="btn btn-white btn-icon-text" onClick={()=>setNotificationModal(true)}><i class="fe fe-edit me-2"></i> Edit</button>
                                            {/* </a> */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="strong">Emails</td>
                                        <td>hello@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td class="strong">Transaction Status Updates</td>
                                        <td>Immediate Notification</td>
                                    </tr>
                                    <tr>
                                        <td class="strong">New Message</td>
                                        <td>Immediate Notification</td>
                                    </tr>
                                    <tr>
                                        <td class="strong">New Marketplace Offers</td>
                                        <td>Disabled</td>
                                    </tr>
                                    <tr>
                                        <td class="strong">Push Subscriptions</td>
                                        <td>dgvdfbhfgnfgnf</td>
                                    </tr>
                                    <tr>
                                        <td class="strong">Status</td>
                                        <td>Disabled</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    )
}