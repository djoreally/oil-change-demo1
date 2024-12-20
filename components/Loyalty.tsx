"use client";

import { Col, Container, Row } from 'react-bootstrap';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import LogoImage from '../public/logo.webp';
import SaleImage from '../public/icons8-sale-100.webp';

export default function Loyalty() {

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotateY: -140,
    },
    onscreen: {
      y: 0,
      rotateY: -20,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.8,
      }
    }
  };
  
  return (
    <div className='loyalty'>
        <Container>
        <div className="wrap-template">
        <h2 className='wrap-template__title'>Loyalty:</h2>
            <Row>
                <Col xs={12} md={6}>
                  <motion.div className="loyalty__wrapper"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{
                  perspective: "404px",
              }}
                  > 
                    <motion.div  variants={cardVariants} className="loyalty__card">
                        <motion.div  variants={cardVariants} className="loyalty__logo">
                          <Image src={LogoImage} alt='logo'/>
                        </motion.div>
                        <motion.div  variants={cardVariants} className="loyalty__logo2">
                          <Image src={SaleImage} alt='sale'/>
                        </motion.div>
                        <motion.p className="loyalty__text">0000 0000 0000 0001</motion.p>
                    </motion.div>
                  </motion.div>
                </Col>
                <Col xs={12} md={6} className='loyalty__col-mar'>
                  <div className="loyalty__wrapper2">
                    <h2 className='loyalty__h2'>Loyalty Card:</h2>
                    <p className='loyalty__desc'>
                      Discounts of up to 50%, bonuses, and premium service with your personalized loyalty card. The card is part of an accumulative discount and bonus system, issued after your first service directly or through partners.
                    </p>
                  </div>
                </Col>
            </Row>
            </div>
        </Container>
    </div>
  );
}
