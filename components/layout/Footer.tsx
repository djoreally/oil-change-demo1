import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <footer className='footer '>
        <div >
            <Container>
              <div className="footer__wrapper">
                <Row className=''>
                  
                  <Col xs={12} md={4}>
                    <div className="wrapper-footer-content">
                      <p><b>Documents</b></p>
                      <ul>
                        <li>Privacy Policy</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                  <div className="wrapper-footer-content">
                      <p><b>Notes</b></p>
                      <ul>
                      <li>We work with corporate clients!</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="wrapper-footer-content">
                      <p><b>Contacts</b></p>
                      <ul>
                        <li><a href='tel:+12152157672125' style={{color: 'black', textDecoration: 'none'}}>+1 (215) 215-767-2125</a></li>
                        <li><a href='tel:+79297873000' style={{color: 'black', textDecoration: 'none'}}>+7 (929) 111-11-11</a></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              
              <p style={{fontSize: 14}}>* The cost per kilometer in the DPR and LPR territories is 70 rubles!</p>
              </div>
            </Container>
        </div>
    </footer>
  );
}