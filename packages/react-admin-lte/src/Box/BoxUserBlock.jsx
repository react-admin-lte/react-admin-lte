import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  image: PropTypes.node,
  username: PropTypes.string,
  href: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

const BoxUserBlock = ({
  image,
  username,
  href,
  description,
  className
}) => (
  <div className="user-block">
    {image}
    <span className="username">
      <a href={href}>{username}</a>
    </span>
    <span className="description">
      {description}
    </span>
  </div>
);

BoxUserBlock.propTypes = propTypes;

export default BoxUserBlock;
