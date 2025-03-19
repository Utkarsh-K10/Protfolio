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
                                pLink="https://materialbuy.com"
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={restoration}
                                title='Health Restoration'
                                description='Health Service Platform for Doctors and Patient Management System'
                                isBlog={false}
                                pLink="https://www.godaddy.com/forsale/healthrestorationclinic.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_id=binns2&"
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={materialbuyimg}
                                title='Global Mart'
                                description='e-commerce platform using react, javascript with Express to develop with all e-commerce services'
                                isBlog={false}
                                pLink="https://github.com/Utkarsh-K10/orions_GrabDeal_userwebsite"
                            />
                        </Col>
                        <Col md={4} className='project-card'>
                            <ProjectCard
                                imgPath={facerecog}
                                title='Face Recognition'
                                description='Authentication system with python and Machine Learning, using cloud based infrastructure azure for traning and google cloud platform.'
                                isBlog={false}
                                pLink="https://github.com/Utkarsh-K10/RapidTransitAI/tree/master"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Projects
