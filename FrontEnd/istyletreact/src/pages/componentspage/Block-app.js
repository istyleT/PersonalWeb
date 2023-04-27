import React from "react";
import './Block-app.css'
const BlockApp = (props) => {
                    const { title, description, thumbnailUrl } = props;
                    return (
  <div className="main-Block-app px-1 pt-1 mt-5 text-center bg-dark text-light ">
    <h1 className="topic-app display-4 fw-bold">{title}</h1>
    <div className="col-lg-6 mx-auto">
      <p className="mb-3 font-monospace">{description}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
        <button type="button" className="link-app btn btn-danger btn-lg px-4 rounded-pill fw-bold fs-4">Visit</button>
        <button type="button" className="link-app btn btn-danger btn-lg px-4 rounded-pill fw-bold fs-4">Code</button>
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