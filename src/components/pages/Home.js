import React, { useEffect } from 'react'
import styled from 'styled-components';
import Card from  '../Card'
import axios from 'axios';

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`

function Home() {

  const [data, setData] = React.useState([]);

  const fetchContent = async () => {
    axios.get("http://localhost:8000/upload")
        .then((res) => {
            
            setData(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchContent()
    }, [])
  return (
   <Container>
        {
            data.map((item, index) => (
                <Card key={index} data={item} />
        ))}
   </Container>
  )
}

export default Home