

export const AcceptOffer = ({ showModal, setShowModal }) => {
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
                        <h4 >Accept Offer</h4>


                        <div class="col-sm-12 mt-3 text-center">
                            <h3>Do you  want to accept this offer </h3>

                            <button class="btn btn-success mr-2">Accept</button>
                            <button class="btn btn-danger">Decline</button>
                        </div>



                    </div>
                    <div class="modal-footer mt-4">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setShowModal(false)} >Cnacel</button>

                    </div>
                </div>
            </div>
        </div>
    )
}