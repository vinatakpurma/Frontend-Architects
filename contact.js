





 import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/contact1.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact1() {
  return (
    <>
      <Container fluid className="top-banner">
        <Row>
          <Col md={12} className="banner-content">
            <p>HOME | CONTACT US</p>
            <p id="p2">Get In Touch</p>
          </Col>
        </Row>
      </Container>
            
      <Container fluid className="p-0">
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14151.42095349903!2d79.12098225!3d21.11186585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1749231230084!5m2!1sen!2sin"
              width="88%"
              height="650"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            
            ></iframe>
          </Col>
        </Row>
      </Container>

      <Container>

        <Row>
          <Col md={3} xs={12} id="contact">
             CONTACT
           </Col>
                </Row>

         <Row>
           <Col xs={12} md={4} id="Us">
             Contact Us
           </Col>
         </Row>
      </Container>

      <Container className="contact-section">
        <Row>
          <Col xs={12} md={3} className="contact-box" id="branch1">
            <h4 id="boxbranch1">#01 branch</h4>
            <h2>Tokyo, China</h2>
            <p>16/A, Alvon Miranda Halim Tower, NYC, USA</p>
            <p><i className="fa-solid fa-phone"></i> 908 098 096 76</p>
            <p><i className="fa-solid fa-envelope"></i> info@webexample.com</p>
          </Col>

          <Col xs={12} md={3} className="contact-box" id="branch2">
            <h4 id="boxbranch1">#02 branch</h4>
            <h2>New York City, US</h2>
            <p>16/A, Alvon Miranda Halim Tower, NYC, USA</p>
            <p><i className="fa-solid fa-phone"></i> 908 098 096 76</p>
            <p><i className="fa-solid fa-envelope"></i> info@webexample.com</p>
          </Col>

          <Col xs={12} md={3} className="contact-box" id="branch3">
            <h4 id="boxbranch1">#03 branch</h4>
            <h2>Limondaski, UK</h2>
            <p>16/A, Alvon Miranda Halim Tower, NYC, USA</p>
            <p><i className="fa-solid fa-phone"></i> 908 098 096 76</p>
            <p><i className="fa-solid fa-envelope"></i> info@webexample.com</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="form-background">
        <Row>
          <Col xs={12} className="text-center mt-5">
            <h5 className="form-heading" >CONTACT</h5>
            <h1 className="form-title">Still Need Query?</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            <Form>
              <Row className="g-3">
                <Col md={4} xs={12}>
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
                <Col md={4} xs={12}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
                <Col md={4} xs={12}>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Col>
              </Row>

              <Form.Group className="mt-4">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your comments..."
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button type="button" id="button1">Get A Quotation</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>


     
    </>
  );
}

export default Contact1;








