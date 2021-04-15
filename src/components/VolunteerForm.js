import { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form, Card } from 'react-bootstrap';

const VolunteerForm = () => {

    // State Management for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    // State for Success Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // Success Modal to be displayed whenever form submission is successful
    const SuccessModal = () => {
        return (
            <Modal show={show} onHide={handleClose} centered>
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
        e.preventDefault(); // Prevents Refreshing the Form
        setShow(true);
    }

    return (
        <>
            <SuccessModal />
            <Col className="m-5">
                <h1 className="text-2 mb-5">Every contribution is Valuable!</h1>
                <Card className="p-5" border="info">
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="firstName">
                            <Form.Row>
                                <Form.Label className="text-2" column="lg" lg={3}>First Name</Form.Label>
                                <Col>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Your First Name"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                    </Col>
                            </Form.Row>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="lastName">
                            <Form.Row>
                                <Form.Label className="text-2" column="lg" lg={3}>Last Name</Form.Label>
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
                        <Form.Group controlId="email">
                            <Form.Row>
                                <Form.Label className="text-2" column="lg" lg={3}>Email Address</Form.Label>
                                <Col>
                                    <Form.Control
                                        size="lg"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="body" className="mt-3">
                            <Form.Row>
                                <Form.Label className="text-2" column="lg" lg={3}>How do you wanna help?</Form.Label>
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
                        <Container className="mt-4">
                            <Row>
                                <Button className="mx-auto btn-lg" variant="info" type="submit">
                                    Submit
                                </Button>
                            </Row>
                        </Container>

                    </Form>
                </Card>
            </Col>
        </>
    );
}

export default VolunteerForm;