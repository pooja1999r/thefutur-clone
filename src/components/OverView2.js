import React, { PureComponent } from 'react';
import '../css/overview2.css';
import overview2 from '../images/overview2.jpeg'
export default class OverView2 extends PureComponent {
  render() {
    return <div className='overview2'> 
        <img src={overview2} className='img3'/>
        <div className='view2'>
            <h3 className='heading4'>At some point, you’re going to get burned.</h3>
            <p className='view2_para'>It happens to the best of us. And while it does tug on your </p>
            <p className='view2_para'> spirit, there’s not much you can do about unpredictability. </p>
            <p className='view2_para'>  But you can at least be prepared for whatever may come, </p>
            <p className='view2_para'>  and set yourself up for success. </p>
        </div>
    </div>;
  }
}
