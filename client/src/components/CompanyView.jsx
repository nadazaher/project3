import React from 'react';



function CompanyView(props) {
  return (
    <div className="columns is-multiline">
      <div className="column">
        {
          props.companies.map((company, idx) => (
            (!(idx % 2) ? (<div className="column is-one-half" key={company.id}> <figure className="image is-one-half"><img src={company.logo} /></figure> </div>) : (""))
          ))
        }
      </div>
      <div className="column">
        {
          props.companies.map((company, idx) => (
            (!(idx % 2) ? (<div className="column is-one-half" key={company.id}> <img src={company.logo} /> </div>) : (""))
          ))
        }
      </div>
    </div>
  )
}






export default CompanyView;