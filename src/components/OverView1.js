import React, { PureComponent } from 'react';
import '../css/overview1.css';
import overview1 from '../images/overview1.jpeg'
export default class OverView1 extends PureComponent {
  render() {
    return <div className='overview1'>
     <img src={overview1}  className='img2'/>
      <div className='view1'>
        <h3 className='heading3'>Every new client and new project is a risk.</h3>
        <p className='view1_para'>You’ve probably experienced, or at least heard, some of the </p>
        <p className='view1_para'>horror stories. “The client ghosted me and I haven't been paid.” </p>
        <p className='view1_para'>  “We agreed on three revisions, but they wanted more.” “I quoted </p>
        <p className='view1_para'>  them 12 pages for the site, but the scope kept growing.”</p>
      </div>
    </div>;
  }
}
