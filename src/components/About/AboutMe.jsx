import React from 'react'
import '../../pages/CSS/style.css'
import { Col, Container, Row } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div className='aboutpagebackground'>
            <Container style={{marginTop:"80px"}}>
                <Row className='textbackground'>
                    <Col md={7}>
                        <h3 className='aboutmetext'>About <span> Me</span></h3>
                        <p className='aboutdetails'>Passionate full-stack engineer skilled in web development. Problem-solver and avid learner. Holds IT Engineering degree. Love ML, enjoys Tabla and Badminton.</p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>Reactjs</li>
                                    <li>JavaScript</li>
                                    <li>TypeSrcipt</li>
                                    <li>MongoDb</li>
                                </Col>
                                <Col md={5}>
                                    <li>Material UI</li>
                                    <li>React Bootstrap</li>
                                    <li>REST API</li>
                                    <li>Machine Learning</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col>
                    <div className='webimage'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe