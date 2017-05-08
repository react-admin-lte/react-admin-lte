import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface Props {
  image?: React.ReactNode;
  username?: string;
  href?: string;
  description?: string;
  className?: string;
};

const propTypes = {
  image: PropTypes.node,
  username: PropTypes.string,
  href: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

const BoxUserBlock: React.StatelessComponent<Props> = ({
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
