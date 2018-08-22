import React from 'react';


// two columns
function CompanyView(props) {
  return (
    <div className="columns is-multiline">

    {/* // used map and ternary split the companies in two columns checking if company ID is even or odd */}
      <div className="column">
      
          props.companies.map((company, idx) => (
            (!(idx % 2) ? (<div className="column is-one-half" key={company.id} onClick={() => props.handleCompanyLink('company page', company)} > <figure className="image is-one-half"><img src={company.logo} /></figure> </div>) : (""))
          ))
        }
      </div>
      <div className="column">
        {
          props.companies.map((company, idx) => (
            ((idx % 2) ? (<div className="column is-one-half" key={company.id} onClick={() => props.handleCompanyLink('company page', company)}> <img src={company.logo} /> </div>) : (""))
          ))
        }
      </div>
    </div>
  )
}






export default CompanyView;