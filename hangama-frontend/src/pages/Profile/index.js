import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { Footer } from "../../components/Footer";
import "./profile.css";
import { checkActivePage } from "../../store/activePageSlice";
import { PersonalInfo } from "./PersonaInlfo";
import { CampaignInfo } from "./CampaignInfo";
import { SocialInfo } from "./SocialInfo";
import { MsgTemplate } from "./MsgTemplate";
import { Notification } from "./Notification";
import { PaymentInfo } from "./PaymentInfo";
import { AboutInfo } from "./AboutInfo";
import { PersonalInfoModal } from "./PersonalInfoModal";
import { AboutModal } from "./AboutModal";
import { CampaignModal } from "./CampaignModal";
import { MessageModal } from "./MessageModal";
import { NotificationModal } from "./NotificationModal";
import { PaymentModal } from "./PaymentModal";
import { SocialModal } from "./SocialModal";

export const Profile = () => {
    const [personalInfoModal, setShowPersonalInfoModal] = useState(false);
    const [socialModal, setSocialModal] = useState(false);
    const [campaignModal, setCampaignModal] = useState(false);
    const [aboutModal, setAboutModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);
    const [notificationModal, setNotificationModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("profile"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <div class="container-fluid">
                <div class="inner-body">
                    {/* <!-- Row --> */}
                    <div class="row " >
                        <div class="col-md-12 mt-4">
                            <h4>My Profile</h4>
                        </div>
                        <div class="col-md-12 mt-2"></div>
                        <div class="col-md-6">
                            <PersonalInfo setShowPersonalInfoModal={setShowPersonalInfoModal} />
                            <CampaignInfo setCampaignModal={setCampaignModal} />
                            <AboutInfo setAboutModal={setAboutModal}/>
                        </div>
                        <div class="col-md-6">
                            <SocialInfo setSocialModal={setSocialModal} />
                            <MsgTemplate setMessageModal={setMessageModal} />
                            <Notification setNotificationModal={setNotificationModal} />
                            <PaymentInfo setPaymentModal={setPaymentModal} />
                        </div>
                        <div class="col-sm-12 mt-4"></div>
                    </div>
                </div>
            </div>
            <PersonalInfoModal personalInfoModal={personalInfoModal} setShowPersonalInfoModal={setShowPersonalInfoModal} />
            <SocialModal socialModal={socialModal} setSocialModal={setSocialModal} />
            <AboutModal aboutModal={aboutModal} setAboutModal={setAboutModal} />
            <CampaignModal campaignModal={campaignModal} setCampaignModal={setCampaignModal} />
            <MessageModal messageModal={messageModal} setMessageModal={setMessageModal} />
            <NotificationModal notificationModal={notificationModal} setNotificationModal={setNotificationModal} />
            <PaymentModal paymentModal={paymentModal} setPaymentModal={setPaymentModal} />
            <Footer />
        </AdminPanelLayout>
    )
}