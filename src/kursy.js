import React from 'react';
import './css/kursy_style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bazy from "./img/bazy.png"
import pp from './img/pp.png'
import sieci from './img/sieci.png'
import grafika from './img/grafiak.png'


export function Kursy() {
    return (
        <>
            <Container fluid className='kursy_naglowek'>
                <Row>
                    <Col className='naglowek' md={12}>
                        <h1><strong>Kursy dostępne w ramach szkoły letniej</strong></h1>
                    </Col>
                </Row>

            </Container>
            {/* Stopka w dół i marginej od góry */}
                <Container className='kursy'>
                    <Row>
                        <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
                            <div className="square" id='bazy'>
                                <img src={bazy} alt="bazy" /><br /><br />
                                <strong>OBSŁUGA</strong> <br /> <strong className='szary'>BAZ DANYCH</strong>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
                            <div className="square" id='pp'>
                                <img src={pp} alt="pp" /><br /><br />
                                <strong>KURS</strong> <br /> <strong className='szary'>PROGRAMOWANIA</strong>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
                            <div className="square" id='sieci'>
                                <img src={sieci} alt="sieci" /><br /><br />
                                <strong>SIECI</strong> <br /> <strong className='szary'>KOMPUTEROWE</strong>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={3} className="d-flex justify-content-center">
                            <div className="square" id='grafika'>
                                <img src={grafika} alt="grafika" /><br /><br />
                                <strong>GRAFIKA</strong> <br /> <strong className='szary'>KOMPUTEROWA</strong>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}
