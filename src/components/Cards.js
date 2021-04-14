import { Row, Col, Card, Button } from 'react-bootstrap';

const Cards = ({ title, icon, img, content, link }) => {
    return (
        <Col xs="6" md="4" className="mx-auto">
            <Card border="info" className="mt-5 mt-md-4 project-card">
                <Card.Img src={img} alt="Training 100 poor women" className="project-card-img" />
                <Card.Title className="p-3 bg-info text-white">
                    <Row>
                        <div className="mx-auto project-card-title">{title} &nbsp; <span className={`${icon} fa-lg`}></span></div>
                    </Row>
                </Card.Title>
                <Card.Body className="d-none d-md-block">
                    <Card.Subtitle className="text-2 ml-3"><h4>Summary</h4></Card.Subtitle>
                    <Card.Text className="p-3 text-3" style={{ textAlign: 'justify' }}>
                        <span>{ content }</span>
                    </Card.Text>
                </Card.Body>
                <Row className="p-2 mb-2 mr-md-2">
                    <a className="project-report-btn" href={link} target="_blank" rel="noreferrer">
                        <Button variant="outline-danger">View Project Report</Button>
                    </a>
                </Row>
            </Card>
        </Col>
    );
}
 
export default Cards;