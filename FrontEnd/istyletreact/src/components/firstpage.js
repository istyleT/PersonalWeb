import './firstpage.css'
import NavbarMain from './navbarmain';
function FirstPage() {
return (
     <main className="main-firstpage d-flex justify-content-around align-items-center h-100">
                    <div className="w-50 justify-content-evenly">
                       <div className="profile-content d-flex flex-column font-monospace mb-3">
                          <h2 className="profile-content mb-3">I-style T Dev</h2>
                          <p className="text-wrap float-start font-monospace mb-3 px-2"> 
                               lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         </p>
                       </div>
                       <div className="d-flex flex-column justify-content-around align-items-center">
                           <a className="profile-content btn btn-dark font-monospace mb-3">View Profile</a>
                           <a className="profile-content btn btn-danger font-monospace">Let's talk</a>           
                       </div>
                    </div>
                    <div className="profile-pic w-50">
                       <img className="w-80" loading="lazy" alt="ProfilePicture" src="/images/lion-logopng-33400.png" />
                    </div>
     </main>
)
}
export default FirstPage;