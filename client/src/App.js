import './App.css';
import ListContact from './Components/ListContact';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import AddContact from './Components/AddContact';

function App() {
  return (
    <div className="App">
  

   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as= {Link} to="/">Home</Nav.Link>
            <Nav.Link href="/add">Link</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/' element={<ListContact />} />
      <Route path='/add' element={<AddContact />} />
    </Routes>
    </div>
  );
}

export default App;
