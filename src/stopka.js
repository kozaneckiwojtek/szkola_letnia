import React from 'react';

import { Link } from "react-router-dom"

import './css/stopka_style.css';
import social from './img/social.png'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stopka = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Container fluid className='stopka'>

      <Row className='wier'>
        <Col className='kol col-sm-12 col-md-12 col-lg-3'>
          <h2 class="naglowek_duzy">SZKOŁA LETNIA</h2>
          <p class="pod_opis">FOLLOW US</p>
          <img src={social} alt="social" />
        </Col>
        <Col className='kol col-sm-12 col-md-12 col-lg-3'>
          <h2 className="naglowki">KONTAKT</h2>
          <ul className="footer-kontakt">
            <li id="adres">ul. Szkolna 4, 05-077 Warszawa</li>
            <li id="tel">+48 123-456-789</li>
            <li id="mail">szkola.letnia@edu.pl</li>
          </ul>
        </Col>
        <Col className='kol col-sm-12 col-md-12 col-lg-3'>
          <h2 class="naglowki">LINKI</h2>
          <ul class="footer-list">
            <li><Link to="/" onClick={scrollToTop}>Opis</Link></li>
            <li><Link to="/kursy" onClick={scrollToTop}>Kursy</Link></li>
            <li><Link to="/form" onClick={scrollToTop}>Formularz rejestracyjny</Link></li>
          </ul>
        </Col>
        <Col className='kol col-sm-12 col-md-12 col-lg-3'>
          <h2 class="naglowki">MASZ PYTANIA?</h2>
          <form id="pytnie_form" name="pytania" action="/pytania" method="post" /*onSubmit={onSubmit} ref={formRef}*/ acceptCharset="UTF-8">
            <input type="hidden" name="form-name" value="pytania" />
            <input type="text" name="pytanie" class="tekst" id="pytanie" placeholder="Wprowadź tekst" />
            <button type="submit" class="wyslij" onClick={() => window.location.reload()} onclick={scrollToTop()}>Wyślij</button>
          </form>
        </Col>
      </Row>

    </Container>



  );
}

export default Stopka;