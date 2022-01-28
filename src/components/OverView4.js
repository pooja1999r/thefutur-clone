import React, { PureComponent } from 'react';
import '../css/overview4.css';

export default class OverView4 extends PureComponent {
  render() {
    return <div className='card_kit'>
        <h5 className='first_head'> The Legal Kit</h5>
        <h1 className='second_head'>Hope for the best, plan </h1>
        <h1 className='second_head'>for the worst.</h1>
        <div className='cards1'>
            <div className='card1'>
                   <h3 className='card_headings'> Tried-and-true tools</h3>
                  <div className='card1_paras'>
                      <p className='card1_para'>Get the resources you need to build bulletproof SOWs, guard yourself from lawsuits and offer clearly defined terms for how you like to work. </p>
                  </div>
            </div>
               
            <div className='card1'>
                 <h3 className='card_headings'>Be in charge </h3>
                  <div className='card1_paras'>
                      <p className='card1_para'>Work on your own terms and set the rules of engagement for all of your projects. Protect your business from the start to the very end of every engagement. </p>
                  </div>
            </div>
             <div className='card1'>
                  <h3 className='card_headings'>Build better client relationships </h3>
                  <div className='card1_paras'>
                      <p className='card1_para'> Show clients how professional and serious you are about helping them with the documentation to back it up. Your client will think, “They've clearly done this before.”</p>
                  </div>
            </div>
        </div>
    </div>;
  }
}
