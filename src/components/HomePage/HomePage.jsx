import React from 'react'
import '../../pages/CSS/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../HomePage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaAngellist } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row className='row'>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Utkarsh Kushwaha</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/Utkarsh-K10");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' />
            </button>

            <button onClick={() => {
              window.open("https://www.linkedin.com/in/utk10/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://wellfound.com/u/utkarsh-kushwaha-5");
            }}
              className='socailmediabtn'><FaAngellist className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/_.utk_arsh");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>
          <Col md={5}>
            <div className="webimage">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home