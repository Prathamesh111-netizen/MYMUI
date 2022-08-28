import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

class CreateDonation extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>CREATE A NEW DONATION !</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Payment Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFname">
                    <Form.Label>Donor Name</Form.Label>
                    <Form.Control placeholder="Enter Full Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridTdate">
                    <Form.Label>Transaction Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridFyear">
                    <Form.Label>Financial Year</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCur">
                    <Form.Label>Currency</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridMop">
                    <Form.Label>Mode Of Payment</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Online</option>
                      <option>Offline</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAmt">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridBank">
                    <Form.Label>Donation Bank Account</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>SBI</option>
                      <option>TJSB</option>
                      <option>BOI</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDonationType">
                    <Form.Label>Donation Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>opt 1</option>
                      <option>opt 2</option>
                      <option>opt 3</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridDonorCSR">
                    <Form.Label>is CSR</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Yes</option>
                      <option>No</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridRno">
                    <Form.Label>Reciept No.</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAutoRno">
                    <Form.Label>Auto Reciept No.</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Other Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridDonateReason">
                    <Form.Label>Donation Reason</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridvsmBranch">
                    <Form.Label>VSM Branch</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridProj">
                    <Form.Label>Project/Initiative</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridRef2">
                    <Form.Label>Referal</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridRefDet">
                    <Form.Label>Referal Details</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridOth">
                    <Form.Label>Remarks</Form.Label>
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

export default CreateDonation;
