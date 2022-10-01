import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';


import "./sidebar.css";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">AskMentor</h3>
        <ul className="sidebarList">
          
          <li className="sidebarListItem active ">
            <HomeIcon className="sidebarIcon" />
            Home
          </li>
         
          <li className="sidebarListItem  ">
            <CampaignIcon className="sidebarIcon" />
            Videos
          </li>
          
        </ul>
      </div> 
    </div>
  </div>
  )
}

export default Sidebar