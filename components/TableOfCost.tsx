"use client";

import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

export default function TableOfCost() {
  return (
    <div className='table'>
      <Container>
        <div className="wrap-template">
          <h2 className='wrap-template__title'>Our Service Area</h2>
          <Table striped bordered hover align='center'>
            <thead>
              <tr>
                <th>City</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pennsylvania - Delaware</td>
                <td>702 km</td>
              </tr>
              <tr>
                <td>New York - New Jersey</td>
                <td>472 km</td>
              </tr>
              <tr>
                <td>Boston - New Hampshire</td>
                <td>972 km</td>
              </tr>
              <tr>
                <td>Texax - Arizona</td>
                <td>811 km</td>
              </tr>
              <tr>
                <td>Ohio - DMV</td>
                <td>591 km</td>
              </tr>
              <tr>
                <td>Florida - California</td>
                <td>1080 km</td>
              </tr>
              <tr>
                <td>Alaska - Nevada</td>
                <td>267 km</td>
              </tr>
              <tr>
                <td colSpan={2}>We operate across all of the US + and it's territories!</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
