import React, { PureComponent } from 'react';
import '../css/overview3.css';
import overview3 from '../images/overview3.jpeg';

export default class OverView3 extends PureComponent {
  render() {
    return <div className='overview3'> 
    <img src={overview3} className='img4'/>
    <div className='view3'>
        <h3 className='heading5'>    You’re a professional. Act like it.</h3>
        <p className='view3_para'>If you enter a new client relationship prepared, not only will you</p>
        <p className='view3_para'>  be setting the terms of the engagement, but you let the client  </p>
        <p className='view3_para'> know that you take their business seriously. </p>

        <p className='view3_para'>The Legal Kit includes agreements that are template versions of   </p>
        <p className='view3_para'>  what we use for our business here in the US, and they are  </p>
        <p className='view3_para'>  applicable internationally. If you're unsure, consider having a   </p>
        <p className='view3_para'> lawyer check them out as well.</p>
    </div>
   
</div>;
  }
}
