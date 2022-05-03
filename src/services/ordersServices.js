// import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/orders`


function createOrders(orders) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(orders)
  })
	.then(res => res.json())
}

export {
	createOrders
}