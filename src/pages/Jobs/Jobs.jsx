import React, { useState, useRef, useEffect } from 'react';

function Jobs({ handlecreateJobs}) {
   const [formData, setFormData] = useState('')
   const [validForm, setValidForm] = useState(false)
    const [jobData, setJobData] = useState({
    date: "",
    priceBook: "",
    loan: "",
    payFull: "",
    product: "",
    quantity: "",
    "customer.name": "",
    " customer.address": "",
    " customer.phoneNumber": "",
    "customer.deposit": "",
    " customer.peopleInHouse": "",
  })

	const formElement = useRef()
  
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  function handleSubmit(e){
    e.preventDefault()
  return  handlecreateJobs(formData)
  }

  return (
    <>
      <form 
      autoComplete="off" 
      ref={formElement} 
      onSubmit={handleSubmit}
      >
        <select name="priceBook" 
          type="number"
          id='priceBook'
          onChange={handleChange}
          required
        >
          <option value="2">2</option>
          <option value="6">6</option>
        </select>
        <select name="product" 
          type="string"
          id='String'
          onChange={handleChange}
          required
        >
          <option value="Entrepreneur Filter">Entrepreneur Filter</option>
          <option value="Filter">Filter</option>
          <option value="Stove">Stove</option>
        </select>
        	<button
						type="submit"
						disabled={!validForm}
					>
						add job
					</button>
      </form>
    </>
  );
}

export default Jobs;