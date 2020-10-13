import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Family from './ex9_ex10/Family';
import Member from './ex9_ex10/Member';




ReactDOM.render(
  <Family>
        <Member name='Matheus' lastName='Costa'/>
        <Member name='Stef' lastName='Gab'/>
        <Member name='Kleyd' lastName='Bar'/>
  </Family>,
   document.getElementById('root')
);
