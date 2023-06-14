import opis1 from "./img/opis1.jpg";
import opis2 from "./img/opis2.jpg";
import opis3 from "./img/opis3.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/opis_style.css'

import brzezinski from './img/brzezinski.png'
import jakubowski from './img/jakubowski.png'
import kucharska from './img/kucharska.png'
import zalewski from './img/zalewski.png'

import { Link } from 'react-router-dom';

export function Opis() {
  return (
    <>
      <Container fluid className="opis">
        <Row>
          <Col sm={12} md={12} lg={9} id="tekst">
            <h1>Zapisz się do najlepszej szkoły letniej</h1>
            <p>
            Szkoła letnia to świetny sposób spędzenia wakacji. Pozwala ona połączyć intensywną naukę wraz z poznawaniem oraz integracją z innymi członkami. Zajęcia prowadzone są przez doświadczonych oraz kompetentnych wykładowców.<br/> Osoby biorące udział będą miały okazję na rozwinięcie swoich umiejętności w jednym z czterech pól związanych z informatyką tj. grafice komputerowej i druku 3D, programowaniu w języku C++, obsłudze baz danych przy pomocy języka SQL i Python, czy zarządzaniu lokalną siecią komputerową i administrowaniu serwerami.<br/> Oprócz warsztatów wieczorami prowadzone będą zajęcia, których tematy wychodzą poza ramy wybranego przez uczestnika kursu np. zagadnienia z zastosowań uczenia maszynowego oraz sztucznej inteligencji. Niektóre z nich będą prowadzone w języku angielskim przez zaproszonych z zagranicy gości.
            </p>
            <p className="button"><Link to="/form" className="button">Zapisz się</Link></p>
          </Col>



          <Col id="zdjecia" sm={12} md={12} lg={3}>
            <Row>
              <div className="d-flex justify-content-end">
                <img id="jeden" src={opis1} alt="obrazek1" />
              </div>
            </Row>

            <Row>
              <div className="d-flex justify-content-begin">
                <img id="dwa" src={opis2} alt="obrazek 2" />
              </div>
            </Row>

            <Row>
              <div className="d-flex justify-content-end">
                <img id="trzy" src={opis3} alt="obrazek 3" />
              </div>
            </Row>

          </Col>
        </Row>
      </Container>

      <Container fluid className='kadra'>
        <Row>
          <Col className='naglowek' md={12}>
            <h1><strong>NASZ ZESPÓŁ</strong></h1>
          </Col>
        </Row>

      </Container>

      <Container fluid className="kadra">
        <Row>
          <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
            <div className="miejsce">
              <img src={brzezinski} alt="brzezinski"></img>
              <div class="caption">mgr inż. Maurycy Brzeziński</div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
            <div className="miejsce">
              <img src={jakubowski} alt="jakubowski"></img>
              <div class="caption">mgr inż. Borys Jakubowski</div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
            <div className="miejsce">
              <img src={kucharska} alt="kucharska"></img>
              <div class="caption">prof. Dominika Kucharska</div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
            <div className="miejsce">
              <img src={zalewski} alt="zalewski"></img>
              <div class="caption">prof. Dariusz Zalewski </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}
