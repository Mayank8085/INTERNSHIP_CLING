

export const AddNoteCampaign = ({setShowModal,showModal}) => {
    return (
        <div class={`${showModal ? 'opem-modal fade show modal-bg' : 'modal fade'}`} id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    {/* <!--    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> --> */}
                    <div class="modal-body pd-0 modals_body pd-8">
                        <h4 >Add Referral</h4>
                        <div class="col-sm-12 text-center">
                            <h5 class="mb-4 mt-4">Do you want accpet / approved this campaign </h5>
                            <button class="btn btn-success  mr-2">Yes</button>
                            <button class="btn btn-danger" onClick={()=>setShowModal(false)}>NO</button>
                        </div>
                    </div>
                    <div class="modal-footer mt-4">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setShowModal(false) }>Cnacel</button>
                        <button type="button" class="btn btn-primary btn-icon-text my-2 me-2" data-dismiss="modal" style={{background: '#2a76f4',border: 0}}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}