import {
  Card,
  Text,
  Grid,
  Button,
  Row,
  Spacer,
  Table,
  Avatar,
} from "@nextui-org/react";
import { styled } from "@mui/system";
import React from "react";

const MetallicGlossyHeader = styled(Card.Header)`
  background-image: linear-gradient(
    to bottom,
    #c2c2c2,
    #ebebeb,
    #c2c2c2,
    #ebebeb
  );
  background-repeat: no-repeat;
  background-size: 100% 200%;
  color: #071236;
  padding: 16px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export default function About() {
  return (
    <React.Fragment>
      <Grid.Container gap={1}>
        {/* Top */}
        <Grid xs={12}>
          {/* Profile Card */}
          <Card css={{ pl: 15 }}>
            <Card.Divider />
            <Card.Body>
              <Grid.Container alignItems="center">
                <Grid css={{ mb: 20, mr: 20 }}>
                  <Avatar
                    bordered
                    color="primary"
                    src={"./profile-pic.jpg"}
                    css={{ size: "$36" }}
                    alt="Patient Profile Pic"
                  ></Avatar>
                </Grid>

                <Grid>
                  <Grid.Container>
                    <Grid xs={12} direction="column">
                      <Text h2 css={{ m: 0 }}>
                        Ann Taylor
                      </Text>
                      <Text h6 css={{ m: 0 }}>
                        xxx-xx-7256
                      </Text>
                    </Grid>

                    <Grid>
                      <Grid.Container>
                        <Grid xs={12} sm={6} direction="column">
                          <Text size={12} css={{ mb: 1 }}>
                            <span>Gender:</span> <span>Female</span>
                          </Text>
                          <Text size={12} css={{ mb: 4 }}>
                            <span>Email:</span> <span>testemail@gmail.com</span>
                          </Text>
                          <Text size={12} css={{ mb: 4 }}>
                            <span>Phone:</span> <span>+1 (862) 250-1265</span>
                          </Text>
                          <Text size={12} css={{ mb: 4 }}>
                            <span>Address:</span>{" "}
                            <span>123 Address Lane, Madison WI</span>
                            53711
                          </Text>
                        </Grid>

                        <Grid xs={12} sm={6} direction="column">
                          <Text size={12} css={{ mb: 1 }}>
                            <span>Age:</span> <span>34</span>
                          </Text>
                          <Text size={12} css={{ mb: 4 }}>
                            <span>DOB:</span> <span>05/12/1989</span>
                          </Text>
                        </Grid>
                      </Grid.Container>
                    </Grid>
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid>
        {/* Left Side */}
        <Grid xs={12} md={6}>
          <Grid.Container>
            <Grid xs={12} css={{ mh: "320px", height: "auto" }}>
              <Card>
                <Card.Header>
                  <Text b style={{ color: "#071236" }}>
                    Billing
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Table striped aria-label="Example table with static content">
                    <Table.Header>
                      <Table.Column>Date</Table.Column>
                      <Table.Column>NAME</Table.Column>
                      <Table.Column>INSURANCE</Table.Column>
                      <Table.Column>SELF-PAY</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row key="1">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>Tony Reichert</Table.Cell>
                        <Table.Cell>120.00</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="2">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>Zoey Lang</Table.Cell>
                        <Table.Cell>23.54</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="3">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>Jane Fisher</Table.Cell>
                        <Table.Cell>89.10</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="4">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>William Howard</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </Grid>
            <Spacer />
            <Grid xs={12}>
              <Card>
                <Card.Header>
                  <Text b style={{ color: "#071236" }}>
                    Payments
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Table
                    aria-label="Example table with static content"
                    css={{
                      height: "auto",
                      minWidth: "100%",
                    }}
                  >
                    <Table.Header>
                      <Table.Column>DATE</Table.Column>
                      <Table.Column>TYPE</Table.Column>
                      <Table.Column>PRICE</Table.Column>
                      <Table.Column>PAYMENT METHOD</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row key="1">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>CO-PAYMENT</Table.Cell>
                        <Table.Cell>89.10</Table.Cell>
                        <Table.Cell>CREDIT CARD</Table.Cell>
                      </Table.Row>
                      <Table.Row key="2">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>CO-PAYMENT</Table.Cell>
                        <Table.Cell>89.10</Table.Cell>
                        <Table.Cell>CREDIT CARD</Table.Cell>
                      </Table.Row>
                      <Table.Row key="3">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>CO-PAYMENT</Table.Cell>
                        <Table.Cell>89.10</Table.Cell>
                        <Table.Cell>CREDIT CARD</Table.Cell>
                      </Table.Row>
                      <Table.Row key="4">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>CO-PAYMENT</Table.Cell>
                        <Table.Cell>89.10</Table.Cell>
                        <Table.Cell>CREDIT CARD</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid>
        {/* Right Side */}
        <Grid xs={12} md={6}>
          <Grid.Container>
            <Grid xs={12}>
              <Card>
                <Card.Header>
                  <Text b style={{ color: "#071236" }}>
                    Visits
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Table striped aria-label="Example table with static content">
                    <Table.Header>
                      <Table.Column>Date</Table.Column>
                      <Table.Column>NAME</Table.Column>
                      <Table.Column>INSURANCE</Table.Column>
                      <Table.Column>SELF-PAY</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row key="1">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>Tony Reichert</Table.Cell>
                        <Table.Cell>120.00</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="2">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>Zoey Lang</Table.Cell>
                        <Table.Cell>23.54</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="3">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>Jane Fisher</Table.Cell>
                        <Table.Cell>89.10</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="4">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>William Howard</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </Grid>
            <Spacer />
            <Grid xs={12}>
              <Card>
                <Card.Header>
                  <Text b style={{ color: "#071236" }}>
                    Statements
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Table
                    aria-label="Example table with static content"
                    css={{
                      height: "auto",
                      minWidth: "100%",
                    }}
                  >
                    <Table.Header>
                      <Table.Column>Date</Table.Column>
                      <Table.Column>INVOICE</Table.Column>
                      <Table.Column>CHARGED</Table.Column>
                      <Table.Column>OUTSTANDING</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row key="1">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>514792</Table.Cell>
                        <Table.Cell>99.99</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="2">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>514792</Table.Cell>
                        <Table.Cell>99.99</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="3">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>514792</Table.Cell>
                        <Table.Cell>99.99</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                      <Table.Row key="4">
                        <Table.Cell>01/16/2012</Table.Cell>
                        <Table.Cell>514792</Table.Cell>
                        <Table.Cell>99.99</Table.Cell>
                        <Table.Cell>00.00</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </React.Fragment>
  );
}
