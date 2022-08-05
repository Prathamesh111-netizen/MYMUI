import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

class CreateDonor extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>CREATE A NEW DONOR !</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Personal Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridMname">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridDOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>MALE</option>
                      <option>FEMALE</option>
                      <option>OTHER</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridOcc">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPan">
                    <Form.Label>PAN Card Number</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDonorType">
                    <Form.Label>Donor Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Solo</option>
                      <option>opt 2</option>
                      <option>opt 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDonorImp">
                    <Form.Label>Donor Importance</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>opt 1</option>
                      <option>opt 2</option>
                      <option>opt 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDonorGovtServ">
                    <Form.Label>Government Servant</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>opt 1</option>
                      <option>opt 2</option>
                      <option>opt 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridVSMconnect">
                    <Form.Label>VSM Connection</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Volunteer</option>
                      <option>opt 2</option>
                      <option>opt 3</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Contact Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Alt Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter alternate email"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control placeholder="Enter your mobile number" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Alt Mobile Number</Form.Label>
                    <Form.Control placeholder="Enter alternate mobile number" />
                  </Form.Group>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Address Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Enter Address" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPinCode">
                    <Form.Label>PIN CODE</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridTal">
                    <Form.Label>Taluka</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDis">
                    <Form.Label>District</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Other Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridRef1">
                    <Form.Label>Referal</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridRefDet">
                    <Form.Label>Referal Details</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridOth">
                    <Form.Label>Other Info</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <Button variant="primary" type="submit">
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default CreateDonor;
