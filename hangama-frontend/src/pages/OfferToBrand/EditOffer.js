

export const EditOffer = ({ showEditModal, setShowEditModal }) => {
    return (
        <div class={`${showEditModal ? 'opem-modal fade show modal-bg' : 'modal fade'}`} id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    {/* <!--    <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> --> */}
                    <div class="modal-body pd-0 modals_body pd-8">
                        <h4 >Edit Offer</h4>


                        <div class="col-sm-12 mt-3">
                            <label class="mb-0">Offer Tittle</label>
                            <input type="text" class="form-control" name="" value="Free Blog Post" />
                        </div>


                        <div class="col-sm-12 mt-3">
                            <label class="mb-0">Start Date</label>
                            <input type="text" class="form-control" name="" value="05/Jan/2022  " />
                        </div>


                        <div class="col-sm-12 mt-3">
                            <label class="mb-0">End Date</label>
                            <input type="text" class="form-control" value="09/Jan/2022 " />

                        </div>


                        <div class="col-sm-12 mt-3">
                            <label class="mb-0">Offer Description</label>
                            <input type="text" class="form-control" name="" value="Coca Cola" />

                        </div>


                    </div>
                    <div class="modal-footer mt-4">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setShowEditModal(false)} >Cnacel</button>
                        <button type="button" class="btn btn-primary btn-icon-text my-2 me-2" data-dismiss="modal" style={{background: '#2a76f4',border: 0}}>Update</button>

                    </div>
                </div>
            </div>
        </div>
    )
}