import React from 'react';
import {Svg} from "@pancakeswap-libs/uikit";

function AdditionalHeader() {
    return (<style>
        {`.columns-cad {
            display: flex;
           }
           @media screen and (max-width: 600px) {
            .columns-cad {
                flex-direction: column;
            }
           }
           
           .column-cad {
            flex-grow: 1;
           }
           
           .button-cad {width: 100%; }
          `}</style>);
}

function HiveLogo() {
    return (<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190"><defs><style>{`.cls-1{fill:#e31337;}`}</style></defs><title>hive-hive-logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z"/><path className="cls-1" d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z"/></g></g></Svg>)
}

export default AdditionalHeader;
export {HiveLogo};