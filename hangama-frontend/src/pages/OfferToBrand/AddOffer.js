

export const AddOffer = ({showModal,setShowModal}) => {
    return (
        <div class={`${showModal ? 'opem-modal fade show modal-bg' : 'modal fade'}`}  id="addoffer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    {/* <!--    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> --> */}
                    <div class="modal-body pd-0 modals_body pd-8">
                        <h4 >Add Offer</h4>


                        <div class="col-sm-12 mt-3">
                            <label>Offer Title</label>
                            <input type="text" class="form-control" name="" readonly="" value="Free Blog Post" />
                        </div>


                        <div class="col-sm-12 mt-3">
                            <label>Start Date</label>
                            <input type="text" class="form-control" name="" readonly="" value="01/01/2022" />
                        </div>


                        <div class="col-sm-12 mt-3">

                            <label>End Date  </label>

                            <input type="text" class="form-control" value="01/02/2022" />

                        </div>

                        <div class="col-sm-12 mt-3">

                            <label>Offer Description </label>

                            <input type="text" class="form-control" name="" value="Coca Cola" />

                        </div>

                    </div>



                    <div class="modal-footer mt-4">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setShowModal(false)} >Cnacel</button>
                        <button type="button" class="btn btn-primary btn-icon-text my-2 me-2" data-dismiss="modal" style={{background: '#2a76f4',border: 0}}>Add</button>

                    </div>
                </div>
            </div>
        </div>
    )
}