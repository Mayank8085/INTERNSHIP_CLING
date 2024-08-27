import { useState } from "react";
import useQueryMutation from "../../hooks/useQueryMutation";
import useUserHook from "../../hooks/useUserHook";
import apiUrls from "../../apis/apis";
import { toast } from "react-toastify";
export const AboutModal = ({ aboutModal, setAboutModal }) => {
    const { getData } = useQueryMutation();
    const {saveUserDetailsInRedux} = useUserHook()
    const [bio , setBio] = useState("")
    const handleUpdate=() =>{
        getData({
            url: apiUrls?.profile?.editBio,
            postData: {
                bio: bio
            }, 
            onSuccess: async(data) => {
                setAboutModal(false);
              toast("Data updated Successfully");
              await saveUserDetailsInRedux()
              setBio("")
            },
            onFail: (err) => {},
          });
         
    }
    return (
        <div class={`${aboutModal ? 'opem-modal fade show modal-bg' : 'modal fade'}`} id="bio" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body pd-0 modals_body pd-8">
                        <h4>About You</h4>
                        <div class="row pl-4 pr-4">
                            <div class="col-sm-12 mb-3">
                                <label>Bio	</label>
                                <textarea onChange={(e) =>setBio(e.target.value)} class="form-control" value={bio} style={{ height: "200px" }}></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer mt-2">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setAboutModal(false)} >Cnacel</button>
                        <button onClick={handleUpdate} type="button" class="btn btn-primary btn-icon-text my-2 me-2" data-dismiss="modal" style={{background: '#2a76f4', border: 0}}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}