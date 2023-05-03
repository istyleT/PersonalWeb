import React from "react";
import './Auction-item.css';
const AuctionItem = (props) => {

                    return (
                                        <div className="main-auction-item mb-2 fw-bold font-monospace rounded-3 d-flex align-items-center">
                                          <img src="../images/unnamed.png" alt="auction-card" className="me-2"  width="95px" height="136px"/>
                                          <div className="d-flex flex-column">
                                             
                                             <div className="d-flex justify-content-end align-items-center">
                                                <label>start: 300 B</label>
                                                <button className="float-end btn rounded-circle p-0">
                                                    <img src="../images/icons8-check-mark-button-48.png" alt="delete-btn" width="35px" height="35px"/>
                                                </button>
                                                <button className="float-end btn rounded-circle p-0">
                                                    <img src="../images/icons8-close-window-48.png" alt="delete-btn" width="35px" height="35px"/>
                                                </button>
                                             </div>
                                             <p>details auction </p>

                                          </div>
                                          
                                         </div>
                    );
};
export default AuctionItem;      