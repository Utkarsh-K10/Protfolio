import React from 'react'
import '../../pages/CSS/style.css'
import { Col, Container, Row } from 'react-bootstrap'
import {AiFillHeart} from 'react-icons/ai'

const AboutMe = () => {
    return (
        <div className='aboutpagebackground'>
            <Container style={{marginTop:"80px"}}>
                <Row className='textbackground'>
                    <Col md={8}>
                        <h3 className='aboutmetext'>About <span> Me</span></h3>
                        <p className='aboutdetails'>I am a full-stack engineer with a passion for creating and improving web applications. I have experience in developing e-commerce and service-based platforms using various technologies and frameworks. I enjoy learning new skills, accepting challenges, solving problems and optimizing code. I have a degree in IT engineering from a reputed institution. In my spare time, I love to play tabla indoors and badminton outdoors.</p>
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
                    <Col md={4}>
                    <div className='mineimage'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe