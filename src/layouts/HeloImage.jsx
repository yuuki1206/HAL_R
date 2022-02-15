import React from 'react';

const HeloImage = () => {
  return(
    <div className='d-flex align-items-center vh-100 sass-helo_img'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <p className='text-light mb-3'>Do what you love and become a "professional".</p>
              <h1 className='text-light mb-3 font-size-60px letter-spacing-4px'>好きなことで「プロ」になる。</h1>
              <p className='text-light m-0'>
                卒業生の多くが、任天堂、カプコン、ドワンゴなど第一線で、プロフェッショナルとして活躍しています。<br/>
                あなたは、今、プロフェッショナルへの入口に立っています。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sass-helo_img_cover m-0"></div>
    </div>
  );
}

export default HeloImage;