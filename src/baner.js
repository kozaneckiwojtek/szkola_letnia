import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import zdj from "./img/phone.png";
import './css/baner_style.css';

const Baner = () => {
  return (
    <>
      <Container fluid className='baner'>
        <Row>
          <Col className='napis col-sm-12 col-md-12 col-lg-6'>
            <a href='./' id='szkolaletnia'><h1>SZKOŁA LETNIA</h1> </a>
          </Col>
          <Col className='navi col-sm-12 col-md-12 col-lg-4'>
            <ul className="baner_list">
              <li className="baner_elemen"><Link to="/">O nas</Link></li>
              <li className="baner_elemen"><Link to="/kursy">Kursy</Link></li>
              <li className="baner_elemen"><Link to="/form">Formularz</Link></li>
            </ul>
          </Col>
          <Col className='zadzwon col-sm-12 col-md-12 col-lg-2'>
            <Row>
              <Col xs={3}>
                <img src={zdj} alt="fav" />
              </Col>
              <Col xs={9}>
                <div>
                  <p>ZADWOŃ DO NAS</p>
                  <p><b>+48 123-456-789</b></p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Baner;
