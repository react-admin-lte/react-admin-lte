import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  alt?: string;
  className?: string;
  src?: string;
};

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
};

const MainSidebarUserPanelImage: React.StatelessComponent<Props> = ({
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
