import React from "react";
import ElementKnowledge from "../componentspage/Element-knowledge";
import knowledgedatas from "../data/knowledgedatas";
import './subknowledge.css';
const Subknowfront = () => {
                    const knowledgeList = knowledgedatas.map((knowledgedata, index) => {
                                        return (
                                          <ElementKnowledge
                                              key={index}
                                              title={knowledgedata.topic}
                                              description={knowledgedata.description}
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
export default Subknowfront;