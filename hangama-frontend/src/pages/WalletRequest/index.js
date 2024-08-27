

import { useEffect, useState } from "react";
import { useDispatch,dispatch } from "react-redux";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import { RequestTable } from "./RequestTable";
import { Topcards } from "./TopCards";
import "./walletRequest.css";

export const WalletRequest = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkActivePage("wallet"));
    }, [dispatch]);
    return (
        <AdminPanelLayout>
            <Topcards/>
            <RequestTable/>
        </AdminPanelLayout>
    )
}