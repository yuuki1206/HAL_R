import React from 'react';

const SharpCard = (props) => {
  return(
    <div className='shadow sharp_card overflow-hidden' style={{ backgroundImage:  'url(' + props.children[0] + ')' }}>
      <div className="row h-100">
        <div className="col-6">
          <div className="white_wrap bg-light">
            <div className="d-flex flex-column justify-content-center w-100 h-100 white_area">
              <h3 className=''>{ props.children[1] }</h3>
              <h2 className='font-weight-bold letter-spacing-4px'>{ props.children[2] }</h2>
              <div className='underline-f6de79'></div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="img_wrap w-100 h-100"></div>
        </div>
      </div>
    </div>
  );
}

export default SharpCard;