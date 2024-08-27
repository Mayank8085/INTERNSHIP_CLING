import React, { useEffect } from "react";

import { Switch, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AuthBlockedRoute } from "./components/routes";
import Loader from "./components/loader/index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
// import Route from "./components/NotProtectedRoute";
import { Campaigns } from "./pages/Campaigns";
import { Schedule } from "./pages/Schdeule";
import { SET_LOADER } from "./redux/actions";
// import { ReferralBrand } from "./pages/ReferralBrand";
// import { ReferralInfluencer } from "./pages/ReferralInfluencer";
import { WalletRequest } from "./pages/WalletRequest";
import { WalletEarning } from "./pages/WalletEarning";
import { OfferToBrand } from "./pages/OfferToBrand";
import { OfferFromHungama } from "./pages/OfferFromHungama";
import { Badges } from "./pages/Badges";
import { Profile } from "./pages/Profile";
import BrandDashboard from "./pages/BrandDashboard";
import BrandCampaingns from "./pages/BrandCampaigns";
import PaymentHistory from "./pages/Payments/PaymentHistory";
import HungamaOffers from "./pages/Offers/HungamaOffers";
import InfluencersOffers from "./pages/Offers/InfluencersOffers";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { localStorageConstants } from "./utils/constants";
import { useHistory } from "react-router-dom";
import useUserHook from "./hooks/useUserHook";

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="pt-3 text-center">
      <ClipLoader
        loading={loading}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

const App = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { saveUserDetailsInRedux } = useUserHook();
  const loading = useSelector((state) => state.commonReducer.loader);

  const token = new URLSearchParams(window.location.search).get("token");
  console.log("token", token);

  useEffect(() => {
    if (localStorage.getItem(localStorageConstants.accessToken)) {
      saveUserDetailsInRedux();
      history.push("/dashboard");
    }
    if (token) {
      localStorage.setItem(localStorageConstants.accessToken, token);
      // saveUserDetailsInRedux();
      history.push("/dashboard");
    } else if (!localStorage.getItem(localStorageConstants.accessToken)) {
      history.push("/login");
    }
    // saveUserDetailsInRedux();
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard1" component={BrandDashboard} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/campaigns1" component={BrandCampaingns} />
        <Route path="/schedule" component={Schedule} />
        {/* <Route path="/refer-brand" component={ReferralBrand} /> */}
        {/* <Route path="/refer-influencer" component={ReferralInfluencer} />
        <Route path="/refer-influencer" component={ReferralInfluencer} /> */}
        <Route path="/earning-details" component={WalletEarning} />
        <Route path="/payment-request" component={WalletRequest} />
        <Route path="/offer-to-brand" component={OfferToBrand} />
        <Route path="/offer-from-hungama" component={OfferFromHungama} />
        <Route path="/badges" component={Badges} />
        <Route path="/profile" component={Profile} />
        <Route path="/payment/payment-history" component={PaymentHistory} />
        <Route
          path="/offers/influencers-offers"
          component={InfluencersOffers}
        />
        <Route path="/offers/hungama-offers" component={HungamaOffers} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
export { Loading };
