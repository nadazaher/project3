import React from 'react';

function LandingPage(props) {
  return (
    <div >
      <section class="hero is-info is-fullheight">

        {/* Start Header */}
        <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <h1 class="title is-size-3">OneOfTen</h1>
                </a>

              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">Button1</a>
                  <a class="navbar-item">Button2</a>
                  <a class="navbar-item">Button3</a>
                  <span class="navbar-item">
                    <a class="button is-light">
                      <span>Button4</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* End Header */}



        {/* Start Body */}
        {/* <div class="hero-body ">
          <div class="container has-text-centered ">
            <h1 class="title is-size-1">Who Makes My Product?</h1>
            <h2 class="subtitle is-size-4">
              It may be obvious that Twix and M&Ms are both owned by Mars, but did you know that Breyers and Vaseline share a parent company, Unilever? The majority of the brands you use daily are made by just 10 multinational conglomerates. By using our website, you can find out which companies make your favorite products and more details about each company. If you don’t see a product listed, you are encouraged to add it to its corresponding parent company. Let’s start by browsing through the list of companies or searching for a specific product!
          </h2>
          </div>
        </div> */}
        {/* End Body */}

        <div class="container">

          <section class="articles">
            <div class="column is-8 is-offset-2">

              <div class="card article">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content has-text-centered">
                      <p class="title article-title">Who Makes My Product?</p>
                    </div>
                  </div>
                  <div class="subtitle is-size-4">
                    <p>It may be obvious that Twix and M&Ms are both owned by Mars, but did you know that Breyers and Vaseline share a parent company, Unilever? The majority of the brands you use daily are made by just 10 multinational conglomerates. By using our website, you can find out which companies make your favorite products and more details about each company. If you don’t see a product listed, you are encouraged to add it to its corresponding parent company. Let’s start by browsing through the list of companies or searching for a specific product! </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Start Footer */}
        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth ">
            <div class="container">
              <ul>
                <li class="button is-light">
                  <a>Footer</a>
                </li>
                <li>
                  <a>Stuff</a>
                </li>
                <li>
                  <a>Goes</a>
                </li>
                <li>
                  <a>Here</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Footer */}

      </section>

    </div>
  );
}

export default LandingPage;
