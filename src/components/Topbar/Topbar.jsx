import React from "react";
import "./Topbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
   return ( 
      <div className="topbar">
         <div className="topbarWrapper">
            <div className="topLeft">
               <span className="logo">Lilac 🪻</span>
            </div>

            <div className="topRight">
               <div className="topbarIconContainer">
                  <NotificationsIcon/>
               </div>

            </div>
         </div>
      </div>
   );
}
