import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Family from './ex9_ex10/Family';
import Member from './ex9_ex10/Member';




ReactDOM.render(
  <Family>
        <Member name='Math' lastName='Cost'/>
        <Member name='Stef' lastName='Gab'/>
        <Member name='Kleyd' lastName='Bar'/>
        <Member name='Gus' lastName='Tavo'/>
        <Member name='Ander' lastName='Naka'/>
        <div>
              <ul type="square">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                    <li>item 5</li>
                    <li>item 6</li>
              </ul>
              <ul type="circle">
                    <li>item 7</li>
                    <li>item 8</li>
                    <li>item 9</li>
                    <li>item 10</li>
                    <li>item 11</li>
                    <li>item 12</li>
              </ul>
              <table>
                  <tr>
                        <th>\Firstname/</th>
                        <th>\Lastname/</th>
                        <th>\Age/</th>
                  </tr>
                  <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                  </tr>
                  <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                  </tr>
            </table>
        </div>
  </Family>,
   document.getElementById('root')
);
