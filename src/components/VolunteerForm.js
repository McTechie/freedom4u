import { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form, Card } from 'react-bootstrap';

const VolunteerForm = () => {
    // State Management for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [body, setBody] = useState('');

    // State for Success Modal
    const [show, setShow] = useState(false);

    // Success Modal to be displayed whenever form submission is successful
    const SuccessModal = () => {
        return (
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thanks, {firstName}! 🥳</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We are glad you came forward to help support our cause and vounteer to be a part of our diverse familiy! <br /><br />
                    We will be contacting you shortly, regarding the details of your volunteering request! 🤟 <br /><br />
                    Meanwhile, do follow us here for updates regarding our ongoing projects and activities!
                </Modal.Body>
                <Modal.Footer>
                    <Container fluid>
                        <Row>
                            <h3>Icons!</h3>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <>
            <SuccessModal />
            <Col className="m-5 p-lg-4">
                <h1 className="text-2 mb-5 mt-3">Every contribution is Valuable!</h1>
                <Card border="info">
                    <Card.Title className="p-3 bg-info text-white">
                        <Row>
                            <div className="mx-auto">Let us know how you wish to help!</div>
                        </Row>
                    </Card.Title>
                    <Card.Body className="px-5 pb-5" >
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Row>
                                    <Form.Label className="text-3" column="lg" lg={{ span: 2, offset: 0 }}>First Name</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="Your First Name"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)} />
                                    </Col>
                                    <Form.Label className="text-3 mt-4 mt-lg-0" column="lg" lg={{ span: 2, offset: 1 }}>Last Name</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="Your Last Name"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="email" className="mt-lg-2">
                                <Form.Row>
                                    <Form.Label className="text-3" column="lg" lg={{ span: 2, offset: 0 }}>Email Address</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="email"
                                            placeholder="xyz@example.com"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Col>
                                    <Form.Label className="text-3 mt-4 mt-lg-0" column="lg" lg={{ span: 2, offset: 1 }}>Phone No.</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="tel"
                                            placeholder="+91 12345 12345"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="currentAddress" className="mt-lg-2">
                                <Form.Row>
                                    <Form.Label className="text-3" column="lg" lg={3}>Current Address</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="Your Address"
                                            required
                                            value={currentAddress}
                                            onChange={(e) => setCurrentAddress(e.target.value)} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="permanentAddress" className="mt-lg-2">
                                <Form.Row>
                                    <Form.Label className="text-3" column="lg" lg={3}>Permanent Address</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="Your Address"
                                            required
                                            value={permanentAddress}
                                            onChange={(e) => setPermanentAddress(e.target.value)} />
                                        <Form.Check
                                            custom
                                            type="checkbox"
                                            id="custom-checkbox"
                                            className="mt-4 text-4"
                                            label="Same as Current Address"
                                            style={{zIndex: 0}}
                                            value={currentAddress}
                                            onChange={(e) => setPermanentAddress(e.target.value)}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="location" className="mt-lg-2">
                                <Form.Row>
                                    <Form.Label className="text-3 mr-4" column="lg" lg={{ span: 1, offset: 0 }}>Country</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="eg: India"
                                            required
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)} />
                                    </Col>
                                    <Form.Label className="text-3 mt-4 mt-lg-0" column="lg" lg={{ span: 1, offset: 1 }}>State</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="eg: Maharashtra"
                                            required
                                            value={state}
                                            onChange={(e) => setState(e.target.value)} />
                                    </Col>
                                    <Form.Label className="text-3 mt-4 mt-lg-0" column="lg" lg={{ span: 1, offset: 1 }}>City</Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="eg: Mumbai"
                                            required
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <br />
                            <Form.Group controlId="body" className="mt-lg-2">
                                <Form.Row>
                                    <Form.Label className="text-3" column="lg" lg={3}>How do you wanna help?</Form.Label>
                                    <Col>
                                        <Form.Control
                                            as="textarea"
                                            size="lg"
                                            rows={4}
                                            type="email"
                                            placeholder="Your Text Here"
                                            required
                                            value={body}
                                            onChange={(e) => setBody(e.target.value)} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <br/>
                            <Container className="mt-lg-2">
                                <Row>
                                    <Button className="mx-auto btn-lg" variant="info" type="submit">
                                        Let's Go! <i className="fas fa-paper-plane" />
                                    </Button>
                                </Row>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default VolunteerForm;