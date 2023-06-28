import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ContactMe = () => {
    return (
        <div className='contactbackground'>
            <Container>
                <h3 className='contacthead'> Connect With Me</h3>
                <p className='contactpara'>
                    Hey there.. This is Utkarsh!<br />
                    I am currently looking for fullstack - web development role,
                    <br />If you like my work ... Feel free to connect<br />
                    whether you have any further questions or just want to say hi, <br />
                    I’ll try my best to get back to you!
                </p>
                <Button className='contactbtn' onClick={()=>window.open("https://www.linkedin.com/in/utk10/")}>
                    Say Hello!
                </Button>
                <span></span>
                <p className="copyright">
                    © Copyright 2023
                    <hr />
                    Designed & Built by <span>Utkarsh</span>
                </p>
            </Container>
        </div>
    )
}
export default ContactMe