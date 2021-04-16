import { Container, Row, Button, Jumbotron } from 'react-bootstrap';
import VolunteerForm from '../components/VolunteerForm';
import DonationForm from '../components/DonationForm';
import { useState } from 'react';

const Donation = () => {
    const [volunteerActive, setVolunteerActive] = useState(true);

    return (
        <Container fluid>
            <Row>
                <Jumbotron className="parallax parallax-donation mb-0" style={{ position: 'relative', padding: 0, width: '100%', height: '650px' }}>
                    <div className="p-5" style={{ position: 'absolute', top: 0 }}>
                        <h1 className="text-white mb-4">You can help us too!</h1>
                        <p className="text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione neque dolore laborum, sequi nihil labore perspiciatis accusantium numquam esse optio nam facilis tempora qui cum earum reiciendis, iure pariatur expedita quidem ducimus dignissimos, consectetur reprehenderit commodi. Fugit cumque iusto tempore repellendus nesciunt laboriosam itaque, quia praesentium impedit nisi esse dolore delectus et ab a accusantium perspiciatis pariatur, sint quod sequi error adipisci minima. Perspiciatis aliquid voluptatem incidunt recusandae asperiores libero natus iusto aliquam molestias minus explicabo, laborum assumenda, impedit inventore error laudantium consequatur, doloribus illum magni cum minima facere repellendus! Corporis maiores necessitatibus quo neque error omnis officia dignissimos! <br /> <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste minus culpa eum fugiat pariatur ab vitae debitis ut ad aperiam reiciendis harum, error tenetur velit voluptate autem, placeat deserunt explicabo ipsa incidunt modi cum ducimus et! Maiores possimus vitae, suscipit excepturi voluptates, ut enim nobis magnam officia, facere labore praesentium magni ipsum similique nostrum placeat. Eligendi, odio! Recusandae reiciendis architecto velit. Blanditiis at sit repudiandae, quo quam iste voluptatem quidem id ex quos molestias exercitationem, fugit autem accusantium. Illum consequatur excepturi accusantium natus, incidunt placeat, rem consectetur hic delectus illo commodi omnis eligendi vitae. Sunt id dolore deserunt quod praesentium! <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias voluptate qui adipisci et ea perferendis error, inventore animi vero! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat officia nemo earum impedit aliquid saepe eos, similique aliquam eveniet mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, exercitationem fugit cumque saepe commodi itaque! Iure laudantium ea possimus beatae?
                        </p>
                        <Row>
                            <a href="#forms" className="mx-auto">
                                <Button variant="info" className="my-4" style={{ fontWeight: "700" }}>Know More!</Button>
                            </a>
                        </Row>
                    </div>
                </Jumbotron>
            </Row>
            <Row className="alter-strip-nav px-3 py-4">
                <Button variant="outline-light" className="mx-2 btn-lg" active={volunteerActive}
                    onClick={() => setVolunteerActive(true)}>
                    <b>Volunteer at F4U</b>
                </Button>
                <Button variant="outline-light" className="mx-2 btn-lg" active={!volunteerActive}
                    onClick={(e) => setVolunteerActive(false)}>
                    <b>No Time? No Worries!</b>
                </Button>
            </Row>
            <Row className="p-4" id="forms">
                { volunteerActive && <VolunteerForm />}
                { !volunteerActive && <DonationForm />}
            </Row>
        </Container>
    );
}

export default Donation;