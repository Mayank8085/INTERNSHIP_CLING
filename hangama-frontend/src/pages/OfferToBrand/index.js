import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/Footer";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import { AddOffer } from "./AddOffer";
import { EditOffer } from "./EditOffer";
import { OfferTable } from "./OfferTable";
import "./offerToBrand.css";
import { TopCards } from "./TopCards";

export const OfferToBrand = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("offer"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <TopCards/>
            <OfferTable 
                setShowModal={setShowModal}
                setShowEditModal={setShowEditModal}
                />
            <AddOffer 
                showModal={showModal} 
                setShowModal={setShowModal} />
            <EditOffer                
                showEditModal={showEditModal} 
                setShowEditModal={setShowEditModal}/>
            <Footer/>
        </AdminPanelLayout>
        )
}