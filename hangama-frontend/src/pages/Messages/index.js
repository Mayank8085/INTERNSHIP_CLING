import React from "react";

const Messages = () => {
    return (
        <div class="container-fluid">
            <div class="card card-dashboard-calendar bd1 mb-1 text-center mt-4 mt-xs-70">
                <div class="row">
                    <div class="col-sm-12 text-right"><p class="mb-0">0 results</p></div>

                    <div class="col-sm-3 text-left">
                        <label>Campaign</label>
                        <select class="form-control ">
                            <option value="" selected="selected">All</option>
                        </select>


                    </div>

                    <div class="col-sm-3 text-left">
                        <label>Influencer</label>
                        <select class="form-control ">
                            <option value="" selected="selected">All</option>
                        </select>


                    </div>


                    <div class="col-sm-3 text-left">
                        <label>Status</label>
                        <select class="form-control">
                            <option value="" selected="selected">Active</option><option value="Unread">Unread</option><option value="Read">Read</option><option value="Favorites">Favorites</option><option value="All">All</option><option value="NEWTOCAMPAIGN">New to Campaign</option><option value="NEWAPPLICATION">New Application</option><option value="APPLICATIONEXPIRED">Application Expired</option><option value="CONTACTED">Contacted</option><option value="INFLUENCERDECLINED">Declined Opportunity</option><option value="BRANDDECLINED">Application Declined</option><option value="PITCHSENT">Pitch Sent</option><option value="PITCHACCEPTED">Pitch Accepted</option><option value="PITCHDECLINED">Pitch Declined</option><option value="PITCHEXPIRED">Pitch Expired</option><option value="PRODUCTSENT">Product Sent</option><option value="PRODUCTPURCHASED">Product Purchased</option><option value="PRODUCTRECEIVED">Product Received</option><option value="PAYMENTSENT">Payment Sent</option><option value="PAYMENTRECEIVED">Payment Received</option><option value="COUPONCODE">Coupon Code Needed</option><option value="COUPONCODESENT">Coupon Code Sent</option><option value="POSTED">Work Posted</option><option value="REVISIONS">Revisions Requested</option><option value="COMPLETED">Completed</option><option value="BRANDARCHIVED">Archived by Brand</option><option value="INFLUENCERARCHIVED">Archived by Influencer</option><option value="ADMINARCHIVED">Archived by Admin</option></select>


                    </div>
                    <div class="col-lg-3 text-left ">
                        <label>Keyword</label> <div class="input-group"> <input class="form-control" type="text" /> <span class="input-group-btn" /><button class="btn ripple btn-primary br-0" type="button"> <span class="input-group-btn"><i class="fa fa-search"></i></span></button> </div> </div>



                    <div class="col-sm-12 mt-4">
                        <p class="no_msg">No messages found. Tired of being lonely? Create a campaign so you can begin interacting with influencers!</p>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default Messages;