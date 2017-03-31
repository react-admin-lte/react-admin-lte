import React from 'react';
import classNames from 'classnames';

const propTypes = {
  alt: React.PropTypes.string,
  className: React.PropTypes.string,
  src: React.PropTypes.string,
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
