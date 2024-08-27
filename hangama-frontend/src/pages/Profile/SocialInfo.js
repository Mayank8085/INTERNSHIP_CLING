

export const SocialInfo = ({setSocialModal}) => {
    return (
        <div class="card card-dashboard-calendar br-0 text-left pd-0">
            <table class="table-striped table-myaccount">
                <thead class="bg-theme">
                    <tr>
                        <th colspan="3">Social Accounts</th>
                        <th class="pull-right text-right">
                            <button data-toggle="modal" data-target="#social" class="btn btn-white btn-icon-text"  onClick={()=>setSocialModal(true)}><i class="fe fe-edit me-2"></i> Edit</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Social Platform</th>
                        <th>Reference tag</th>
                        <th>Social acccount link</th>
                        <th>Status</th>
                        {/* <!--    <th>Action</th> --> */}
                    </tr>
                    <tr>
                        <td>Facbook</td>
                        <td>Ajay</td>
                        <td>facbook.com/hungamainfluencers</td>
                        <td><button class="btn btn-danger">Unverified</button></td>

                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td>Vijay</td>
                        <td>twitter.com/hungamainfluencers</td>
                        <td><button class="btn btn-success ">Verified</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}