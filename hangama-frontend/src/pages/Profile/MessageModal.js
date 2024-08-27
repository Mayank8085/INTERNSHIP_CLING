


export const MessageModal = ({messageModal,setMessageModal}) =>{
    return(
        <div class={`${messageModal ? 'opem-modal fade show modal-bg' : 'modal fade'}`} id="messagetemplates" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-body pd-0 modals_body pd-8">
                  <h4>Message Templates</h4>
                  <div class="row pl-4 pr-4">
                     <div class="col-sm-12">
                        <label>Message </label>
                        <textarea class="form-control" name="editor1" id="editor1" rows="4" cols="40"></textarea>
                     </div>
                  </div>
               </div>
               <div class="modal-footer mt-2">
                  <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setMessageModal(false)} >Cnacel</button>
                  <button type="button" class="btn btn-primary btn-icon-text my-2 me-2" data-dismiss="modal" style={{background: '#2a76f4', border: 0}}>Update</button>  
               </div>
            </div>
         </div>
      </div>
    )
}