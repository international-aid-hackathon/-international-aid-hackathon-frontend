// import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/jobs`

export async function createjobs(orders) {
  const order = await fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(orders)
  })
	return order.json()
}

export async function getAllJobs() {
  return fetch(BASE_URL)
  .then(res => res.json())
}
