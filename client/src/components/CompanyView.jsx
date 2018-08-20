import React from 'react';



function CompanyView(props) {
  return (
    <div className="columns is-multiline">
      <div className="column">
        {
          props.companies.map((company, idx) => (
            ((idx % 2) ? (<div className="column is-one-half" key={idx}> {company} </div>) : (""))
          ))
        }
      </div>
      <div className="column">
        {
          props.companies.map((company, idx) => (
            (!(idx % 2) ? (<div className="column is-one-half" key={idx}> {company} </div>) : (""))
          ))
        }
      </div>
    </div>
  )
}






export default CompanyView;