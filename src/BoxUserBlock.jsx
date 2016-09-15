import React from 'react';
import classNames from 'classnames';

const propTypes = {
  image: React.PropTypes.node,
  username: React.PropTypes.string,
  href: React.PropTypes.string,
  description: React.PropTypes.string,
  className: React.PropTypes.string,
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
