import React from "react";
import './contact.css';
import FormContact from "./componentspage/Formcontact";
import SidebarCommunity from "./componentspage/Sidebar-community";
import JoinAuctionBox from "./componentspage/Join-auction-box";
const Contact = () => {
                    return (
                                        <main className="main-contact d-flex">
                                                   <SidebarCommunity/>
                                                   <FormContact/>         
                                                   <JoinAuctionBox/>
                                        </main>
                    );
};
export default Contact;