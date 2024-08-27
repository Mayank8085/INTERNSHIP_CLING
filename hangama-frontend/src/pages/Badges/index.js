import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/Footer";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import "./badges.css";
import { BadgesDetails } from "./BadgesDetails";
import { BadgesTable } from "./BadgesTable";
import { TopCards } from "./TopCards";
import useQueryMutation from "../../hooks/useQueryMutation";
import apiClient from "../../apis/api-client";
import apiUrls from "../../apis/apis";

export const Badges = () => {
  const [showModal, setShowModal] = useState(false);
  const [influBadgeData, setInfluBadgeData] = useState([]);
  const dispatch = useDispatch();
  const getInfluBadge = async () => {
    const res = await apiClient.get("api/v1/influencer_badges/influencer/17");
    console.log(res.data);
    setInfluBadgeData(res?.data);
  };
  useEffect(() => {
    dispatch(checkActivePage("badges"));
    getInfluBadge();
  }, []);
  return (
    <AdminPanelLayout>
      <TopCards />
      <BadgesTable
        setShowModal={setShowModal}
        influBadgeData={influBadgeData}
      />
      <BadgesDetails showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </AdminPanelLayout>
  );
};
