import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LandingPage(props) {
  return (
    <div className="newnewscrollable">
      <section class="hero is-info is-fullheight">

        <div class="hero body hello">
          <section class="articles">
            <div class="column is-8 is-offset-2  ">
              <div class="card article  ">
                <div class="card-content  ">
                  <div class="media ">
                    <div class="media-content has-text-centered">
                      <h1 class="title is-1 has-text-dark ">Who Makes My Product?</h1>
                    </div>
                  </div>

                  <p class="subtitle is-4 has-text-black ">It may be obvious that Twix and M&Ms are both owned by Mars, but did you know that Breyers and Vaseline share a parent company, Unilever? The majority of the brands you use daily are made by just 10 multinational conglomerates. By using our website, you can find out which companies make your favorite products and more details about each company. If you don’t see a product listed, you are encouraged to add it to its corresponding parent company. Let’s start by browsing through the list of companies or searching for a specific product! </p>

                </div>
              </div>

            </div>
          </section>
        </div>

        {/* End Body */}

      </section>
    </div>
  );
}

export default LandingPage;

