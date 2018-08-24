import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css';
import Favicon from 'react-favicon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(faStar);
library.add(fas,far);

ReactDOM.render(
    <div>
<Favicon url= "http://downloadicons.net/sites/default/files/number-10-of--yellow-icon-50704.png" />
<App />
</div>, document.getElementById('root'));
