"use client";

import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Highlighter from "react-highlight-words";
import MainImage from '../public/banner/main-banner.webp';
import MainImageMd from '../public/banner/md.webp';
import MainImageXs from '../public/banner/xs.webp';
import { Suspense , lazy} from 'react';

export default function MainBackground() {
  const TransitionTextComp = lazy(() => import('./ui/TransitionTextComp'));
  return (
    <div className='banner'>
        <Container>
          <Row className='banner__row'>
            <Col xs={12} md={6} className='banner__col'>
                <div className="banner__text-wrapper">
                  <Suspense fallback={<div>...</div>}>
                    <TransitionTextComp />
                  </Suspense>
                <br></br>
                <Highlighter
                  highlightClassName="banner__highlight"
                  searchWords={["999", "123-45-67", "the"]}
                  autoEscape={true}
                  textToHighlight="Make Oil Change Great Again-With Our Mobile Service"
                  className="banner__highlighter"
                />
                  <p className="banner__text">Our company has been operating since 2005, and throughout this time, we have been doing our best to meet client requests at the highest level! <span className="banner__hidden-title">In our company, all clients will be satisfied!</span></p>
                </div>
            
            </Col>
            <Col xs={12} md={6}>
              <Image alt="Intercity Taxi" src={MainImageXs} style={{ width: '100%', height: 'auto'}} className="banner__img-xs" priority/>
              <Image alt="Intercity Taxi" src={MainImageMd} style={{ width: '100%', height: 'auto'}} className="banner__img-md" />
              <Image alt="Intercity Taxi" src={MainImage} style={{ width: '100%', height: 'auto'}} className="banner__img" />
            </Col>

          </Row>
        </Container>
    </div>
  );
}