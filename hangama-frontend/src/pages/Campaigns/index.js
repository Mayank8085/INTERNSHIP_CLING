import { Fragment, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { BackToTop } from "../../components/BackToTop";
import { Footer } from "../../components/Footer";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from '../../store/activePageSlice';
import { ApproveCampaign } from "./ApproveCampaign";
import "./campaigns.css";
import { CampaignsTable } from "./CampaignsTable";
import { TopCampaignCards } from "./TopCampaignCards";

export const Campaigns = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("campaigns"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <div class="main-content side-content pt-0 ml-0">
                <TopCampaignCards />
                <CampaignsTable setShowModal={setShowModal} />
            </div>
            <BackToTop/>
            <Footer />
            <ApproveCampaign showModal={showModal} setShowModal={setShowModal}/>
        </AdminPanelLayout>
    )
}

