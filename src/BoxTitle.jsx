import React from 'react';

const propTypes = {
  text: React.PropTypes.string,
};

const BoxTitle = ({ text }) => (
  <h3 className="box-title">{text}</h3>
);

BoxTitle.propTypes = propTypes;

export default BoxTitle;
