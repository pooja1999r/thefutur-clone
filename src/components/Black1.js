import React, { PureComponent } from 'react';
import '../css/black1.css';
import black1 from '../images/page1.png';

export default class Black1 extends PureComponent {
  render() {
    return <div className='black1'>
         <img className='img_pages' src={black1} />
    </div>;
  }
}
