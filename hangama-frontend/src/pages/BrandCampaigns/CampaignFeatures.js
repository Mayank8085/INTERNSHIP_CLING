import React from "react";
import styled from "styled-components";

const CampaignFeatures = () => (
    <div className="container-fluid pd-0">
        <div className="row">
            <div className="col-md-12 col-sm-12 mt-1">
                <UL>
                    <LI className="card custom-card">
                        <h4>Total Campaigns </h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4>Running</h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4>Pitches</h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4>Completed</h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4>Draft</h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4>Archive</h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4>Need Action</h4>
                        <a href="#"><span>0</span></a>
                    </LI>
                    <LI className="card custom-card">
                        <h4 className="mb-3">Messages</h4>
                        <Message href="#">0 unread</Message>
                        <p className="mb-1"></p>
                    </LI>
                </UL>
            </div>
        </div>
    </div>
)

export default CampaignFeatures;

const Message = styled.a`
    font-size: 17px !important;
    background: #e7eaf4;
    border-radius: 20px;
    padding: 4px 15px;
    color: #000;
    margin-bottom: 0;
`;

const UL = styled.ul`
    margin: 0px;
    padding: 0 !important;
    border-bottom: 2px solid #2a76f4;
`;

const LI = styled.li`
    display: inline-block;
    width: 12%;
    border-radius: 0;
    text-align: center;
    padding: 26px 0px;
    margin-bottom: 0;
    min-height: 104px;
    max-height: 100%;
    box-shadow: 0 10px 30px 0 rgb(24 28 33 / 5%);
    position: relative;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    margin-right: 5px;
    h4 {
        font-size: 16px;
        margin-bottom: 0;
        color: #000;
    }
    span {
        font-weight: bold;
        font-size: 30px;
        color: #2a76f4;
    }
`;