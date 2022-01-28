import React, { PureComponent } from 'react';
import '../css/overview5.css';

export default class OverView5 extends PureComponent {
  render() {
    return <div className='unique'>  
        <div className='overview5'>
            <div className='right_blank'>
                 <h2>WHO THIS IS FOR</h2>
                 <hr/>
            </div>
            <div className='left_full'>
                <h1 className='view5_head'> This kit is for anyone who works  with clients.</h1>
                 <p className='view5_para'> No matter where you are in your career, you should always be prepared. Protect yourself and your business from just about anything with the resources in this kit.  This is for you:</p>
                <ul>
                    <li className='view5_list'>   Students</li>
                    <li className='view5_list'>Freelancers </li>
                    <li className='view5_list'> Creative Directors </li>
                    <li className='view5_list'>Studio Owners </li>
                </ul>
            </div>
        </div>
    </div>;
  }
}
