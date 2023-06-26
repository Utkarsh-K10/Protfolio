import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import materialbuyimg from '../../Assets/materialbuy.jpeg'
import restoration from '../../Assets/healthrestore.jpeg'
import facerecog from '../../Assets/facerecog.jpeg'
const Projects = () => {
    return (
        <div className='projectbackground'>
            <Container fluid className='project-section'>
                <Container>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={materialbuyimg}
                                title='Material Buy'
                                description='Multi-vendor e-commerce platform frontend and some part of the backend for this Hardware business.'
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={restoration}
                                title='Health Restoration'
                                description='Multi-vendor e-commerce platform frontend and some part of the backend for this Hardware business.'
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={materialbuyimg}
                                title='Global Mart'
                                description='Multi-vendor e-commerce platform frontend and some part of the backend for this Hardware business.'
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={facerecog}
                                title='Face Recognition'
                                description='Multi-vendor e-commerce platform frontend and some part of the backend for this Hardware business.'
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Projects