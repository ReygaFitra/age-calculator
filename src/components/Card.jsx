import React from 'react';

const Card = (props) => {
  const { styleCardBody, StyleCardTitle, title, children } = props;

  return (
    <div className={styleCardBody}>
      <div className={StyleCardTitle}>{title}</div>
      {children}
    </div>
  );
};

export default Card;
