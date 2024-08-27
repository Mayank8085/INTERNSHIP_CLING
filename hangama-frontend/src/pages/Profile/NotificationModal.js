


export const NotificationModal = ({notificationModal,setNotificationModal}) =>{
    return(
        <div class={`${notificationModal ? 'opem-modal fade show modal-bg' : 'modal fade'}`} id="notification" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-body pd-0 modals_body pd-8">
                  <h4>Notification Preferences</h4>
                  <div class="row pl-4 pr-4">
                     <div class="col-sm-4">
                        <label>Notification Preferences </label>
                      <select class="form-control">
                        
                        <option>Email</option>
                        <option>Text</option>
                        <option>Whatsapp</option>
                      </select>
                     </div>
                     <div class="col-sm-4">
                        <label>Transaction Status Updates </label>
                  <select class="form-control">
                        
                        <option>Normal</option>
                        <option>Immedeiate</option>
               
                      </select>
                     </div>
                     <div class="col-sm-4">
                        <label>New Marketplace Offers </label>
                          <select class="form-control">                        
                        <option>Normal</option>
                        <option>Immedeiate</option>
               
                      </select>
                     </div>
             
                     <div class="col-sm-4">
                        <label>Status </label>
                        <select class="form-control" >
                           <option>Block</option>
                           <option>Active</option>
                           <option>Disabled</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div class="modal-footer mt-2">
                  <button type="button" class="btn btn-danger" data-dismiss="modal"  onClick={()=>setNotificationModal(false)}>Cnacel</button>
                  <button type="button" class="btn btn-primary btn-icon-text my-2 me-2" data-dismiss="modal" style={{background: '#2a76f4', border: 0}}>Update</button>  
               </div>
            </div>
         </div>
      </div>
    )
}