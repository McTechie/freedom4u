import { Row, Col } from 'react-bootstrap';
import ProjectCardComponent from './ProjectCardComponent';
import previous_1 from '../../img/projects/previous_1.jpg';
import previous_2 from '../../img/projects/previous_2.jpg';
import previous_3 from '../../img/projects/previous_3.jpg';

const PreviousProjectsDesktop = () => {
    return (
        <Row className="align-items-center">
            <Col md="4">
                <ProjectCardComponent
                    title="Woman Empowerment"
                    icon="fas fa-hands"
                    img={previous_1}
                    content="Aimed at training multiple groups of single mothers, widows, divorcees, school &amp; college dropouts in designing jute woven bags, home linen, ladies dresses and the manufacturing process of paper artifacts."
                    link="https://www.globalgiving.org/projects/train-100-poor-mumbai-women-in-entrepreneurship/"
                />
            </Col>
            <Col md="4">
                <ProjectCardComponent
                    title="Disaster Response"
                    icon="fas fa-hand-holding-medical"
                    img={previous_2}
                    content="Project will form First-Responder Youth Brigade in different nodes of Navi Mumbai to help in any disaster calling for emergency response from trained First Responders, including attending to sudden cardiac arrest victims in their neighborhood."
                    link="https://www.globalgiving.org/projects/train-first-responders-for-navimumbai-youth-brigade/"
                />
            </Col>
            <Col md="4">
                <ProjectCardComponent
                    title="Empowering Education"
                    icon="fas fa-school"
                    img={previous_3}
                    content="Freedom for You runs a Child Learning Center 'Bal Niketan Vidyalay' in slums of Rabale, Navi Mumbai providing crucial early education to tiny-tots, age 2-5 years, of rag-picker/daily wage-earner parents."
                    link="https://www.globalgiving.org/projects/lightup-lives-early-ed-for-75marginalized-children/"
                />
            </Col>
        </Row>
    );
}
 
export default PreviousProjectsDesktop;