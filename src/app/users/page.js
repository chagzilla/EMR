"use client";

import {
  Card,
  Text,
  Grid,
  Button,
  Row,
  Spacer,
  Table,
  Avatar,
  Image,
  Box,
  Divider,
} from "@nextui-org/react";
import { styled } from "@mui/system";
import React from "react";
import { BiEdit } from "react-icons/bi";

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

export default function Users() {
  return (
    <section className="p-2">
      <div className="grid gap-3 grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 row-span-2">
          {/* Patient Profile */}
          <Card>
            <Card.Header>
              <div className="w-full flex justify-between items-center text-gray-600 font-semibold">
                Patient Profile
                <BiEdit size={20} />
              </div>
            </Card.Header>
            <Card.Body>
              <div className="grid justify-items-center">
                <Avatar
                  css={{ height: "$36", width: "$36" }}
                  bordered
                  src={"/assets/images/profile-pic.jpg"}
                ></Avatar>
              </div>
              <div className="grid justify-items-center m-3">
                <span className="font-semibold text-gray-600">
                  Jessica Taylor
                </span>
                <span className="text-xs text-gray-400">Female, 45 years</span>
              </div>
              <div className="grid grid-cols-3 justify-items-center pt-5">
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-teal-700">
                    Blood
                  </span>
                  <span className="font-semibold text-sm text-gray-600">
                    -B
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-teal-700">
                    Height
                  </span>
                  <span className="font-semibold text-sm text-gray-600">
                    170 cm
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-teal-700">
                    Weight
                  </span>
                  <span className="font-semibold text-sm text-gray-600">
                    60 kg
                  </span>
                </div>
              </div>
              <Spacer />
              <section className="patient-info text-xs">
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Date of Birth:</label>
                  <p className="text-gray-600 font-semibold">
                    October 15, 1978
                  </p>
                </div>
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Phone:</label>
                  <p className="text-gray-600 font-semibold">(862) 215-9763</p>
                </div>
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Address:</label>
                  <p className="grid justify-items-end text-gray-600 font-semibold">
                    <span>123 Address Street</span>
                    <span className="pt-1">Middletown, NJ 08712</span>
                  </p>
                </div>
                <Spacer />
                <Divider />
                <Spacer />
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Doctor:</label>
                  <p className="text-gray-600 font-semibold">Dr. Jane Doe</p>
                </div>
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Insurance:</label>
                  <p className="text-gray-600 font-semibold">
                    UnitedHealthCare
                  </p>
                </div>
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Allergies:</label>
                  <p className="text-gray-600 font-semibold">Penicillin</p>
                </div>
                <div className="flex justify-between p-1">
                  <label className="text-gray-400">Past Surgeries:</label>
                  <p className="text-gray-600 font-semibold">N/A</p>
                </div>
              </section>
            </Card.Body>
          </Card>
          {/* Upcoming Appointment Info */}
          <Card css={{ marginTop: 10 }}>
            <Card.Header>
              <span className="font-semibold text-gray-600">
                Upcoming Appointments
              </span>
            </Card.Header>
            <Card.Body css={{ pt: 0 }}>
              <div className="flex p-1 text-xs">
                <label className="text-gray-400">Check-up: </label>
                <p className="text-gray-600 font-semibold">Dr. Laura Adams</p>
              </div>
              <div className="flex p-1 text-xs">
                <label className="text-gray-400">Date: </label>
                <p className="text-gray-600 font-semibold">September 9, 2024</p>
              </div>
              <div className="flex p-1 text-xs">
                <label className="text-gray-400">Time: </label>
                <p className="text-gray-600 font-semibold">9:45 AM</p>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-span-2">
          {/* Visits */}
          <Card css={{ marginBottom: 10 }}>
            <Card.Header css={{ padding: "$xs $sm" }}>
              <Text className="font-semibold">Visits</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body className="visits" css={{ padding: 0 }}>
              <Table
                striped
                sticked
                lined
                compact
                shadow={false}
                borderWeight={0}
                css={{
                  height: "auto",
                  minWidth: "100%",
                  paddingTop: 10,
                }}
                aria-label="Example table with static content"
              >
                <Table.Header>
                  <Table.Column hideHeader>Date</Table.Column>
                  <Table.Column hideHeader>NAME</Table.Column>
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

          {/* Payments */}
          <Card css={{ marginBottom: 10 }}>
            <Card.Header css={{ padding: "$xs $sm" }}>
              <Text b style={{ color: "#071236" }}>
                Payments
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body className="visits" css={{ padding: 0 }}>
              <Table
                striped
                sticked
                lined
                compact
                shadow={false}
                borderWeight={0}
                css={{
                  height: "auto",
                  minWidth: "100%",
                  paddingTop: 10,
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

          {/* Statements */}
          <Card css={{ marginBottom: 10 }}>
            <Card.Header css={{ padding: "$xs $sm" }}>
              <Text b style={{ color: "#071236" }}>
                Statements
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body className="visits" css={{ padding: 0 }}>
              <Table
                striped
                sticked
                lined
                compact
                shadow={false}
                borderWeight={0}
                css={{
                  height: "auto",
                  minWidth: "100%",
                  paddingTop: 10,
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
        </div>
      </div>
    </section>
  );
}
