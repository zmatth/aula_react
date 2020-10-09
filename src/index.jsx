import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './components/Primeiro';
// import Segundo from './components/Segundo';

ReactDOM.render(
  //ou pode usar a funcção feita, que seria o comment Primeiro() do Primeiro.jsx
  <>
  {/* fragment  */}
    <Primeiro value="1º"/>
    <Primeiro value="2º"/>
    <hr/>


    {/* <Segundo/>
    <hr/> */}
  </>
  ,
   document.getElementById('root')
);
