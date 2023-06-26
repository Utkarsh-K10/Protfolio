import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='projectbackground'>
            <Container fluid className='project-section'>
                <Container>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath=''
                                title='Material Buy'
                                description=''
                                isBlog={false}
                                pLink=""

                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath=''
                                title='Health Restoration'
                                description=''
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath=''
                                title='Global Mart'
                                description=''
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath=''
                                title='Face Recognition'
                                description=''
                                isBlog={false}
                                pLink=""
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath=''
                                title='ERP'
                                description=''
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