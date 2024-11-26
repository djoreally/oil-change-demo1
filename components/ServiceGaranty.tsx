"use client";

import { Col, Container, Row } from 'react-bootstrap';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';

export default function ServiceGaranty() {

  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  return (
    <div className='service'>
      <Container>
        <div className="wrap-top-content">
          <div className="top-contene">
            <h2 className='section-grey_h2'>High Service Guarantees</h2>
            <p className='section-grey_text'>
              Our experience is not static, as each life situation, despite similar legal norms, is unique!
            </p>
          </div>
        </div>
        <Row className='first-top-padding'>

          <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <Image src='/service/icons8-map-100.webp' width='100' height='100' alt='Taxi in Russia' />
              </motion.div>
              <p className='service__title'>We Bring The Oil Change To You</p>
              <p>We provide services throughout Russia + new territories!</p>
            </motion.div>
          </Col>

          <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <Image src='/service/icons8-airplane-100.webp' width='100' height='100' alt='You Choose The Date And Time in Russia' />
              </motion.div>
              <p className='service__title'>You Choose The Date And Time</p>
              <p>We can pick you up at the airport and take you anywhere in Russia + new territories!</p>
            </motion.div>
          </Col>

          <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <Image src='/service/icons8-suitcase-100.webp' width='100' height='100' alt='Baggage transport in Russia' />
              </motion.div>
              <p className='service__title'>Baggage Transport</p>
              <p>We will deliver your small cargo / luggage to any location in Russia + new territories!</p>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
