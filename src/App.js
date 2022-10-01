import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Video from "./components/pages/Video";
import Create from './components/pages/Create';

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
 padding: 22px 96px
`



function App() {
  return (
    <Container>
      <BrowserRouter>
      <Sidebar />
      <Main>
        <Navbar/>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="video">
              <Route path=":id" element={<Video />} />
            </Route>
            <Route path ="create" element = {<Create/>}>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
