import React from 'react'
import "./Feature.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Feature() {
  return (
    <div className='features'>
          <div className="featureItem">
               <span className="featureTitle">
                    Revenue
                    <div className="featureContainer">
                         <span className="featureMoney">
                              $3.234 
                         </span>
                         <span className="featureRate">
                              -11.3 <ArrowDownwardIcon className='featureIcon negative'/>
                         </span>
                    </div>
                    <span className='featureSub'>
                         Compared to last month
                    </span>
               </span>
          </div>
          <div className="featureItem">
               <span className="featureTitle">Sales</span>
               <div className="featureContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureRate">
                         -1.4 <ArrowDownwardIcon className="featureIcon negative" />
                    </span>
          </div>
          <span className="featureSub">Compared to last month</span>
          </div>
         <div className="featureItem">
               <span className="featureTitle">Cost</span>
               <div className="featureContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureRate">
                         +2.4 <ArrowUpwardIcon className="featureIcon" />
                    </span>
               </div>
               <span className="featureSub">Compared to last month</span>
         </div>
    </div>
  )
}
