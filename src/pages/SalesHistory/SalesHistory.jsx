import React from 'react';

function SalesHistory({jobData}) {
  console.log('here', jobData.jobDoc);
  return (
    <>
    
      {jobData.jobDoc?.map( (j, index) => (
          <div>
            {/* <h1>{j.customer.name}</h1>
            <h1>{j.customer.History}</h1>
            <h1>{j.customer.phoneNumber}</h1>
            <h1>{j.customer.adress}</h1>
            <h1>{j.product}</h1> */}
           <div className="card" style={{width: "18rem"}}>
              <div class="card-header">
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{j.customer.History}</li>
                <li class="list-group-item">{j.customer.phoneNumber}</li>
                <li class="list-group-item">{j.customer.adress}</li>
                <li class="list-group-item">{j.product}</li>
              </ul>
            </div>
          </div>
          
      ))}
  </>
  );
}

export default SalesHistory;