

export const ReferralPart = ({setShowModal}) =>{
    return(
        <div class="row pb-40">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-6 referral-code">
                            <h3>Your Referral code is </h3>
                            <h4>#33345GhIF</h4>
                        </div>
                        <button class="col-sm-3 btn btn-primary mb-4" data-toggle="modal" data-target="#exampleModalLong1" onClick={()=>setShowModal(true)}>Add Referral</button>
                    </div>
    )
}