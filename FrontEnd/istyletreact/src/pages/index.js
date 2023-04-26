import React from "react";
import './firstpage.css'
const Home = () => {
                    return (
                              <main className="main-firstpage d-flex justify-content-center align-items-center p-3">
                                    <div className="w-50 justify-content-evenly px-3">
                                       <div className="profile-content d-flex flex-column justify-content-center font-monospace mb-3">
                                          <h2 className="profile-content mb-3 text-center">I-style T Dev</h2>
                                          <p className="text-wrap text-center font-monospace mb-3 px-2"> 
                                               lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                         </p>
                                       </div>
                                       <div className="d-flex flex-column justify-content-around align-items-center">
                                           <a className="profile-link p-3 w-50 profile-content btn btn-danger font-monospace rounded-pill mb-3 fw-bold">View Profile</a>
                                           <a className="profile-link p-3 w-50 profile-content btn btn-danger font-monospace rounded-pill mt-3 fw-bold">Let's Talk</a>           
                                       </div>
                                    </div>
                                    <div className="profile-pic w-50 p-0">
                                       <img className="w-100 h-100" loading="eager" alt="ProfilePicture" src="/images/profile5.png" />
                                    </div>
                              </main>
                    );
};
export default Home;