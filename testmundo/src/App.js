import logo from './logo.svg';
import './App.css';
import { Button, Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
import { Filtros } from './components/Filtros';
import { Resultados } from './components/Resultados';
import { DataProvider } from './providers/DataProvider';


function App() {
  return (
    <DataProvider>
      <div className="main">
        <div className="main__container">
         <div className="row ">
          <Col lg="6" xs="12" md="12" xl="6" >
              <Filtros />
            </Col>
            <Col lg="6" xs="12"  xl="6">
              <Resultados />
          </Col>
         </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
