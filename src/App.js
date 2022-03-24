
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import CalPage from './components/calPage/CalPage';


function App() {
  return (
    <div >
      <Header></Header>

     <Container>


     <Routes>
        <Route exact path="/" element={<CalPage />} />
        <Route path="/header" element={<Header />} />
        
        
      </Routes>
       
      </Container>
      
    </div>
  );
}

export default App;
