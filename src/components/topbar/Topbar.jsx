import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function 
() {
  return (
    <div>
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        AdminPanel
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="../images/avatar.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    </div>
  )
}
