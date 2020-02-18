import React from 'react';

const LinkCard = ({link}) => {
  return (
    <div>
      <h2>Link</h2>
      <p>Short link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>From link: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Sum click on the link: <strong>{link.clicks}</strong></p>
      <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </div>
  )
};

export default LinkCard;