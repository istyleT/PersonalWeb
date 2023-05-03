import React from "react";
import './Sidebar-community.css';
import AuctionItem from './Auction-item'

const SidebarCommunity = () => {
                    return (
<nav className="aside-community d-flex flex-column flex-shrink-0 py-0 px-1 bg-dark">
    <div className="border-bottom border-danger border-4 px-1 py-2 d-flex justify-content-center align-items-center sticky-top bg-dark">
      <span className="fs-3 fw-bold font-monospace me-2">Auction List</span>
      <button className="btn rounded-circle p-2">
            <img src="../images/icons8-add-48.png" alt="icon-sheet" width="100%" height="100%"/>
      </button>
    </div>
    <ul className="nav nav-pills flex-column mt-2 mb-auto px-2" >
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
       <AuctionItem/>
    </ul>
  </nav>

                    );
};
export default SidebarCommunity;