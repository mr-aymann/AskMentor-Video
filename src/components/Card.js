import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function Card({data,keys}) {
    const [value, setValue] = React.useState(0);
    const [url, setUrl] = React.useState("");

    
    const navigate = useNavigate();

    

    useEffect(() => {

      const fetchVideo= async () => {
        const res= await axios.get(`http://localhost:8000/upload/find/${data._id}`)
        setUrl(res.data)
      }
     
        if (value === 0) {
            navigate("/");
        } else if (value === 1) {
            localStorage.setItem("id", data.url);
            localStorage.setItem("title", data.title);
            localStorage.setItem("reload", "true");
            navigate(`/video/${data._id}`);
           
        }
        fetchVideo()

    }, [value,navigate]);
  return (
 <Container>
        <Image  src={data.thumbnail} onClick={() => {
        setValue(1);
      }} />
        <Details>
            <ChannelImage />
            <Texts>
                <Title>{data.title}</Title>
                <ChannelName>YCombinator</ChannelName>
            </Texts>
        </Details>
 </Container>
  )
}

export default Card