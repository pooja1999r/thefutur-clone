import React, { PureComponent } from 'react';
import '../css/black4.css';
import black4 from '../images/confidential.png';

export default class Black1 extends PureComponent {
  render() {
    return <div className='black4'>
         <img className='img_pages4' src={black4} />
    </div>;
  }
}
