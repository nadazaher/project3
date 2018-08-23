import React from 'react';

function Header(props) {
  return (
    <div>
      <div className="navbar header">

        <h1 className="navbar-item" onClick={() => props.handleLinks('landing page')}>One Big Ten</h1>
        <div className="navbar-end">
          {/* // here javascript is checking if the user is logged in (if username is in localStorage), if he/she is logged in then user will be able to see the dropdown navbar menu - notice the ternary operator ? :  also we set localStorage in state so it can refresh the page*/}
          {props.userInfo
            ?
            (<div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">{props.userInfo.username}
              </a>
              <div className="navbar-dropdown is-right">
                <a className="navbar-item" onClick={() => props.handleLinks('favorites page')}>Favorites</a>
                {/* <a className="navbar-item">High Score</a> */}
                <hr className="navbar-divider" />
                <a className="navbar-item">Logout</a>
              </div>
            </div>)
            :
            (<div onClick={() => props.handleLinks('login page')} className="navbar-item">Login</div>)
          }
        </div>
        {/* //handleLinks is a function that allows you to switch to another view() */}
      </div>
      <div className="columns is-multiline navigation">
        <div className="column is-one-half" onClick={() => props.handleLinks('companies index')}>Companies</div>
        <div className="column is-one-half" onClick={() => props.handleLinks('products index')}>Products</div>
      </div>

    </div>
  );
}

export default Header;