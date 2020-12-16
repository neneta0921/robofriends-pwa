import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='nekos' src={`https://robohash.org/${id}?size=150x150&set=set4`} />
      <div>
        <h3 className='helvetica'>{name}</h3>
        <p className='helvetica'>{email}</p>
      </div>
    </div>
  );
}

export default Card;