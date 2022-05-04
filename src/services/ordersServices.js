// import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/orders`


export async function createOrders(orders) {
  const order = await fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(orders)
  })
	return order.json()
}

export async function getAllOrders() {
  return fetch(BASE_URL)
  .then(res => res.json())
}
