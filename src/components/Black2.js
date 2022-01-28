import React, { PureComponent } from 'react';
import '../css/black2.css';
import black2 from '../images/page2.png';

export default class Black1 extends PureComponent {
  render() {
    return <div className='black2'>
         <img className='img_pages2' src={black2} />
    </div>;
  }
}
