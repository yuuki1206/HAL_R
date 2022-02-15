import React from 'react';

const TitleCard = (props) => {
  return(
    <div className={ props.children[0] }>
      <h2 className='title_card font-weight-bold font-size-60px mb-36px letter-spacing-4px'>{ props.children[1] }</h2>
      <h3 className='mb-36px'>{ props.children[2] }</h3>
      <p className='font-size-14px line-height-28px white-space-pre-wrap'>{ props.children[3] }</p>
    </div>
  );
}

export default TitleCard;