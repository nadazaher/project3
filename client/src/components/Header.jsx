import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeaderOne(props) {
  return (
    <div>
      {/* Start Header */}
      <div class="hero-head">
        <header class="navbar is-info newheader">
          <div class="container ">
            <div class="navbar-brand ">
              <a class="navbar-item ">
                <h1 class="title is-size-3  has-text-black"
                  onClick={() => props.handleLinks('landing page')}>OneBigTen</h1>
              </a>

            </div>
            <div id="navbarMenuHero" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item has-text-black is-size-5"
                  onClick={() => props.handleLinks('companies index')}>COMPANIES </a>
                <a class="navbar-item has-text-black is-size-5"
                  onClick={() => props.handleLinks('products index')}>PRODUCTS </a>
                {/* // here javascript is checking if the user is logged in (if username is in localStorage), if he/she is logged in then user will be able to see the dropdown navbar menu - notice the ternary operator ? :  also we set localStorage in state so it can refresh the page*/}
                {
                  props.userInfo
                    ?
                    (
                      <div class="navbar-item has-dropdown is-hoverable"
                      >
                        <a class="navbar-link has-text-black">
                          <FontAwesomeIcon icon="user" />&nbsp;{props.userInfo.username}
                        </a>
                        <div class="navbar-dropdown is-right">
                          <a class="navbar-item has-text-black"
                            onClick={() => props.handleLinks('favorites page')}> My Favorites</a>
                          <hr className="navbar-divider" />
                          <a class="navbar-item has-text-black"
                            onClick={() => {props.handleLinks('landing page');
                            {props.handleLogoutSubmit} 
                          }}
                            > Logout</a>

                     
                        </div>
                      </div>
                    )
                    :
                    (
                      <span class="navbar-item" onClick={() => props.handleLinks('login page')}>
                        <a class="button is-light">
                          <span>Login</span>
                        </a>
                      </span>
                    )
                }

              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default HeaderOne;