

import { useEffect, useState } from "react";
import { useDispatch, dispatch } from "react-redux";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import { EarningTable } from "./EarningTable";
import { TopCards } from "./TopCards";
import "./walletEarning.css";

export const WalletEarning = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("wallet"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <TopCards/>
            <EarningTable/>
        </AdminPanelLayout>
    )
}