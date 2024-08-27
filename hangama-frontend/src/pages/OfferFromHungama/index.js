import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/Footer";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import { AcceptOffer } from "./AcceptOffer";
import "./offerFromHungama.css";
import { OfferTable } from "./OfferTable";
import { TopCards } from "./TopCards";

export const OfferFromHungama = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("offer"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <TopCards />
            <OfferTable setShowModal={setShowModal} />
            <AcceptOffer showModal={showModal}
                setShowModal={setShowModal} />
            <Footer />
        </AdminPanelLayout>
    )
}