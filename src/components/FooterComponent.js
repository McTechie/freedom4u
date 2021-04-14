import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {

    return(
        <>
            <footer>
                <Container className="my-4">
                    <Row className="">
                        <Col md={{ span: 3, offset: 0 }} className="text-3">
                            <span className="footer-highlight">&copy; </span>Freedom For You 2021
                        </Col>
                        <Col md={{ span: 5, offset: 2 }} className="text-3">
                            Made with <i className="fas fa-heart" /> by the <i className="footer-highlight">F4U Web Team</i>
                        </Col>
                        <Col md={{ offset: 0 }}>
                            <a href="https://www.facebook.com/4ufreedom" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square mx-1" /></a>
                            <a href="https://twitter.com/4youfreedom" target="_blank" rel="noreferrer"><i className="fab fa-twitter mx-1" /></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube mx-1" /></a>
                            <a href="mailto:4ufreedom@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope mx-1" /></a>
                            <a href="tel:1234567890" target="_blank" rel="noreferrer"><i className="fas fa-phone-square-alt mx-1" /></a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;