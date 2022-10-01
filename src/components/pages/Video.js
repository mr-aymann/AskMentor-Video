import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios'


const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;


const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

let url = localStorage.getItem("id");
let title= localStorage.getItem("title");

function Video() {

  

  useEffect(() => {
   if(localStorage.getItem("reload") === "true"){
    window.location.reload();
    localStorage.setItem("reload","false")
   }

    
  }, [])


  return (
    <Container>
        <Content>
        <div style={{maxWidth : "800px"}}>
        <video 
          id="my-video"
          className="video-js"
          controls
          
          width="640"
          height="400"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}">
          
      <source src={url} type="video/mp4"/>
      
   </video>
      </div>
            <Title>{title}</Title>
        </Content>
    </Container>
  ) 
}

export default Video