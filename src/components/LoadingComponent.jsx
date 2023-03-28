import React from 'react';
import PropTypes from 'prop-types';

function LoadingComponent({ extraStyling }) {
  return <div className={`flex bg-zinc-800 animate-pulse w-full h-full ${extraStyling}`} />;
}

LoadingComponent.propTypes = {
  extraStyling: PropTypes.string,
};

LoadingComponent.defaultProps = {
  extraStyling: '',
};

export default LoadingComponent;
