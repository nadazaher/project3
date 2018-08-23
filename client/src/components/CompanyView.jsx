import React from 'react';


// two columns
function CompanyView(props) {
  return (
    <div className="newscrollable">

    <div className="columns is-multiline">

    {/* // used map and ternary split the companies in two columns checking if company ID is even or odd */}
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
    </div>
  )
}






export default CompanyView;