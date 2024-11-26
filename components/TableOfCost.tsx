"use client";

import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

export default function TableOfCost() {
  return (
    <div className='table'>
      <Container>
        <div className="wrap-template">
          <h2 className='wrap-template__title'>Directions:</h2>
          <Table striped bordered hover align='center'>
            <thead>
              <tr>
                <th>Route</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moscow - St. Petersburg</td>
                <td>702 km</td>
              </tr>
              <tr>
                <td>Volgograd - Rostov</td>
                <td>472 km</td>
              </tr>
              <tr>
                <td>Moscow - Volgograd</td>
                <td>972 km</td>
              </tr>
              <tr>
                <td>Volgograd - Samara</td>
                <td>811 km</td>
              </tr>
              <tr>
                <td>Volgograd - Donetsk</td>
                <td>591 km</td>
              </tr>
              <tr>
                <td>Moscow - Rostov</td>
                <td>1080 km</td>
              </tr>
              <tr>
                <td>Rostov - Donetsk</td>
                <td>267 km</td>
              </tr>
              <tr>
                <td colSpan={2}>We operate across all of Russia + new territories!</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
