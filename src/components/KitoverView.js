import React, { PureComponent } from 'react';
import '../css/kitoverView.css';
import OverView1 from './OverView1';
import OverView2 from './OverView2';
import OverView3 from './OverView3';
import OverView4 from './OverView4';
import Black from './Black';
import OverView5 from './OverView5';

export default class KitoverView extends PureComponent {
  render() {
    return <div className='kitoverview'>
        <div className='head'>
            <div className='let'>
                <p className=''> The Legal Kit </p>
                <p className=''> Overview </p>
                <p className=''> What's Inside </p>
            </div>
            <div className='rit'>
                <button className='btn' >Buy Now</button>
            </div>
        </div>
        <div>
               <OverView1 />
               <OverView2 />
               <OverView3 />
               <OverView4 />
               <Black />
               <OverView5 />
        </div>

    </div>;
  }
}
