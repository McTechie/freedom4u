import { Container, Card, Row, Button, Jumbotron, Image } from 'react-bootstrap';
import PreviousProjectsDesktop from '../components/PreviousProjectsDesktop';
import jumbotron from '../img/projects/jumbotron.jpg';
import { useState } from 'react';

const Projects = () => {

    const [selection, setSelection] = useState('previous');

    const handleSelection = (e) => {
        if (e.target.value === 'covid') {
            setSelection('covid');
        } else if (e.target.value === 'current') {
            setSelection('covid');
        } else {
            setSelection('previous');
        }
    }

    return (
        <Container fluid className="parallax">
            <Jumbotron style={{ position: 'relative', padding: 0 }}>
                <Image src={jumbotron} alt="Jumbotron" fluid style={{ width: '100%', height: '600px' }} />
                <div className="p-5 parallax" style={{ position: 'absolute', top: 0}}>
                    <h1 className="text-white mb-4">We prioritize Giving!</h1>
                    <p className="text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione neque dolore laborum, sequi nihil labore perspiciatis accusantium numquam esse optio nam facilis tempora qui cum earum reiciendis, iure pariatur expedita quidem ducimus dignissimos, consectetur reprehenderit commodi. Fugit cumque iusto tempore repellendus nesciunt laboriosam itaque, quia praesentium impedit nisi esse dolore delectus et ab a accusantium perspiciatis pariatur, sint quod sequi error adipisci minima. Perspiciatis aliquid voluptatem incidunt recusandae asperiores libero natus iusto aliquam molestias minus explicabo, laborum assumenda, impedit inventore error laudantium consequatur, doloribus illum magni cum minima facere repellendus! Corporis maiores necessitatibus quo neque error omnis officia dignissimos! <br/> <br/>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste minus culpa eum fugiat pariatur ab vitae debitis ut ad aperiam reiciendis harum, error tenetur velit voluptate autem, placeat deserunt explicabo ipsa incidunt modi cum ducimus et! Maiores possimus vitae, suscipit excepturi voluptates, ut enim nobis magnam officia, facere labore praesentium magni ipsum similique nostrum placeat. Eligendi, odio! Recusandae reiciendis architecto velit. Blanditiis at sit repudiandae, quo quam iste voluptatem quidem id ex quos molestias exercitationem, fugit autem accusantium. Illum consequatur excepturi accusantium natus, incidunt placeat, rem consectetur hic delectus illo commodi omnis eligendi vitae. Sunt id dolore deserunt quod praesentium! <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias voluptate qui adipisci et ea perferendis error, inventore animi vero! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat officia nemo earum impedit aliquid saepe eos, similique aliquam eveniet mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, exercitationem fugit cumque saepe commodi itaque! Iure laudantium ea possimus beatae?
                    </p>
                    <Row>
                        <Button variant="info" className="mx-auto">Know More</Button>
                    </Row>
                </div>
            </Jumbotron>
            <Row>
                <Card className="p-4" border='info' id="projects">
                    <Row className="mb-3" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outline-info" className="mx-2" value='covid' onClick={handleSelection}>Covid-19</Button>
                        <Button variant="outline-info" className="mx-2" value='current' onClick={handleSelection}>Ongoing Work</Button>
                        <Button variant="outline-info" className="mx-2" value='previous' onClick={handleSelection}>Previous Projects</Button>
                    </Row>
                    {selection === 'covid'? (<PreviousProjectsDesktop />):(<div />)}
                    {selection === 'current'? (<PreviousProjectsDesktop />):(<div />)}
                    {selection === 'previous'? (<PreviousProjectsDesktop />):(<div />)}
                </Card>
            </Row>
        </Container>
    );
}

export default Projects;