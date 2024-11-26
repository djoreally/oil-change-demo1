"use client";

import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import Image from 'next/image';
import Tstandart from '../public/t-standart.webp';
import Tkomfort from '../public/t-komfort.webp';
import TkomfortPlus from '../public/TkomfortPlus.webp';
import Miniven from '../public/Miniven.webp';
import Modal from 'react-bootstrap/Modal';

export default function MainTariffs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book You Oil Change</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <div className='w-full text-center mb-1'>
              <a title={"phone"} href={"tel:+79020970101 "} style={{ color: '#000', fontSize: "28px"}} className='phone-ya' rel="nofollow">
                      +7 (215) 767-2125
              </a>
              <p style={{ color: '#000', fontSize: "12px"}}>
                We are always in touch! We are ready to drive to any point in the region to pick you up or deliver a package. <b>Call us, everything is personalized and anonymous.</b>
              </p>
          </div>
          <Button variant="contained" style={{backgroundColor: '#ffd913', color: '#000', width: '100%', textAlign: 'center'}} className='mb-3'> 
              <a title={"Telegram"} href={"https://t.me/+12157672125 "} target="_blank" className='phone-ya'>
                      <Image src={"/telegram.png"} width='44' height='44' alt='phone' style={{display: 'inline-block'}} rel="nofollow"/>{" "}Message on Telegram
              </a>
          </Button>
          <Button variant="contained" style={{backgroundColor: '#ffd913', color: '#000', width: '100%', textAlign: 'center'}} className='mb-3'>
              <a title={"WhatsApp"} href={"https://wa.me/+12157672125 "} target="_blank" className='phone-ya'>
                      <Image src={"/icons8-whatsapp1.png"} width='48' height='48' alt='phone' style={{display: 'inline-block'}} rel="nofollow"/>{" "}Message on WhatsApp
              </a>
          </Button>
        </Modal.Body>
      </Modal>

      <section id='tariffs' className='tariffs bg-gray-100'>
        <Container>
          <div className="wrap-template">
            <h2 className='wrap-template__title'>Our Services</h2>
            <Row>
              <Col xs={12} md={3}>
                <motion.div className="practics-block box"   
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h2>Standard Oil Change</h2>
                    <p>Up to 4 seats</p>
                    <Image src={Tstandart} alt='intercity taxi' className='tariffs__image-tariff' sizes="100vw"/>
                    <p><b>Price:</b> 28* RUB/km</p>
                    <p>Kia Rio, VW Polo, Solaris, Rapid, and similar</p>
                    <Button className='tariffs__button' onClick={handleShow}>Order</Button>
                </motion.div>
              </Col>
              <Col xs={12} md={3}>
                <motion.div className="practics-block box"   
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h2>Premium Oil Change</h2>
                    <p>Up to 3 seats</p>
                    <Image src={Tkomfort} alt='intercity taxi' className='tariffs__image-tariff' sizes="100vw"/>
                    <p><b>Price:</b> 32* RUB/km</p>
                    <p>Skoda Octavia, Hyundai Elantra, and similar</p>
                    <Button className='tariffs__button' onClick={handleShow}>Order</Button>
                </motion.div>
              </Col>
              <Col xs={12} md={3}>
                <motion.div className="practics-block box"   
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h2>Premium Oil Change+</h2>
                    <p>Up to 3 seats</p>
                    <Image src={TkomfortPlus} alt='intercity taxi' className='tariffs__image-tariff' sizes="100vw"/>
                    <p><b>Price:</b> 36* RUB/km</p>
                    <p>Toyota Camry and other premium cars</p>
                    <Button className='tariffs__button' onClick={handleShow}>Order</Button>
                </motion.div>
              </Col>
              <Col xs={12} md={3}>
                <motion.div className="practics-block box"   
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h2>Brakes And Rotors</h2>
                    <p>Up to 8 seats</p>
                    <Image src={Miniven} alt='intercity taxi' className='tariffs__image-tariff' sizes="100vw"/>
                    <p><b>Price:</b> 45* RUB/km</p>
                    <p>Toyota Alphard, Hyundai H1, and similar</p>
                    <Button className='tariffs__button' onClick={handleShow}>Order</Button>
                </motion.div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
