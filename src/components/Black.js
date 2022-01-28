import React, { PureComponent } from 'react';
import '../css/black.css';
import Black1 from './Black1';
import Black2 from './Black2';
import Black3 from './Black3';
import Black4 from './Black4';

export default class Black extends PureComponent {
  render() {
    return <div className='black'>
          <div className='heading_course'>
                <h2 className='black_heading1'> Inside This Course</h2>
                <h1 className='black_heading2'> What’s Included</h1>
             
            </div>
      <div className='black1'>
        <div className='container'>
            

           <div className='page1'>
               <li className='items'> 15-PAGE GUIDEBOOK</li>
                 <h2 className='page_head' > Know how and when to use certain documents.</h2>
                 <p className='page_para' > This easy-to-digest guidebook provides simple explanations for what each template is and where you might use it in client-facing relationships.</p>
            </div>
            <div className=''>
                <Black1 />
            </div>
        </div>

        <div className='container'>
           <div className='page1'>
               <li className='items'> MSA & SOW TEMPLATES </li>
                 <h2 className='page_head' > Master agreement and Statement of work.</h2>
                 <p className='page_para' > A thorough, three-part set of templates that sets the terms of your client relationship and saves you loads of time building SOWs.</p>
            </div>
             <div className=''>
             <Black2 />
             </div>
         </div>

         <div className='container'>
         <div className='page1'>
               <li className='items'> EMPLOYMENT AGREEMENT TEMPLATES </li>
                 <h2 className='page_head' >Be prepared to hire properly. </h2>
                 <p className='page_para' > Two different templates for when you need to hire full-time, part-time, or freelance employees. Clarify terms to your potential hires in a way they easily understand. </p>
            </div>
              <div className=''>
              <Black3 />
              </div>
          </div>

          <div className='container'>
          <div className='page1'>
               <li className='items'>NDA & MEDIA RELEASE TEMPLATES </li>
                 <h2 className='page_head' > Prepare for the worst, and stay protected. </h2>
                 <p className='page_para' > Keep yours and your client’s sensitive information protected with a mutual nondisclosure agreement and safeguard yourself from lawsuits with a media release form. </p>
            </div>
              <div className=''>
              <Black4 />
              </div>
          </div>
        </div>
     </div>;
  }
}
