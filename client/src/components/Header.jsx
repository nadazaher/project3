import React from 'react';

function Header(props) {
  return (
    <div>
      <div className="navbar header">
        <h1 className="navar-item">Who makes my Product?</h1>
        <div className="navbar-end">
          {window.localStorage.getItem("username") ?
            (<div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">{window.localStorage.getItem("username")}
          </a>
              <div className="navbar-dropdown is-right">
                <a className="navbar-item">Favorites</a>
                <a className="navbar-item">High Score</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Logout</a>
              </div>
            </div>)
            :
            (<div onClick={() => props.handleLinks('login page')}className="navbar-item">Login</div>)
          }
        </div>

      </div>
      <div className="columns is-multiline navigation">
        <div className="column is-one-half" onClick={() => props.handleLinks('companies index')}>Companies</div>
        <div className="column is-one-half" onClick={() => props.handleLinks('products index')}>Products</div>
      </div>

    </div>
  );
}

export default Header;


