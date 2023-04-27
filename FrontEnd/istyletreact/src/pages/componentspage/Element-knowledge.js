import React from "react";
import'./Element-knowledge.css';
const ElementKnowledge = (props) => {
                    const {title, thumbnailUrl, alt, linkurl} = props;
                    return(
                                        <div class="main-element-knowledge col-lg-6 bg-dark card rounded-circle p-2">
                                         <img src={thumbnailUrl}  alt={alt} className="bd-placeholder-img flex-shrink-0 rounded" width="60px" height="60px" focusable="false"/>
                                            <h4 className="text-light fw-bold mb-3">{title}</h4>
                                            <p><a class="btn btn-knowledge rounded-pill fw-bold" target="_blank" href={linkurl}>Details »</a></p>
                                        </div>
                    );
}
export default ElementKnowledge;