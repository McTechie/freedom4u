import { Row, Card, Button } from 'react-bootstrap';

const ProjectCardComponent = ({ title, icon, img, content, link }) => {
    return (
        <Card border="info" className="mt-4 project-card">
            <Card.Img src={ img } alt="Training 100 poor women" className="project-card-img" />
            <Card.Title className="p-3 bg-info text-white">
                <Row>
                    <div className="mx-auto">{title} &nbsp; <span className={`${icon} fa-lg`}></span></div>
                </Row>
            </Card.Title>
            <Card.Body>
                <Card.Subtitle className="text-2 ml-3"><h4>Summary</h4></Card.Subtitle>
                <Card.Text className="p-3 text-3" style={{ textAlign: 'justify' }}>
                    <p>{ content }</p>
                    <Row>
                        <a className="ml-auto" href={link} target="_blank" rel="noreferrer"><Button variant="outline-danger">View Project Report</Button></a>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default ProjectCardComponent;