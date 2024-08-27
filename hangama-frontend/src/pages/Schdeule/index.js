import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BackToTop } from "../../components/BackToTop";
import { Footer } from "../../components/Footer";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import { AddNoteCampaign } from "./AddNoteCampaign";
import { NextSchedule } from "./NextSchedule";
import { ScheduleCampaignTable } from "./ScheduleCampaignTable";
import { UpcomingSchedule } from "./UpcomingSchedule";


export const Schedule = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("schedule"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <div class="container-fluid pl-0 pr-15">
                <div class="row">
                    <div class="col-md-12" id="earnings">
                        <div class="row">
                            <UpcomingSchedule/>
                            <NextSchedule/>
                        </div>
                    </div>
                </div>
            </div>
            <ScheduleCampaignTable setShowModal={setShowModal}/>
            <BackToTop/>
            <Footer />
            <AddNoteCampaign setShowModal={setShowModal} showModal={showModal}/>
        </AdminPanelLayout>

    )
}