import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
};

const MainSidebarUserPanelImage = ({
  alt,
  className,
  src,
}) => {
  const classes = {
    image: true,
    'pull-left': true,
  };

  return (
    <div className={classNames(className, classes)}>
      <img alt={alt} src={src} className="img-circle" />
    </div>
  );
};

MainSidebarUserPanelImage.propTypes = propTypes;

export default MainSidebarUserPanelImage;
