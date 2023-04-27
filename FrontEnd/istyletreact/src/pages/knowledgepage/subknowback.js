import React from "react";
import ElementKnowledge from "../componentspage/Element-knowledge";
import backknowledgedatas from "../data/backknowledgedatas";
import './subknowledge.css';
const Subknowback = () => {
                    const knowledgeList = backknowledgedatas.map((knowledgedata, index) => {
                                        return (
                                          <ElementKnowledge
                                              key={index}
                                              title={knowledgedata.topic}
                                              thumbnailUrl={knowledgedata.thumbnailUrl}
                                              alt={knowledgedata.alt}
                                              linkurl={knowledgedata.linkurl}
                                          />
                                        );
                                    });
                    return (
                        <div className="layout-sub-knowledge">
                            {knowledgeList}
                        </div>
                    );          
}
export default Subknowback;