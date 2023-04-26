import React from "react";
import './Element-knowledge.css';
const ElementKnowledge = (props) => {
                    const {title, description, thumbnailUrl} = props;
                    return(
                       <div className="main-element-knowledge d-flex justify-content-center text-light p-3 bg-dark">
                          <img src={thumbnailUrl} className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="48px" height="48px"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
                          <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="float-start d-block text-gray-dark">{title}</strong>
                            {description}
                          </p>
                        </div>
                    );
}
export default ElementKnowledge;