import React from 'react';
import styles from './SalesHistory.module.css'
import {Card, ListGroup} from 'react-bootstrap'
function SalesHistory({jobData}) {
  console.log('here', jobData.jobDoc);
  return (
    <>
      {jobData.jobDoc?.map( (j, index) => (
          <div className={styles.mains}>
            <Card style={{ width: '18rem' }}>
            <Card.Header>{j.customer.name}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Product: {j.product}</ListGroup.Item>
              <ListGroup.Item> Date: {j.date} </ListGroup.Item>
              <ListGroup.Item> Date:{j.customer.deposit} </ListGroup.Item>
            </ListGroup>
          </Card>
          </div>
          
      ))}
  </>
  );
}

export default SalesHistory;