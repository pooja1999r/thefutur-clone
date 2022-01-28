import React from 'react';
import '../css/LegalKit.css';
import legalkit from '../images/legalkit.jpg';
function LegalKit() {
  return <div>
        <div className='legalkit'>
            <div className='header'>
                <div className='left'>
                   <div className='logoname hd'>thefutur</div>
                    <div className='courses hd'>Courses & Tools</div>
                    <div className='content hd'>Content</div>
                    <div className='mission hd'>Our Mission</div>
                </div>

                <div className='right'>
                    <div className='one line'></div>
                    <div className='two line'></div>
                    <div className='three line'></div>  
                </div>
            </div>
            <div className='kitbuy'>
                <h2 className='heading1'>The Legal Kit</h2>
                <hr/>
                <h2 className='heading2'> $99 </h2>
                <p className='para'>Free your mind from worrying about the what-ifs and focus </p>
                <p className='para'>on the important stuff with these industry standard legal</p>
                <p className='para' > agreements. </p>
                <ul className='list'>
                    <li className='list_item'>MSA & SOW templates</li>
                    <li className='list_item'>Employee agreement templates</li>
                    <li className='list_item'>NDA & media release templates</li>
                    <li className='list_item'>Lifetime updates</li>
                </ul>
                <div className='btn2_div'>
                    <button className='btn2' >Buy Now</button>
                </div>
            </div>
            <img className='img' src={legalkit} />
        </div>
  </div>;
}

export default LegalKit;

