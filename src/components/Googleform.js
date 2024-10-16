import React from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const Googleform = () => {
  return (
    <Element name="section2">
    <div className='googleform relative '>
       <div class="survey">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdI4W0Ih5lN3rG7vvplZPPJcpE_0hfw346pa0WMBLaLzKm56w/viewform?embedded=true" width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
            </div>
    </div>
    </Element>
  )
}

export default Googleform
