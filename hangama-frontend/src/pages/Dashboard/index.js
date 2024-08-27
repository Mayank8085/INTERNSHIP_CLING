import { AdminPanelLayout } from "../../layouts/admin-panel";
import { Stats } from "./Stats";
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from "../../components/Footer";
import { RecentTranscations } from "./RecentTranscations";
import { HungamaShowcase } from "./HungamaShowcase";
import { ImproveAllSkills } from "./ImproveAllSkills";
import { MarketplaceOpportunities } from "./MarketplaceOpportunities";
import '../../assets/css/influencer/dashboard.css';
import { Marketplace } from "./Marketplace";
import { Engagement } from "./Engagement";
import { Earnings } from "./Earnings";
import { HungamaCredits } from "./HungamaCredits";
import { CurrentEngagement } from "./CurrentEngagement";
import { DashboardBadges } from "./DashboardBadges";
import { EngagementDetails } from "./EngagementDetails";
import { PerformanceRatingScore } from "./PerformanceRatingScore";
import { checkActivePage } from '../../store/activePageSlice';
import { useEffect } from "react";
import { BackToTop } from "../../components/BackToTop";
import { localStorageConstants } from "../../utils/constants";
import { useHistory } from "react-router-dom";
const Dashboard = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("dashboard"));
    }, [dispatch]);

    const userDetails = useSelector((state) => state);
    console.log(userDetails,"setDetails")

useEffect(() => {
if(!localStorage.getItem(localStorageConstants.accessToken)){
history.push("/login")
}
},[])



    return (
        <AdminPanelLayout>
            <div class="container-fluid pl-0 pr-15">
                <div class="row">
                    <div class="col-md-12" id="earnings">
                        <div class="row">
                            <Engagement />
                            <Marketplace />
                            <Earnings />
                            <HungamaCredits />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                {/* <!-- Page Header --> */}
                <div class="row">
                    <div class="col-sm-12 col-lg-12 col-xl-6">
                        <CurrentEngagement />
                        <DashboardBadges />
                        <ImproveAllSkills />
                    </div>
                    <div class="col-sm-12 col-lg-12 col-xl-6">
                        <EngagementDetails />
                        <PerformanceRatingScore />
                        <MarketplaceOpportunities />
                    </div>
                </div>
            </div>
            <BackToTop/>
            <Footer />
        </AdminPanelLayout >
    )
}

export default Dashboard;