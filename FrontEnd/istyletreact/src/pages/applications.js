import React from "react";
import BlockApp from "./componentspage/Block-app";
import './applications.css';
import appdatas from "./data/appdatas";
const Applications = () => {
                    const appList = appdatas.map((appdata, index) => {
                         return (
                           <BlockApp
                               key={index}
                               title={appdata.title}
                               description={appdata.description}
                               thumbnailUrl={appdata.thumbnailUrl}
                           />
                         );
                    });
                    return (
                       <main className="main-applications p-1">
                          {appList}
                       </main>
                    );
};
export default Applications;