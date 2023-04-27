import React from "react";
import ElementKnowledge from "../componentspage/Element-knowledge";
import conceptknowledgedatas from "../data/conceptknowledgedatas";
import './subknowledge.css';
const Subknowconcept = () => {
     const knowledgeList = conceptknowledgedatas.map((knowledgedata, index) => {
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
export default Subknowconcept;