import React from "react";
import './firstpage.css'
const Home = () => {
                    return (
                              <main className="main-firstpage d-flex justify-content-around align-items-center p-3">
                                    <div className="w-50 justify-content-evenly px-3">
                                       <div className="d-flex flex-column justify-content-center font-monospace mb-3">
                                          <h1 className="profile-head mb-2 text-center fw-bold">I-style T Dev</h1>
                                          <p className="profile-content text-wrap text-center font-monospace mb-3 mt-2 px-2"> 
                                               lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                         </p>
                                       </div>
                                       <div className="d-flex flex-column justify-content-around align-items-center">
                                           <a className="profile-link p-3 w-50 profile-content btn font-monospace rounded-pill mb-3 fw-bold">View Profile</a>
                                           <a className="profile-link p-3 w-50 profile-content btn font-monospace rounded-pill mt-3 fw-bold">Let's Talk</a>           
                                       </div>
                                    </div>
                                    <div className="profile-pic w-50 px-1 ms-5">
                                       <img className="w-80 h-100" loading="eager" alt="ProfilePicture" src="/images/wallpaperflare.com1_wallpaper.jpg"/>
                                    </div>
                              </main>
                    );
};
export default Home;