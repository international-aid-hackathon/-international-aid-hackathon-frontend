import React from 'react';

import { Wrapper } from './OrderCard-styles';

const OrderCard = ({order}) => {
  return (
    <Wrapper>
      <h2>{Profile}</h2>
      <h4>{(order)}</h4>
    </Wrapper>
  )
}

export default OrderCard