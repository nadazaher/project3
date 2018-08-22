import React from 'react';



function CompanyView(props) {
  return (
    <div className="columns is-multiline">
      <div className="column">
        {
          props.companies.map((company, idx) => (
            (!(idx % 2) ? (<div className="column is-one-half" key={company.id} onClick={() => props.handleCompanyLink('company page', company)} ><img className="big-image" src={company.logo} /> </div>) : (""))
          ))
        }
      </div>
      <div className="column">
        {
          props.companies.map((company, idx) => (
            ((idx % 2) ? (<div className="column is-one-half" key={company.id} onClick={() => props.handleCompanyLink('company page', company)}><img className="big-image" src={company.logo} /> </div>) : (""))
          ))
        }
      </div>
    </div>
  )
}






export default CompanyView;