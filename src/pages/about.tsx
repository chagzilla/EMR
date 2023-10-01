import { Card, Text, Grid, Button, Row, Spacer, Table } from '@nextui-org/react';

export default function About() {
    return (
        <Grid.Container gap={1}>
        <Grid sm={12} md={5}>
          <Card css={{ mw: "500px", mh: "400px" }}>
            <Card.Header>
              <Text b>Guarantor Overview</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <Grid.Container>
                    <Grid md={4}>
                        <Text css={{ height: 40 }}>Profile Pic</Text>
                    </Grid>
                    <Grid md justify="flex-start">
                        <Grid.Container css={{ paddingTop: 0}} justify="flex-start">
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h3>Name</Text>
                            </Grid>
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h6>xxx-xx-xxxx</Text>
                            </Grid>
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h6>female</Text>
                            </Grid>
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h6>DOB 12/22/1985 (26 years)</Text>
                            </Grid>
                            <Spacer y={1} />
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h6>Street</Text>
                            </Grid>
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h6>Secondary Address</Text>
                            </Grid>
                            <Grid xs={12} css={{ height: 15 }}>
                                <Text h6>State</Text>
                            </Grid>
                            <Spacer y={1} />
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
                <Grid.Container>
                    <Grid md={6}>
                        <Grid.Container>
                            <Grid md={12}>
                                <Row css={{ height: 25}}>
                                    <Text>
                                        Home: 
                                    </Text>
                                    <Text>
                                        (999)-999-9999
                                    </Text>
                                </Row>
                            </Grid>
                            <Grid md={12}>
                                <Row css={{ height: 25}}>
                                    <Text>
                                        Home: 
                                    </Text>
                                    <Text>
                                        (999)-999-9999
                                    </Text>
                                </Row>
                            </Grid>
                            <Grid md={12}>
                                <Row css={{ height: 25}}>
                                    <Text>
                                        Home: 
                                    </Text>
                                    <Text>
                                        (999)-999-9999
                                    </Text>
                                </Row>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                    <Grid md={6}>
                        <Row>
                            <Text>
                                Next Statement
                            </Text>
                        </Row>
                        <Row>
                            <Text>
                                MyChart
                            </Text>
                        </Row>
                    </Grid>
                </Grid.Container>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="space-evenly">
                <Button size="sm" light>
                  Cancel
                </Button>
                <Button size="sm">Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid sm={12} md={5}>
            <Grid.Container>
                <Grid sm={12} md={12}>
                    <Card>
                        <Card.Header>
                            <Text b>Visits</Text>
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
                <Grid sm={12} md={12}>
                    <Card>
                        <Card.Header>
                            <Text b>Statements</Text>
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
                <Spacer />
                <Grid sm={12} md={12}>
                    <Card>
                        <Card.Header>
                            <Text b>Payments</Text>
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
      </Grid.Container>
      );
}