import React from "react";
import './Block-app.css'
const BlockApp = (props) => {
                    const { title, description, thumbnailUrl } = props;
                    return (
  <div className="main-Block-app px-4 pt-5 mt-5 text-center  bg-dark text-light ">
    <h1 className="display-4 fw-bold">{title}</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">{description}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-outline-danger btn-lg px-4 me-sm-3">Visit</button>
        <button type="button" className="btn btn-outline-danger btn-lg px-4">Source Code</button>
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="container px-5" style={{maxHeight: 45 + 'vh'}}>
        <img src={thumbnailUrl} className="img-fluid border rounded-3 mb-4" alt="Example image" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
                    );
};
export default BlockApp;