import React, {useState} from 'react';

function Customer({ jobData, handleChange }) {
  // const [formData, setFormData] = useState('')
  // const handleChange = evt => {
  //   console.log(evt);
	// 	setFormData({ ...formData, [evt.target.name]: evt.target.value })
	// }

  return (
    <>
      <input
          htmlFor="customer.name"
          type="text"
          id="customer.name"
          value={jobData["customer.name"]}
          onChange={handleChange}
          handleChangeInput="customer.name"
      />
      {/* <input type="text" />
      <input type="text" />
      <input type="text" /> */}
    </>
  );
}

export default Customer;