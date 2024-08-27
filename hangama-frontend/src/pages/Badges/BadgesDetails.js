

export const BadgesDetails = ({showModal,setShowModal}) => {
    return (
        <div class={`${showModal ? 'opem-modal fade show modal-bg  modal-scroll' : 'modal fade'}`} id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    {/* <!--    <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> --> */}
                    <div class="modal-body pd-0 modals_body pd-8">
                        <h4 >Badges Details</h4>


                        <div class="col-sm-12 mt-3 text-left">
                            <p class="text-center"><img src={require("../../assets/img/1.png")} width="80px" class="text-center" /></p>
                            <h5 class="text-center">Top Influencers </h5>
                            <h6 class="description mt-2">Description</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>


                            <h6 class="description mt-2">Badge Earned Date </h6>
                            <p class="badge-details">05/Jan/2022 </p>


                            <h6 class="description mt-2">How to earn this badge  </h6>
                            <p class="badge-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                        </div>



                    </div>



                    <div class="modal-footer mt-4">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>{setShowModal(false)}} >Cnacel</button>

                    </div>
                </div>
            </div>
        </div>
    )
}