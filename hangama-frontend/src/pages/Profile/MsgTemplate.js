


export const MsgTemplate = ({ setMessageModal }) => {
    return (
        <div class="card card-dashboard-calendar br-0 text-left pd-0 mt-2">
            <table class="table-striped table-myaccount">
                <thead class="bg-theme">
                    <tr>
                        <th>Message Templates (0)</th>
                        <th class="pull-right text-right">
                            <button data-toggle="modal" data-target="#messagetemplates" class="btn btn-white btn-icon-text" onClick={() => setMessageModal(true)}><i class="fe fe-edit me-2" onClick={() => setMessageModal(true)}></i> Edit</button>
                            {/* </a> */}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}