import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeaderOne(props) {
    return (
      <div>
          {/* <section class="hero is-info is-fullheight"> */}

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

        <div class="navbar-item has-dropdown is-hoverable"
        >
        <a class ="navbar-link has-text-black"> 
        <FontAwesomeIcon icon="user" />
        </a>
        <div class="navbar-dropdown">
        <a class ="navbar-item has-text-black"
        onClick={() => props.handleLinks('favorites page')}> My Favorites</a>
        <a class ="navbar-item has-text-black"> Logout</a>
        </div>
        </div>
         
        </div>
      </div>
    </div>
  </header>
  </div>
  {/* </section> */}
  </div>
    );
}

export default HeaderOne;