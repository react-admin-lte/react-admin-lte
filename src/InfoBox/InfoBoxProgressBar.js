// @inheritedComponent ProgressBar

import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

const InfoBoxProgressBar = ({
  description,
  ...other
}) => (
  <div>
    <ProgressBar key="bar" {...other} />,
    <span key="description" className="progress-description">{description}</span>
  </div>
);

InfoBoxProgressBar.propTypes = {
  /**
   * Description of progress.
   */
  description: PropTypes.node.isRequired
};

export default InfoBoxProgressBar;
