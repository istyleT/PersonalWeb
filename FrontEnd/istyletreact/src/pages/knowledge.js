import React from "react";
import './knowledge.css';
import ElementKnowledge from "./componentspage/Element-knowledge";
import knowledgedatas from "./data/knowledgedatas";
const Knowledge = () => {
                      const knowledgeList = knowledgedatas.map((knowledgedata, index) => {
                        return (
                          <ElementKnowledge
                              key={index}
                              title={knowledgedata.topic}
                              description={knowledgedata.description}
                              thumbnailUrl={knowledgedata.thumbnailUrl}
                          />
                        );
                    });
                    return (
                       <main className="main-knowledge">
                          <div className="d-flex align-items-center p-3 my-2 text-white bg-purple rounded shadow-sm bg-dark">
                            <img className="me-3" src="/docs/5.0/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38"/>
                            <div className="lh-1">
                              <h1 className="h6 mb-0 text-white lh-1">I-styleT</h1>
                              <small>Since 2011</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-evenly">
                              <div className="m-3 p-3 rounded shadow-sm bg-dark" align="center">
                               <h3 className="border-bottom pb-2 mb-0 text-light">Basic Command</h3>
                                  {knowledgeList}
                              </div>
                              <div className="m-3 p-3 rounded shadow-sm bg-dark" align="center">
                               <h3 className="border-bottom pb-2 mb-0 text-light">Main Concept</h3>
                                  {knowledgeList}
                              </div>
                          </div>
                          
                       </main>
                      );
};
export default Knowledge;